import { EmptyStackException } from './exceptions';
import { SearchPredicate } from './type';

export default class Stack<E = any> implements Iterable<E> {
  /**
   * The container of elements. For the sake of safety, this property is private and thus not
   * accessible from outside the class.
   * @private
   */
  private elements: E[] = [];

  /**
   * To create an empty stack or a stack with given elements in a form of iterable.
   */
  public constructor();
  public constructor(iterable: Iterable<E>);
  public constructor(iterable?: Iterable<E>) {
    if (iterable) {
      for (const element of iterable) {
        this.push(element);
      }
    }
  }

  /**
   * Iterable implementation.
   */
  * [Symbol.iterator]() {
    for (let i = this.elements.length - 1; i >= 0; --i) {
      yield this.elements[i];
    }
  }

  /**
   * Pushes an item onto the top of this stack.
   * @param item the item to push onto this stack
   * @return the item argument
   */
  public push(item: E): E {
    this.elements.push(item);
    return item;
  }

  /**
   * (when <count> is default) Pops an item from this stack and returns it.
   * The item popped is removed from this stack.
   * This method differs from poll() only in that it throws an exception if this stack is empty.
   * (when <count> is greater than 1) Executes <count> times of pop and return the last item.
   * Item traveled will be removed, including the returned one.
   * @param count the number of times executing pop, the default value is 1
   * @return the item popped from this stack or the last pop item
   * @throws EmptyStackException (when <count> is default) if this stack is empty
   * @throws EmptyStackException (when <count> is greater than 1) if this stack is empty when the
   * last pop is being executed
   */
  public pop(count: number = 1): E {
    let item;

    for (let i = 0; i < count; ++i) {
      item = this.elements.pop();
    }

    if (item === undefined) {
      throw new EmptyStackException();
    }

    return item;
  }

  /**
   * Pops an item from this stack and returns it, or returns null if this stack is empty.
   * The item popped is removed from this stack.
   * @return the top item on this stack, or null if the stack is empty
   */
  public poll(): E | null {
    const item = this.elements.pop();
    return item === undefined ? null : item;
  }

  /**
   * Returns the top item on this stack without removing it.
   * This method differs from peek() only in that it throws an exception if this stack is empty.
   * @return the top item on this stack
   * @throws EmptyStackException if this stack is empty
   */
  public element(): E {
    if (this.elements.length === 0) {
      throw new EmptyStackException();
    }

    return this.elements[this.elements.length - 1];
  }

  /**
   * Returns the top item on this stack without removing it, or returns null if this stack is empty.
   * @return the top item on this stack
   * @throws EmptyStackException if this stack is empty
   */
  public peek(): E | null {
    if (this.elements.length === 0) {
      return null;
    }

    return this.elements[this.elements.length - 1];
  }

  /**
   * Returns the number of elements in this stack.
   * @return the number of elements in this stack.
   */
  public size(): number {
    return this.elements.length;
  }

  /**
   * Tests if this stack is empty.
   * @return true if this stack contains no items, false otherwise
   */
  public empty(): boolean {
    return this.size() === 0;
  }

  /**
   * Returns the 1-based position where an element is on this stack.
   * If the element occurs as an item in this stack, this method returns the distance from the
   * top of this stack of the occurrence nearest the top of this stack; the topmost item on the
   * stack is considered to be at distance 1.
   * @param item the item to search for
   * @return the 1-based depth of the item, or -1 if the item is not on this stack
   */
  public search(item: E): number {
    if (this.elements.length == 0) {
      return -1;
    }

    const index = this.elements.indexOf(item);
    return index == -1 ? -1 : this.elements.length - index;
  }

  /**
   * Iterates over elements of this stack, returning the first element predicate returns true for.
   * @param predicate the function invoked per iteration.
   * @return the 1-based depth of the item, or -1 if the item satisfied is not in this queue
   */
  public find(predicate: SearchPredicate<E>): number {
    let position = 1;
    let found = false;
    for (const element of this) {
      if (predicate(element)) {
        found = true;
        break;
      }
      position++;
    }

    return found ? position : -1;
  }
}