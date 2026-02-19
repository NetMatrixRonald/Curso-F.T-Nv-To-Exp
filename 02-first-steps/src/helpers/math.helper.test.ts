import { expect, test, describe } from 'vitest'
import { add, subtrac, multiply, divide } from './math.helper'

describe('add', () => {
    test('Should add two positives numbers', () => {

        // ! Arrange

        const a = 2

        const b = 2

        // ! Act

        const result = add(a, b)

        // ! Assert

        expect(result).toBe(a + b)
    }),

        test('Should add two negatives numbers', () => {
            const a = -2
            const b = -2

            const result = add(a, b)

            expect(result).toBe(a + b)
        })

})


describe('substrac', () => {
    test('Should subtract negatives numbers', () => {
        const a = -2
        const b = -2


        const result = subtrac(a, b)

        expect(result).toBe(a - b)
    }),

    test('Should subtract two positives numbers', () => {
        const a = 2
        const b = 2


        const result = subtrac(a, b)

        expect(result).toBe(a - b)
    })
})

describe('multiply', () => {
    test('Should multiply negatives numbers', () => {
        const a = -2
        const b = -2


        const result = multiply(a, b)
        console.log({ result })

        expect(result).toBe(a * b)
    }),

    test('Should multiply two positives numbers', () => {
        const a = 2
        const b = 2


        const result = multiply(a, b)

        expect(result).toBe(a * b)
        
    })
})

describe('divide', () => {
    test('Should divide two positives numbers', () => {
        const a = 2
        const b = 2

        const result = divide(a, b)

        expect(result).toBe(a/b)
    }),

    test('Should divide two negatives numbers', () => {
        const a = -2
        const b = -2

        const result = divide(a, b)

        expect(result).toBe(a/b)
    })
    
    

}) 





