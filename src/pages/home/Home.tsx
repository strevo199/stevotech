import React, { useState,useRef } from 'react'
import { OverLayer } from '../../components'
import './home.syle.css'

export const Home = () => {
    const [toggle, settoggle] = useState<boolean>(false);
    const getmenuIcon = useRef(null)

    const handleToggleMenu = () => {
        settoggle(!toggle)
       
    }

  return (
    <div className='home h-screen w-full flex flex-col '>
            <div className=' h-20 flex justify-end items-center w-11/12 mx-auto'>
                <i ref={getmenuIcon} onClick={handleToggleMenu} className={toggle?'fa fixed z-10 text-white fa-xmark text-3xl':'fa fixed z-10 text-white fa-bars text-3xl'}/>
            </div>
            <div className='flex-1 flex items-center w-11/12 mx-auto'>
                <div>
                    <div className=' text-white sm:text-8xl font-semibold text-5xl'>Stephen <span className=' text-yellow-500'>Mgbeojikwe</span></div>
                    <div className=' bg-slate-800 bg-opacity-50 sm:text-2xl text-sm my-4 font-semibold text-white'>Web Developer, Mobile UI Developer & Backend Developer</div>
                    <div className='flex gap-5'>
                        <a href=""><i className='fab text-white fa-twitter text-xl sm:text-3xl'/></a>
                        <i className='fab text-white fa-facebook text-xl sm:text-3xl'/>
                        <i className='fab text-white fa-linkedin text-xl sm:text-3xl'/>
                        <i className='fab text-white fa-github text-xl sm:text-3xl'/>
                    </div>
                </div>
            </div>
            <OverLayer show={toggle} />
    </div>
  )
}