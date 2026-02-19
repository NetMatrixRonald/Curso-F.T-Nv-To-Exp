import { useState } from "react"





export const useCounter = (initialValue:number = 10) => {
     const [counter, setCounter] = useState(initialValue)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter((prevCounter) => prevCounter - 1)
    }

    const handleReset = () => {
        setCounter(0)
    }

    return {

        // Values
        counter,
        // Methods / Actions
        handleIncrement,
        handleDecrement,
        handleReset
        
    }

}

