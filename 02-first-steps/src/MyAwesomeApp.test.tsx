import { describe, expect, test } from "vitest";
import MyAswesomeApp from "./MyAwesomeApp";
import { render, screen } from '@testing-library/react'

// describe('MyAweSomeApp', () => {
//     test('Should render firstName and lastName -', () => {
//         const { container } = render(<MyAswesomeApp />)
//         screen.debug()
//         const h3 = container.querySelector('h3')
//         const h1 = container.querySelector('h1')
//         expect(h1?.innerHTML).toContain('Pochita')
//         expect(h3?.innerHTML).toContain('Sierra')
//     })
// })

describe('MyAweSomeApp', () => {
    test('Should render firstName and lastName - screen', () => {
        render(<MyAswesomeApp />)
        screen.debug()

        const h1 = screen.getByTestId('firstName',)

        expect(h1.innerHTML).toContain('Pochita')
    });

    test('Should match snapshot', () => {
        const { container } = render(<MyAswesomeApp />)
        expect(container).toMatchSnapshot()
    })
})