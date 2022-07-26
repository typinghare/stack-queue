"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("./exceptions");
class Stack {
    constructor(iterable) {
        /**
         * The container of elements. For the sake of safety, this property is private and thus not
         * accessible from outside the class.
         * @private
         */
        this.elements = [];
        if (iterable) {
            for (const element of iterable) {
                this.push(element);
            }
        }
    }
    /**
     * Iterable implementation.
     */
    *[Symbol.iterator]() {
        for (let i = this.elements.length - 1; i >= 0; --i) {
            yield this.elements[i];
        }
    }
    /**
     * Pushes an item onto the top of this stack.
     * @param item the item to push onto this stack
     * @return the item argument
     */
    push(item) {
        this.elements.push(item);
        return item;
    }
    /**
     * Pops an item from this stack and returns it. The item popped is removed from this stack.
     * This method differs from poll() only in that it throws an exception if this stack is empty.
     * @return the item popped from this stack
     * @throws EmptyStackException if this stack is empty
     */
    pop() {
        const item = this.elements.pop();
        if (item == undefined) {
            throw new exceptions_1.EmptyStackException();
        }
        return item;
    }
    /**
     * Pops an item from this stack and returns it, or returns null if this stack is empty.
     * The item popped is removed from this stack.
     * @return the top item on this stack, or null if the stack is empty
     */
    poll() {
        const item = this.elements.pop();
        return item === undefined ? null : item;
    }
    /**
     * Returns the top item on this stack without removing it.
     * This method differs from peek() only in that it throws an exception if this stack is empty.
     * @return the top item on this stack
     * @throws EmptyStackException if this stack is empty
     */
    element() {
        if (this.elements.length === 0) {
            throw new exceptions_1.EmptyStackException();
        }
        return this.elements[this.elements.length - 1];
    }
    /**
     * Returns the top item on this stack without removing it, or returns null if this stack is empty.
     * @return the top item on this stack
     * @throws EmptyStackException if this stack is empty
     */
    peek() {
        if (this.elements.length === 0) {
            return null;
        }
        return this.elements[this.elements.length - 1];
    }
    /**
     * Returns the number of elements in this stack.
     * @return the number of elements in this stack.
     */
    size() {
        return this.elements.length;
    }
    /**
     * Tests if this stack is empty.
     * @return true if this stack contains no items, false otherwise
     */
    empty() {
        return this.size() === 0;
    }
    /**
     * Returns the 1-based position where an element is on this stack.
     * If the element occurs as an item in this stack, this method returns the distance from the
     * top of this stack of the occurrence nearest the top of this stack; the topmost item on the
     * stack is considered to be at distance 1.
     * @param item the item to search for
     * @return the 1 based depth of the item, or -1 if the item is not on this stack
     */
    search(item) {
        if (this.elements.length == 0) {
            return -1;
        }
        const index = this.elements.indexOf(item);
        return index == -1 ? -1 : this.elements.length - index;
    }
}
exports.default = Stack;