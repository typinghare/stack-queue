import { EmptyStackException, Stack } from '../src/index.js'

describe('stack test', function () {
    it('should be constructed', function () {
        const stack = new Stack()
        expect(stack.size()).toEqual(0)
    })

    it('should be constructed with iterator', () => {
        const stack = new Stack([1, 2, 3])
        expect(stack.size()).toEqual(3)
        expect(stack.peek()).toEqual(3)
    })

    it('should be able to push and pop', function () {
        const stack = new Stack<number>()
        stack.push(10)
        stack.push(20)
        stack.push(30)

        expect(stack.pop()).toEqual(30)
        expect(stack.pop(2)).toEqual(10)
    })

    it('should throw EmptyStackException when calling pop() on empty stack', () => {
        const stack = new Stack<number>()
        expect(() => {
            stack.pop()
        }).toThrow(EmptyStackException)
    })

    it('should be able to poll', function () {
        const stack = new Stack<number>([10, 20])

        expect(stack.poll()).toEqual(20)
        expect(stack.poll()).toEqual(10)
        expect(stack.poll()).toEqual(null)
    })

    it('should be able to element and peek', function () {
        const stack = new Stack()
        stack.push(10)
        expect(stack.element()).toEqual(10)
        expect(stack.peek()).toEqual(10)

        stack.pop()
        expect(() => {
            stack.element()
        }).toThrow(EmptyStackException)
        expect(() => {
            stack.peek()
        }).not.toThrow(EmptyStackException)
    })

    it('should test if it is empty', function () {
        const stack = new Stack()
        expect(stack.empty()).toEqual(true)

        stack.push(10)
        expect(stack.empty()).toEqual(false)
    })

    it('should push an array of elements', () => {
        const stack = new Stack<number>()

        stack.pushAll([10, 20, 30])
        expect(stack.size()).toBe(3)
        expect(stack.peek()).toBe(30)
    })

    it('should search for an element', function () {
        const stack = new Stack<number>()
        expect(stack.search(10)).toEqual(-1)

        stack.pushAll([10, 20, 30])
        expect(stack.search(10)).toEqual(2)
        expect(stack.search(50)).toEqual(-1)
    })

    it('should find an element', function () {
        const stack = new Stack<string>()
        stack.push('apple')
        stack.push('banana')
        stack.push('cat')
        stack.push('dog')

        expect(stack.find((word) => word.at(0) === 'c')).toEqual(2)
        expect(stack.find((word) => word.at(0) === 'e')).toEqual(-1)
    })

    it('should be iterable', function () {
        const stack = new Stack<number>()
        stack.push(10)
        stack.push(20)
        stack.push(30)

        let count = 0
        let number = 30
        for (const element of stack) {
            count++
            expect(element).toEqual(number)
            number -= 10
        }
        expect(count).toEqual(stack.size())
    })

    it('should call each', () => {
        const collection = new Stack(['James', 'Bob', 'Alex'])
        let lines: string[] = []
        collection.each((name) => {
            lines.push(`Hi, ${name}`)
        })

        expect(lines.join('; ')).toEqual('Hi, Alex; Hi, Bob; Hi, James')
    })

    it('should call inverseEach', () => {
        const collection = new Stack(['James', 'Bob', 'Alex'])
        let lines: string[] = []
        collection.inverseEach((name) => {
            lines.push(`Hi, ${name}`)
        })

        expect(lines.join('; ')).toEqual('Hi, James; Hi, Bob; Hi, Alex')
    })
})
