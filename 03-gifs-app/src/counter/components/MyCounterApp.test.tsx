import { describe, expect, test } from "vitest";
import MyCounterApp from "./MyCounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

describe('MyCounterApp', () => {
  test('Should render the component', () => {
    render(<MyCounterApp/>)

    screen.debug()

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('Counter 10')

    expect(screen.getByRole('button', { name: '+1'})).toBeDefined()
    expect(screen.getByRole('button', { name: '-1'})).toBeDefined()
    expect(screen.getByRole('button', { name: 'Reset'})).toBeDefined()


  }),
  test('Should increment the counter', () => {
    render(<MyCounterApp/>)

    const labelH1 = screen.getByRole('heading', { level: 1 })
    const buttonIncremet = screen.getByRole('button', { name: '+1'})

    fireEvent.click(buttonIncremet);

    expect(labelH1.innerHTML).toContain('Counter 11')

  }),
  test('Should decrement the counter', () => {
    render(<MyCounterApp/>)

    const labelH1 = screen.getByRole('heading', { level: 1 })
    const buttonDecrement = screen.getByRole('button', { name: '-1'})

    fireEvent.click(buttonDecrement);

    expect(labelH1.innerHTML).toContain('Counter 9')

  }),
  test('Should reset the counter', () => {
    render(<MyCounterApp/>)

    const labelH1 = screen.getByRole('heading', { level: 1 })
    const buttonReset = screen.getByRole('button', { name: 'Reset'})

    fireEvent.click(buttonReset);

    expect(labelH1.innerHTML).toContain('Counter 0')

  })

})