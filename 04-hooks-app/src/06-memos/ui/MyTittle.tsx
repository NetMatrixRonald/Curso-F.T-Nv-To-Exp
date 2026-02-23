import React, { memo } from 'react'

interface Props {
    title: string;
    
}

const MyTittle = React.memo(({title}:Props) => {

    console.log('My tittle Re-Render')

  return (
    <>
      <h1 className='text-3xl'>{title}</h1>
    </>
  )
}
)
export default MyTittle
