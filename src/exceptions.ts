export class EmptyStackException extends Error {
  constructor() {
    super('Stack underflow.');
  }
}

export class EmptyQueueException extends Error {
  constructor() {
    super('Queue underflow.');
  }
}