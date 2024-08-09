import { EmptyQueueException } from './exceptions.js'
import { Collection } from './collection.js'

/**
 * @author James Chen
 */
export class Queue<E = unknown> extends Collection<E> {
    /**
     * Insert the specified element into this queue.
     * @param item the item to insert
     */
    public enqueue(item: E): E {
        this.internalElements.push(item)
        return item
    }

    /**
     * (when <count> is default) Retrieves and remove the head of this queue.
     * This method differs from poll() only in that it throws an exception if
     * this queue is empty. (when <count> is greater than 1) Executes <count>
     * times of dequeue and return the last item. Item traveled will be removed,
     * including the returned one.
     * @param count the number of times executing dequeue, default by 1
     * @return the head of this queue or the last dequeue item
     * @throws EmptyQueueException (when <count> is default) if this queue is
     *         empty
     * @throws EmptyQueueException (when <count> is greater than 1) if this
     *         queue is empty when the last queue is being executed
     */
    public dequeue(count: number = 1): E {
        let item

        for (let i = 0; i < count; ++i) {
            item = this.internalElements.shift()
        }

        if (item === undefined) {
            throw new EmptyQueueException()
        }

        return item
    }

    /**
     * Retrieves and remove the head of this queue, or returns null if this
     * queue is empty.
     * @return the head of this queue, or null if this queue is empty
     */
    public poll(): E | null {
        const item = this.internalElements.shift()
        return item === undefined ? null : item
    }

    /**
     * Retrieves, but does not remove, the head of this queue.
     * This method differs from peek() only in that it throws an exception if
     * this queue is empty.
     * @return the head of this queue
     * @throws EmptyQueueException if this queue is empty
     */
    public element(): E {
        if (this.internalElements.length === 0) {
            throw new EmptyQueueException()
        }

        return this.internalElements[0]
    }

    /**
     * Retrieves, but does not remove, the head of this queue, or returns null
     * if this queue is empty.
     * @return the head of this queue, or null if this queue is empty
     */
    public peek(): E | null {
        if (this.internalElements.length === 0) {
            return null
        }

        return this.internalElements[0]
    }

    public enqueueAll(iterator: Iterable<E>): void {
        this.addAll(iterator)
    }
}
