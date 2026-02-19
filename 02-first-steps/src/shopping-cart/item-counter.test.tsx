import { describe, expect, test } from "vitest";
import ItemCounter from "./item-counter";
import { fireEvent, render, screen } from "@testing-library/react";


describe('item-counter', () => {

    test('Should render with default values', () => {
        const name = 'Test Item'
        render(<ItemCounter name={name} />)

        expect(screen.getByText('Test Item')).toBeDefined()
        expect(screen.getByText('Test Item')).toBeDefined()
    }),

        test('Should render with custom quantity', () => {
            const name = 'Control de Nintendo'
            const quantity = 10;
            render(<ItemCounter name={name} quantity={quantity} />)

            expect(screen.getByText(quantity)).toBeDefined()

        });

    test('Should increase count when +1 button is pressed', () => {


        render(<ItemCounter name={'Test Item'} quantity={1} />)

        const [HandleClickAdd] = screen.getAllByRole('button')

        fireEvent.click(HandleClickAdd)

        expect(screen.getByText('2')).toBeDefined()

    });

    test('Should decrease count when -1 button is pressed', () => {
        const quantity = 5

        render(<ItemCounter name={'Test Item'} quantity={quantity} />)

        const [, handleClickSubtract] = screen.getAllByRole('button')

        fireEvent.click(handleClickSubtract)

        expect(screen.getByText('4')).toBeDefined()
    });

    test('Should decrease count when -1 button is pressed and quantity is 1', () => {
        const quantity = 5

        render(<ItemCounter name={'Test Item'} quantity={1} />)

        const [, handleClickSubtract] = screen.getAllByRole('button')

        fireEvent.click(handleClickSubtract)

        expect(screen.getByText('1')).toBeDefined()
    });

    test('Should changge to black when count is greather than 1', () => {
        const quantity = 2
        const name = 'Test Item'
        render(<ItemCounter name={name} quantity={quantity} />)

        const itemText = screen.getByText(name)

        expect(itemText.style.color).toBe('black')

    });

    test('Should changge to red when count is 1', () => {
        const quantity = 1
        const name = 'Test Item'
        render(<ItemCounter name={name} quantity={quantity} />)

        const itemText = screen.getByText(name)

        expect(itemText.style.color).toBe('red')

    })

    })