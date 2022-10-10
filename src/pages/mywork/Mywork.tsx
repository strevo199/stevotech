import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { OverLayer } from '../../components'
import { Footer } from '../../components/footer';
import './mywork.css'
import axios from "axios";

export const Mywork = () => {
    const [toggle, settoggle] = useState<boolean>(false);
    const [isloading, setisloading] = useState<boolean>(false);
    const [myworks, setMyWork] = useState<any[]>([])

    const getmenuIcon = useRef(null)

    const handleToggleMenu = () => {
        settoggle(!toggle)

    }

    useEffect(() => {
        setisloading(true)
        axios.get('http://localhost:5000/api/v1/myworks')
            .then(res => {
                if (res.data.status === "success") {
                    setisloading(false)
                    setMyWork(res.data.data)
                } else {
                    setisloading(false)
                    console.log(res)
                }

            })
            .catch(err => {
                setisloading(false)
                console.log(err)
            })

    }, []);

console.log(myworks);


  return (
    <>
    <div className='mywork min-h-screen w-full flex flex-col '>
            <div className=' h-20 flex justify-end items-center w-11/12 mx-auto'>
                <i ref={getmenuIcon} onClick={handleToggleMenu} className={toggle?'fa fixed z-10 text-white fa-xmark text-3xl':'fa fixed z-10 text-white fa-bars text-3xl'}/>
            </div>
            <div className=' w-11/12 mx-auto'>
                    <div className=' text-white text-8xl font-semibold'>My <span className=' text-yellow-600'>Work</span></div>
                    <div className=' justify-between flex'>
                        <div className='  text-sm sm:text-2xl myt-3 font-semibold text-white capitalize'>Check Out some of my project...</div>
                        {/* <Link to= 'add' className='font-semibold w-24 bg-yellow-600 rounded-md px-2 py-1 shadow shadow-fuchsia-100'>Add Work</Link> */}
                    </div>
                    <div>

                    </div>
            </div>
            {/*    My Work*/}
            <div className='w-11/12 mx-auto'>
                <div className=' grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3  gap-4 mt-9' >
                    {
                        myworks.length ? myworks.map(mywork => {

                            return (
                            <div key={mywork._id} className=' rounded-lg flex-1 flex h-60 bg-slate-300 flex-col'>
                                <div>
                                    <div className=' text-white text-xl bg-slate-700 text-center'>{mywork.title}</div>
                                </div>                                

                                <div  className=' flex-1' style={{background: `url(${(mywork.gifurl)})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}}>
                                </div>
                                <div>
                                    <div className=' text-white text-lg font-bold bg-yellow-600 text-center'>
                                        <a target="_blank" href={mywork.github_repo}>View</a>
                                    </div>
                                </div>                                
                            </div>
                        )}) :
                        (<div className=' text3xl text-white'>Loading....</div>)
                    }
                </div>

            </div>
            <OverLayer show={toggle} />
    </div>
            <Footer/>
    </>
  )
}
