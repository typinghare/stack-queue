import { Collection } from '../src/index.js'

describe('collection test', function () {
    it('should construct inversely', () => {
        const collection = new Collection<number>([1, 2, 3, 4, 5], true)
        expect(collection.get(1)).toBe(4)
        expect(collection.get(4)).toBe(1)
    })

    it('should get all elements', () => {
        const collection = new Collection<number>([5, 4, 3, 2, 1])
        const elements = collection.elements
        expect(elements.length).toBe(5)
        expect(elements).toEqual([5, 4, 3, 2, 1])
    })

    it('should call each', () => {
        const collection = new Collection(['James', 'Bob', 'Alex'])
        let lines: string[] = []
        collection.each((name) => {
            lines.push(`Hi, ${name}`)
        })

        expect(lines.join('; ')).toEqual('Hi, James; Hi, Bob; Hi, Alex')
    })

    it('should call inverseEach', () => {
        const collection = new Collection(['James', 'Bob', 'Alex'])
        let lines: string[] = []
        collection.inverseEach((name) => {
            lines.push(`Hi, ${name}`)
        })

        expect(lines.join('; ')).toEqual('Hi, Alex; Hi, Bob; Hi, James')
    })
})
