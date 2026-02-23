import React, { useCallback, useState } from 'react'
import MyTittle from './ui/MyTittle'
import MySubtittle from './ui/MySubtittle'
import { date } from 'zod/v4'
import { Subtitles } from 'lucide-react'

const MemoHook = () => {

    const handleMyApiCall = (myValue: string) => {
        console.log('Llamando a mi API', myValue)
    }

    const [tittle, settittle] = useState('Hola')
    const [subtittle, setsubtittle] = useState('Mundo')

    // const handleMyAPICall = useCallback(() => {
    //     console.log('Llamando a mi API - ' + subtittle)
    // }, [subtittle])


  return (
    <div className='bg-gradient flex flex-col gap-4'>

      <h1 className='text-2xl font-thin text-white'>Memo Hook</h1>

        <MyTittle title={tittle}/>

        <MySubtittle subtittle={subtittle} callMyAPI={handleMyApiCall(subtittle)}/>
        

        


        <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={() => settittle('Hello, ' + new Date().getTime())}>
            Cambiar Titulo
        </button>

        <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        // onClick={() => setsubtittle('World, ' + new Date().getTime())}>
        onClick={() => setsubtittle('World')}>
            Cambiar Subtitulo
        </button>
    </div>
  )
}

export default MemoHook
