import React, { useState,useRef } from 'react'
import { OverLayer } from '../../components'
import { Footer } from '../../components/footer';
import './mywork.css'

export const Mywork = () => {
    const [toggle, settoggle] = useState<boolean>(false);
    const getmenuIcon = useRef(null)

    const handleToggleMenu = () => {
        settoggle(!toggle)
       
    }

  return (
    <>
    <div className='mywork h-screen w-full flex flex-col '>
            <div className=' h-20 flex justify-end items-center w-11/12 mx-auto'>
                <i ref={getmenuIcon} onClick={handleToggleMenu} className={toggle?'fa fixed z-10 text-white fa-xmark text-3xl':'fa fixed z-10 text-white fa-bars text-3xl'}/>
            </div>
            <div className=' w-11/12 mx-auto'>
                    <div className=' text-white text-8xl font-semibold'>My <span className=' text-yellow-600'>Work</span></div>
                    <div className=' text-3xl myt-3 font-semibold text-white capitalize'>Check Out some of my project...</div>
            </div>
            <div>
                
            </div>
            <OverLayer show={toggle} />
    </div>
            <Footer/>
    </>
  )
}