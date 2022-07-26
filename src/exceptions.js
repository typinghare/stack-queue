"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyQueueException = exports.EmptyStackException = void 0;
class EmptyStackException extends Error {
    constructor() {
        super('Stack underflow.');
    }
}
exports.EmptyStackException = EmptyStackException;
class EmptyQueueException extends Error {
    constructor() {
        super('Queue underflow.');
    }
}
exports.EmptyQueueException = EmptyQueueException;
