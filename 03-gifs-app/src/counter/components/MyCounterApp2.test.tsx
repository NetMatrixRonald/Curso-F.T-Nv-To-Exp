import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import MyCounterApp from "./MyCounterApp";
import { useCounter } from "../hooks/useCounter";

const handleIncrementMock = vi.fn()
const handleDecrement = vi.fn()
const handleReset = vi.fn()

vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 20,
        handleIncrement: handleIncrementMock,
        handleDecrement: handleDecrement,
        handleReset: handleReset
    })
}))

describe('MyCounterApp', () => {

    test('Should render the component', () => {
        render(<MyCounterApp />)

        screen.debug()

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('Counter 20')

        expect(screen.getByRole('button', { name: '+1' })).toBeDefined()
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined()
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined()
    }),
    test('Should call handleIncrement if button is clicked', () => {
        render(<MyCounterApp/>)

        const button = screen.getByRole('button', { name: '+1' })

        fireEvent.click(button)

        
        expect(handleIncrementMock).toHaveBeenCalledTimes(1)
        expect(handleDecrement).not.toHaveBeenCalled()


    })
})