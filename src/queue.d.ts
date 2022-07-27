import { SearchPredicate } from './type';
export default class Queue<E = any> {
    /**
     * The container of elements. For the sake of safety, this property is private and thus not
     * accessible from outside the class.
     * @private
     */
    private elements;
    constructor();
    constructor(iterable: Iterable<E>);
    /**
     * Iterable implementation.
     */
    [Symbol.iterator](): Generator<E, void, unknown>;
    /**
     * Insert the specified element into this queue.
     * @param item the item to insert
     */
    enqueue(item: E): E;
    /**
     * (when <count> is default) Retrieves and remove the head of this queue.
     * This method differs from poll() only in that it throws an exception if this queue is empty.
     * (when <count> is greater than 1) Executes <count> times of dequeue and return the last item.
     * Item traveled will be removed, including the returned one.
     * @param count the number of times executing dequeue, the default value is 1
     * @return the head of this queue or the last dequeue item
     * @throws EmptyQueueException (when <count> is default) if this queue is empty
     * @throws EmptyQueueException (when <count> is greater than 1) if this queue is empty when the
     * last queue is being executed
     */
    dequeue(count?: number): E;
    /**
     * Retrieves and remove the head of this queue, or returns null if this queue is empty.
     * @return the head of this queue, or null if this queue is empty
     */
    poll(): E | null;
    /**
     * Retrieves, but does not remove, the head of this queue.
     * This method differs from peek() only in that it throws an exception if this queue is empty.
     * @return the head of this queue
     * @throws EmptyQueueException if this queue is empty
     */
    element(): E;
    /**
     * Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
     * @return the head of this queue, or null if this queue is empty
     */
    peek(): E | null;
    /**
     * Returns the number of elements in this queue.
     * @return the number of elements in this queue
     */
    size(): number;
    /**
     * Tests if this queue is empty.
     * @return true if this queue contains no items, false otherwise
     */
    empty(): boolean;
    /**
     * Returns the position of an item in this queue.
     * @param item the item to search for
     * @return the 1-based depth of the item, or -1 if the item is not in this queue
     */
    search(item: E): number;
    /**
     * Iterates over elements of this queue, returning the first element predicate returns true for.
     * @param predicate the function invoked per iteration.
     * @return the 1-based depth of the item, or -1 if the item satisfied is not in this queue
     */
    find(predicate: SearchPredicate<E>): number;
}
