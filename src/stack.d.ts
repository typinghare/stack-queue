import { SearchPredicate } from './type';
export default class Stack<E = any> implements Iterable<E> {
    /**
     * The container of elements. For the sake of safety, this property is private and thus not
     * accessible from outside the class.
     * @private
     */
    private elements;
    /**
     * To create an empty stack or a stack with given elements in a form of iterable.
     */
    constructor();
    constructor(iterable: Iterable<E>);
    /**
     * Iterable implementation.
     */
    [Symbol.iterator](): Generator<E, void, unknown>;
    /**
     * Pushes an item onto the top of this stack.
     * @param item the item to push onto this stack
     * @return the item argument
     */
    push(item: E): E;
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
    pop(count?: number): E;
    /**
     * Pops an item from this stack and returns it, or returns null if this stack is empty.
     * The item popped is removed from this stack.
     * @return the top item on this stack, or null if the stack is empty
     */
    poll(): E | null;
    /**
     * Returns the top item on this stack without removing it.
     * This method differs from peek() only in that it throws an exception if this stack is empty.
     * @return the top item on this stack
     * @throws EmptyStackException if this stack is empty
     */
    element(): E;
    /**
     * Returns the top item on this stack without removing it, or returns null if this stack is empty.
     * @return the top item on this stack
     * @throws EmptyStackException if this stack is empty
     */
    peek(): E | null;
    /**
     * Returns the number of elements in this stack.
     * @return the number of elements in this stack.
     */
    size(): number;
    /**
     * Tests if this stack is empty.
     * @return true if this stack contains no items, false otherwise
     */
    empty(): boolean;
    /**
     * Returns the 1-based position where an element is on this stack.
     * If the element occurs as an item in this stack, this method returns the distance from the
     * top of this stack of the occurrence nearest the top of this stack; the topmost item on the
     * stack is considered to be at distance 1.
     * @param item the item to search for
     * @return the 1-based depth of the item, or -1 if the item is not on this stack
     */
    search(item: E): number;
    /**
     * Iterates over elements of this stack, returning the first element predicate returns true for.
     * @param predicate the function invoked per iteration.
     * @return the 1-based depth of the item, or -1 if the item satisfied is not in this queue
     */
    find(predicate: SearchPredicate<E>): number;
}
