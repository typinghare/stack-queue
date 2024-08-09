import { SearchPredicate } from './type.js'

/**
 * @since 1.0.0
 */
export class Collection<E = unknown> implements Iterable<E> {
    /**
     * Collection elements.
     * @protected
     */
    protected internalElements: E[] = []

    /**
     * Creates a collection.
     * @param iterable An iterable object to initialize this collection
     * (optional).
     * @param reversed Whether to reverse the order of elements (default: true).
     */
    public constructor(iterable?: Iterable<E>, reversed: boolean = false) {
        this.addAll(iterable, reversed)
    }

    /**
     * Retrieves an element.
     * @param index The index of the element to retrieve
     */
    public get(index: number): E {
        return this.internalElements[index]
    }

    /**
     * Returns an iterator for the collection.
     */
    public *[Symbol.iterator](): IterableIterator<E> {
        for (let i = 0; i < this.internalElements.length; ++i) {
            yield this.internalElements[i]
        }
    }

    /**
     * Gets the elements array of this collection.
     * @since 0.1.0
     */
    public get elements(): E[] {
        return this.internalElements
    }

    /**
     * Returns the number of elements in this collection.
     * @return The number of elements.
     */
    public size(): number {
        return this.internalElements.length
    }

    /**
     * Tests if the collection is empty.
     * @return True if the collection contains no items, false otherwise.
     */
    public empty(): boolean {
        return this.size() === 0
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
        this.internalElements.forEach(callback)
    }

    /**
     * Iterates over elements in reverse order, applying the callback function.
     * @param callback The function to apply to each element.
     * @since 0.1.0
     */
    public inverseEach(
        callback: (value: E, index?: number, array?: E[]) => void
    ): void {
        for (let i = this.internalElements.length - 1; i >= 0; --i) {
            callback(this.internalElements[i], i, this.internalElements)
        }
    }

    /**
     * Finds the first element that matches the predicate.
     * @param predicate The function to test each element.
     * @return The 1-based position of the item, or -1 if not found.
     */
    public find(predicate: SearchPredicate<E>): number {
        let position = 1
        let found = false
        for (const element of this) {
            if (predicate(element)) {
                found = true
                break
            }
            position++
        }

        return found ? position : -1
    }

    /**
     * Searches for the position of an item in the collection.
     * @param item The item to search for.
     * @return The 0-based position from the beginning of the collection, or -1
     * if not found.
     */
    public search(item: E): number {
        if (this.internalElements.length == 0) {
            return -1
        }

        return this.internalElements.indexOf(item)
    }

    /**
     * Add elements to the collection.
     * @param iterable An iterable object to initialize this collection
     * (optional).
     * @param reversed Whether to reverse the order of elements (default: true).
     */
    public addAll(iterable?: Iterable<E>, reversed: boolean = false): void {
        if (iterable) {
            for (const element of iterable) {
                if (reversed) {
                    this.internalElements.unshift(element)
                } else {
                    this.internalElements.push(element)
                }
            }
        }
    }
}
