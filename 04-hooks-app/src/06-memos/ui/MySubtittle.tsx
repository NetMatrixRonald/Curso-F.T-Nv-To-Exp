import React from 'react'


interface Props {
    subtittle: string;

    callMyAPI: CallMyAPI
}

const MySubtittle = React.memo(({subtittle, callMyAPI}:Props) => {

    console.log('My subtittle Re-render')
    


  return (
    <div>
      <h6 className='text-2xl font-bold text-center'>{subtittle}</h6>

      <button className='bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer'
      onClick={callMyAPI}>Llamar a funcion</button>
    </div>
  )
})

export default MySubtittle
