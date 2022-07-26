export default class Queue<E = any> {
    /**
     * The container of elements. For the sake of safety, this property is private and thus not
     * accessible from outside the class.
     * @private
     */
    private elements;
    /**
     * To create an empty queue or a queue with given elements in a form of iterable.
     */
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
     * Retrieves and remove the head of this queue.
     * This method differs from poll() only in that it throws an exception if this queue is empty.
     * @return the head of this queue
     * @throws EmptyQueueException if this queue is empty
     */
    dequeue(): E;
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
}
