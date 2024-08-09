import { EmptyStackException } from './exceptions.js'
import { Collection } from './collection.js'

/**
 * @author James Chen
 */
export class Stack<E = unknown> extends Collection<E> {
    public override *[Symbol.iterator](): IterableIterator<E> {
        for (let i = this.internalElements.length - 1; i >= 0; --i) {
            yield this.internalElements[i]
        }
    }

    /**
     * Pushes an item onto the top of this stack.
     * @param item the item to push onto this stack
     * @return the item argument
     */
    public push(item: E): E {
        this.internalElements.push(item)
        return item
    }

    /**
     * (when <count> is default) Pops an item from this stack and returns it.
     * The item popped is removed from this stack.
     * This method differs from poll() only in that it throws an exception if
     * this stack is empty. (when <count> is greater than 1) Executes <count>
     * times of pop and return the last item.
     * Item traveled will be removed, including the returned one.
     * @param count the number of times executing pop, the default value is 1
     * @return the item popped from this stack or the last pop item
     * @throws EmptyStackException (when <count> is default) if this stack is
     *         empty
     * @throws EmptyStackException (when <count> is greater than 1) if the
     *         length of this stack is less than <count>. In this case, this
     *         function pops all elements and throw the exception.
     * last pop is being executed
     */
    public pop(count: number = 1): E {
        let item

        while (count > 0) {
            if (this.internalElements.length === 0) {
                throw new EmptyStackException()
            }

            item = this.internalElements.pop()
            count--
        }

        return item as E
    }

    /**
     * Pops an item from this stack and returns it, or returns null if this
     * stack is empty. The item popped is removed from this stack.
     * @return the top item on this stack, or null if the stack is empty
     */
    public poll(): E | null {
        const item = this.internalElements.pop()
        return item === undefined ? null : item
    }

    /**
     * Returns the top item on this stack without removing it.
     * This method differs from peek() only in that it throws an exception if
     * this stack is empty.
     * @return the top item on this stack
     * @throws EmptyStackException if this stack is empty
     */
    public element(): E {
        if (this.internalElements.length === 0) {
            throw new EmptyStackException()
        }

        return this.internalElements[this.internalElements.length - 1]
    }

    /**
     * Returns the top item on this stack without removing it, or returns null
     * if this stack is empty.
     * @return the top item on this stack
     * @throws EmptyStackException if this stack is empty
     */
    public peek(): E | null {
        if (this.internalElements.length === 0) {
            return null
        }

        return this.internalElements[this.internalElements.length - 1]
    }

    /**
     * Iterates over elements in this collection, applying the callback
     * function.
     * @param callback The function to apply to each element.
     * @since 0.1.0
     */
    public each(
        callback: (value: E, index?: number, array?: E[]) => void
    ): void {
        super.inverseEach(callback)
    }

    /**
     * Iterates over elements in reverse order, applying the callback function.
     * @param callback The function to apply to each element.
     * @since 0.1.0
     */
    public inverseEach(
        callback: (value: E, index?: number, array?: E[]) => void
    ): void {
        super.each(callback)
    }

    /**
     * Pushes a collection of elements onto the stack.
     * @param iterator The collection of elements to push onto the stack
     */
    public pushAll(iterator: Iterable<E>): void {
        this.addAll(iterator)
    }

    /**
     * Searches for the position of an item in the stack.
     * @param item The item to search for.
     * @return The 0-based position from the top of the stack, or -1 if
     * not found.
     */
    public search(item: E): number {
        const index: number = super.search(item)
        return index >= 0 ? this.internalElements.length - index - 1 : -1
    }
}
