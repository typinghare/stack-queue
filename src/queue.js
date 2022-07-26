"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("./exceptions");
class Queue {
    constructor(iterable) {
        /**
         * The container of elements. For the sake of safety, this property is private and thus not
         * accessible from outside the class.
         * @private
         */
        this.elements = [];
        if (iterable) {
            for (const element of iterable) {
                this.enqueue(element);
            }
        }
    }
    /**
     * Iterable implementation.
     */
    *[Symbol.iterator]() {
        for (let i = 0; i < this.elements.length; ++i) {
            yield this.elements[i];
        }
    }
    /**
     * Insert the specified element into this queue.
     * @param item the item to insert
     */
    enqueue(item) {
        this.elements.push(item);
        return item;
    }
    /**
     * Retrieves and remove the head of this queue.
     * This method differs from poll() only in that it throws an exception if this queue is empty.
     * @return the head of this queue
     * @throws EmptyQueueException if this queue is empty
     */
    dequeue() {
        const item = this.elements.shift();
        if (item == undefined) {
            throw new exceptions_1.EmptyQueueException();
        }
        return item;
    }
    /**
     * Retrieves and remove the head of this queue, or returns null if this queue is empty.
     * @return the head of this queue, or null if this queue is empty
     */
    poll() {
        const item = this.elements.shift();
        return item === undefined ? null : item;
    }
    /**
     * Retrieves, but does not remove, the head of this queue.
     * This method differs from peek() only in that it throws an exception if this queue is empty.
     * @return the head of this queue
     * @throws EmptyQueueException if this queue is empty
     */
    element() {
        if (this.elements.length === 0) {
            throw new exceptions_1.EmptyQueueException();
        }
        return this.elements[0];
    }
    /**
     * Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
     * @return the head of this queue, or null if this queue is empty
     */
    peek() {
        if (this.elements.length === 0) {
            return null;
        }
        return this.elements[0];
    }
    /**
     * Returns the number of elements in this queue.
     * @return the number of elements in this queue
     */
    size() {
        return this.elements.length;
    }
    /**
     * Tests if this queue is empty.
     * @return true if this queue contains no items, false otherwise
     */
    empty() {
        return this.size() === 0;
    }
    /**
     * Returns the position of an item in this queue.
     * @param item the item to search for
     * @return the 1-based depth of the item, or -1 if the item is not in this queue
     */
    search(item) {
        if (this.empty()) {
            return -1;
        }
        const index = this.elements.indexOf(item);
        return index == -1 ? -1 : index + 1;
    }
}
exports.default = Queue;
