import { EmptyQueueException, Queue } from '../src/index.js'

describe('queue test', function () {
    it('should be constructed successfully', function () {
        const queue = new Queue()
        expect(queue.size()).toEqual(0)
    })

    it('should be constructed with iterator', () => {
        const queue = new Queue([1, 2, 3])
        expect(queue.size()).toEqual(3)
        expect(queue.size()).toEqual(3)
    })

    it('should be able to enqueue and dequeue', function () {
        const queue = new Queue<number>()
        queue.enqueue(10)
        queue.enqueue(20)
        queue.enqueue(30)

        expect(queue.dequeue()).toEqual(10)
        expect(queue.dequeue(2)).toEqual(30)
        expect(() => {
            queue.dequeue()
        }).toThrow(EmptyQueueException)
    })

    it('should be able to poll', function () {
        const queue = new Queue<number>([10, 20])
        expect(queue.poll()).toEqual(10)
        expect(queue.poll()).toEqual(20)
        expect(queue.poll()).toEqual(null)
    })

    it('should be able to element and peek', function () {
        const queue = new Queue()
        queue.enqueue(10)
        expect(queue.element()).toEqual(10)
        expect(queue.peek()).toEqual(10)

        queue.dequeue()
        expect(() => {
            queue.element()
        }).toThrow(EmptyQueueException)
        expect(() => {
            queue.peek()
        }).not.toThrow(EmptyQueueException)
    })

    it('should test if it is empty', function () {
        const queue = new Queue()
        expect(queue.empty()).toEqual(true)

        queue.enqueue(10)
        expect(queue.empty()).toEqual(false)
    })

    it('should search for an element', function () {
        const queue = new Queue<number>()

        expect(queue.search(10)).toEqual(-1)

        queue.enqueue(10)
        queue.enqueue(20)
        queue.enqueue(30)

        expect(queue.search(10)).toEqual(0)
        expect(queue.search(50)).toEqual(-1)
    })

    it('should enqueue an array', function () {
        const stack = new Queue<number>()
        expect(stack.search(10)).toEqual(-1)

        stack.enqueueAll([10, 20, 30])
        expect(stack.search(10)).toEqual(0)
        expect(stack.search(50)).toEqual(-1)
    })

    it('should find an element', function () {
        const queue = new Queue<string>()
        queue.enqueue('apple')
        queue.enqueue('banana')
        queue.enqueue('cat')
        queue.enqueue('dog')

        expect(queue.find((word) => word.at(0) === 'c')).toEqual(3)
        expect(queue.find((word) => word.at(0) === 'e')).toEqual(-1)
    })

    it('should be iterable', function () {
        const queue = new Queue<number>()
        queue.enqueue(10)
        queue.enqueue(20)
        queue.enqueue(30)

        let count = 0
        let number = 10
        for (const element of queue) {
            count++
            expect(element).toEqual(number)
            number += 10
        }
        expect(count).toEqual(queue.size())
    })
})
