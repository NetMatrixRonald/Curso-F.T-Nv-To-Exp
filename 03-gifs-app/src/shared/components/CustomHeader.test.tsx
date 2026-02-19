import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CustomHeader } from './CustomHeader'

describe('CustomHeader', () => {

    const tittle = 'Buscador de Gifs'
    const description = 'Descubre y comparte el gif perfecto'

    test('Should render the tittle correctly', () => {
        render(<CustomHeader tittle={tittle} />)
        screen.debug()

        const h1 = screen.getByTestId('tittle')

        expect(h1.innerHTML).toBeDefined()
    }),
        test('Shoul render the description when provided', () => {
            render(<CustomHeader description={description} tittle='tin' />)

            const descrption = screen.getByTestId('des')

            expect(descrption.innerHTML).toBe('Descubre y comparte el gif perfecto')


        }),
        test('Should not render description when not provided', () => {
            const { container } = render(<CustomHeader tittle={tittle} />)

            const description = container.querySelector('descrip')?.innerHTML

            expect(description).toBeNull
        })
})


