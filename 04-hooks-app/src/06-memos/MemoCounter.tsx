import { useCounter } from '@/hooks/useCounter'

import  { useMemo } from 'react'

const heavyStuff = (iterationNumber: number) => {
    console.log('Heavy_Stuff_Started')

    for (let index = 0; index < iterationNumber; index++) {
        console.log('Ahi Vamos....')

    }

    console.timeEnd('Heavy_Stuff_Finished')

    return `${iterationNumber} iteraciones realizadas`
}

const MemoCounter = () => {

    const { counter, increment, decrement } = useCounter(40_000)
    const { counter: counter2, increment: increment2 } = useCounter(10)
    const myHeavyValue = useMemo(() => heavyStuff(counter), [counter])
    return (
        <div className='bg-gradient flex flex-col gap-4'>
            <h1>Memo - useMemo - {myHeavyValue}</h1>
            <hr />

            <h4>counter: {counter} </h4>
            <h4>counter: {counter2} </h4>

            <button className='bg-blue-500 text-white font-bold cursor-pointer rounded-md px-4 py-2'
                onClick={increment}>
                Counter Incrementer
            </button>
            <button className='bg-blue-500 text-white font-bold cursor-pointer rounded-md px-4 py-2 ml-2'
                onClick={increment2}>
                Counter Incrementer 2
            </button>


        </div>
    )
}

export default MemoCounter
