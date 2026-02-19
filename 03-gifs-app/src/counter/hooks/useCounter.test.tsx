import { describe, expect, test, } from 'vitest'
import { useCounter } from './useCounter'
import { act, renderHook } from '@testing-library/react'


describe('UseCounter', () => {

    test('Should initialize with default value of 10', () => {

        const { result } = renderHook(() => useCounter()) 

        expect(result.current.counter).toBe(10)


    });
    test('Should initialize with value 20', () => {
        const initialValue = 20;

        const { result } = renderHook(() => useCounter(initialValue))

        expect(result.current.counter).toBe(initialValue)
    }),
    test('Should increment counter when handleAdd is called', () => {
        
        const { result } = renderHook(() => useCounter())

        act(() => {
            result.current.handleIncrement()
        })
        

        expect(result.current.counter).toBe(11)
    }),
    test('Should decrement counter when handleDecrement is called', () => {
        
        const { result } = renderHook(() => useCounter())

        act(() => {
            result.current.handleDecrement()
        })

        expect(result.current.counter).toBe(9)
    }),
    test('Should reset counter when handleReset is called', () => {

        const { result } = renderHook(() => useCounter())

        act(() => {
            result.current.handleReset()
        })

        expect(result.current.counter).toBe(0)


    }),
    test('Should reset counter when handleReset is called', () => {

        const { result } = renderHook(() => useCounter())

        act(() => {
            result.current.handleReset()
        })

        expect(result.current.counter).toBe(0)


    }),
    test('Should reset the initialValue when handleReset called', () => {

        const { result } = renderHook(() => useCounter())

        act(() => {
            result.current.handleDecrement()
        })

        expect(result.current.counter).toBe(9)

        
        act(() => {
            result.current.handleReset()
        })

        expect(result.current.counter).toBe(0)
        

        
})
})