
import { useCounter } from '../hooks/useCounter'

const MyCounterApp = () => {
    
    const {counter, handleIncrement, handleDecrement, handleReset} = useCounter()
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

        <h1>Counter {counter}</h1>
        
        <div style={{display: 'flex', gap: '10px'}}>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleDecrement}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default MyCounterApp
