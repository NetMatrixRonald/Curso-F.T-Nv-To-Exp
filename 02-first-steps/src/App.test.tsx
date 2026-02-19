import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import App from "./App";
import ItemCounter from "./shopping-cart/item-counter";


const mockItemCounter = vi.fn((props: unknown) => {
    return (<div data-testid="ItemCounter" />)
})

vi.mock('./shopping-cart/item-counter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}))
// vi.mock('./shopping-cart/item-counter', () => ({
//      ItemCounter: (props: unknown) => 
//     <div data-testid="ItemCounter" name={props.name} quantity={props.quantity} />
// }))



describe('App', () => {

    afterEach(() => {
        vi.clearAllMocks()
    })

    test('Should match snapshot', () => {
        const { container } = render(<App />)

        expect(container).toMatchSnapshot()


    });

    test('should render the correct number of ItemCounter components', () => {

        render(<App />)

        const itemCounters = screen.getAllByTestId('ItemCounter')

        expect(itemCounters.length).toBe(3)


    }),

        test('Should render ItemCounters with correct props', () => {
            render(<App />)

            expect(mockItemCounter).toHaveBeenCalledTimes(3)
            expect(mockItemCounter).toHaveBeenCalledWith({
                name: "Nintendo Switch 2", quantity: 10
            })
            expect(mockItemCounter).toHaveBeenCalledWith({
                name: "PlayStation 5", quantity: 5
            })
            expect(mockItemCounter).toHaveBeenCalledWith({
                name: "Xbox Series X", quantity: 20
            })
        })


})