import React, { useState,useRef } from 'react'
import { OverLayer } from '../../components'
import { Footer } from '../../components/footer';
import './contact.css'

export const Contact = () => {
    const [toggle, settoggle] = useState<boolean>(false);
    const getmenuIcon = useRef(null)

    const handleToggleMenu = () => {
        settoggle(!toggle)
       
    }

  return (
    <>
        <div className='home h-screen w-full flex flex-col '>
                <div className=' h-20 flex justify-end items-center w-11/12 mx-auto'>
                    <i ref={getmenuIcon} onClick={handleToggleMenu} className={toggle?'fa fixed z-10 text-white fa-xmark text-3xl':'fa fixed z-10 text-white fa-bars text-3xl'}/>
                </div>
                <div className=' w-11/12 mx-auto'>
                        <div className=' text-white text-8xl font-semibold'>Contact <span className=' text-yellow-600'>Me</span></div>
                        <div className=' text-3xl myt-3 font-semibold text-white capitalize'>This is How you can reach me...</div>
                </div>
                

                <OverLayer show={toggle} />
        </div>
        <Footer/>
    </>
  )
}