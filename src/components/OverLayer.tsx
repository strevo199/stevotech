import React, { FC, useState } from 'react'
import "./overlayer.css";
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom'
interface OverLayerProps {
    show: boolean;
    
}

export const OverLayer:FC <OverLayerProps>= (props: OverLayerProps) => {
    const [navLinks, setnavLinks] = useState([
        {title: 'HOME', link: '/'},
        {title: 'ABOUT', link: '/about'},
        {title: 'MY WORK', link: '/mywork'},
        {title: 'HOW TO REACH ME', link: '/contact'},
        {title: 'BLOG', link: '/blogs'},
    ])
    const location = useLocation();

    
  return (
    <div  className={props.show ? 'h-screen fixed w-full flex sm:flex-row flex-col': ' hidden '}>
        <div  className='sm:flex-1 slide-top py-2 sm:py-0 bg-slate-800 flex justify-center items-center'>
            <div className='myphoto1 sm:h-64 sm:w-64 w-40 h-40  rounded-full'></div>
        </div>
        <div  className='flex-1 bg-slate-900 slide-down flex  flex-col justify-center items-center gap-5'>
           
            {
                navLinks.map(link => {
                    return (
                        <Link key={link.link} to ={link.link} className = {link.link === location.pathname ? ' text-yellow-400': ' text-white  hover:text-yellow-400'} ><div className='sm:text-4xl text-xl'>{link.title}</div></Link>
                    )
                })
            }
        </div>
    </div>
  )
}
