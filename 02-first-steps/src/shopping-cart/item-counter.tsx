import React, { useState } from 'react'
import './item-counter.css'
import styles from'./item-counter.module.css'

export interface ProductProps {
    name: string;
    quantity?: number

}






export const ItemCounter = ({ name, quantity = 1 }: ProductProps) => {

const [count, setCount] = useState(quantity)

const handleClickAdd = () => {
    
    setCount(count + 1)
    console.log('Hola Mundo Desde Item Counter')
}
const handleClickSubtract = () => {
    if (count === 1) return

    setCount(count - 1)
}

    return (
        <div className={styles['item-row']} >
            <span className={styles['item-text']} style={{ color: count === 1 ? 'red' : 'black' }}>{name}</span>
            <button
            onClick={() => {
                handleClickAdd()
            }}>+1</button>
            <span>{count}</span>
            <button 
            onClick={() => {
                handleClickSubtract()
            }}>-1</button>
        </div>
    )
}

export default ItemCounter
