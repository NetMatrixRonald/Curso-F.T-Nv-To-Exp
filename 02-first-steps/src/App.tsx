import type { ProductProps } from './shopping-cart/item-counter';
import { useState } from 'react'
import MyAswesomeApp from './MyAwesomeApp'
import './App.css'
import { ItemCounter } from './shopping-cart/item-counter'

interface ItemInCart {
  key: number
  productName: string;
  quantity: number;
}

const ItemsInCart: ItemInCart[] = [
  {
    key: 1,productName: "Nintendo Switch 2", quantity: 10,
  },
  {
    key: 2, productName: "PlayStation 5", quantity: 5,
  },
  {
    key: 3, productName: "Xbox Series X", quantity: 20,
  },
]

function App() {

  return (
    <>


      <h1>Carrito de compras</h1>
      {ItemsInCart.map(({productName, quantity}) => (
        <ItemCounter name={productName} quantity={quantity} />
      ))}
      
    </>
  )
}

export default App
 