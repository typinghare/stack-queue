import { EmptyQueueException } from './exceptions';

export default class Queue<E = any> {
  /**
   * The container of elements. For the sake of safety, this property is private and thus not
   * accessible from outside the class.
   * @private
   */
  private elements: E[] = [];

  /**
   * To create an empty queue or a queue with given elements in a form of iterable.
   */
  public constructor();
  public constructor(iterable: Iterable<E>);
  public constructor(iterable?: Iterable<E>) {
    if (iterable) {
      for (const element of iterable) {
        this.enqueue(element);
      }
    }
  }

  /**
   * Iterable implementation.
   */
  * [Symbol.iterator]() {
    for (let i = 0; i < this.elements.length; ++i) {
      yield this.elements[i];
    }
  }

  /**
   * Insert the specified element into this queue.
   * @param item the item to insert
   */
  public enqueue(item: E): E {
    this.elements.push(item);
    return item;
  }

  /**
   * Retrieves and remove the head of this queue.
   * This method differs from poll() only in that it throws an exception if this queue is empty.
   * @return the head of this queue
   * @throws EmptyQueueException if this queue is empty
   */
  public dequeue(): E {
    const item = this.elements.shift();

    if (item == undefined) {
      throw new EmptyQueueException();
    }

    return item;
  }

  /**
   * Retrieves and remove the head of this queue, or returns null if this queue is empty.
   * @return the head of this queue, or null if this queue is empty
   */
  public poll(): E | null {
    const item = this.elements.shift();
    return item === undefined ? null : item;
  }

  /**
   * Retrieves, but does not remove, the head of this queue.
   * This method differs from peek() only in that it throws an exception if this queue is empty.
   * @return the head of this queue
   * @throws EmptyQueueException if this queue is empty
   */
  public element(): E {
    if (this.elements.length === 0) {
      throw new EmptyQueueException();
    }

    return this.elements[0];
  }

  /**
   * Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
   * @return the head of this queue, or null if this queue is empty
   */
  public peek(): E | null {
    if (this.elements.length === 0) {
      return null;
    }

    return this.elements[0];
  }

  /**
   * Returns the number of elements in this queue.
   * @return the number of elements in this queue
   */
  public size(): number {
    return this.elements.length;
  }

  /**
   * Tests if this queue is empty.
   * @return true if this queue contains no items, false otherwise
   */
  public empty(): boolean {
    return this.size() === 0;
  }

  /**
   * Returns the position of an item in this queue.
   * @param item the item to search for
   * @return the 1-based depth of the item, or -1 if the item is not in this queue
   */
  public search(item: E): number {
    if (this.empty()) {
      return -1;
    }

    const index = this.elements.indexOf(item);
    return index == -1 ? -1 : index + 1;
  }
}