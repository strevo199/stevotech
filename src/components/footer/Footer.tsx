import React from 'react'

export const Footer = () => {

    const date = new Date()    

  return (
    <div className=' h-20 bg-black flex justify-center items-center '>
        <div className='text-white'>Stephen Mgbeojikwe &copy; {date.getFullYear()}</div>
    </div>
  )
}
