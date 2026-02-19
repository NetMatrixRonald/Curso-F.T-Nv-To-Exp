import React, { useRef } from 'react'

const FocusScreen = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    const OnClick = () => {
        inputRef.current?.select()
        console.log(inputRef.current?.value)
    }

  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl font-thin text-white'> Focus Screen</h1>

        <input ref={inputRef}
        type="text"  
        className='bg-white text-black px-4 py-2 rounded-2xl' 
        autoFocus />

        <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={OnClick}>Focus Input</button>
    </div>
  )
}

export default FocusScreen
