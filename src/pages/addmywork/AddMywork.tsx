import React, { useState,useRef, FormEvent } from 'react'
import { OverLayer } from '../../components'
import { Footer } from '../../components/footer';
import './addmywork.css'
import {useForm, FieldValues} from 'react-hook-form';
import axios from  'axios'

import { useNavigate } from 'react-router-dom';



export const AddMywork = () => {
    const [toggle, settoggle] = useState<boolean>(false);
    const [uploadfile, setUploadfile] = useState<any>("");
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    const handleToggleMenu = () => {
        settoggle(!toggle)

    }

    const onSubmit=  (data: FieldValues) => {
        // steDate(JSON.stringify(data))

        const reader = new FileReader()
        reader.readAsDataURL((uploadfile[0]))

        let formdata;
        reader.onload = function () {
         formdata = Object.assign(data,{gifurl: reader.result});


       axios.post('http://localhost:5000/api/v1/myworks',formdata)
           .then(res => {
               console.log(res)
               if (res.data.status === "success") {
                navigate('/mywork')
               }
           })
           .catch(err => {
               console.log(err)
           })
        }

    }



  return (
    <>
    <div className='addmywork h-screen w-full flex flex-col '>
            <div className=' h-20 flex justify-end items-center w-11/12 mx-auto'>
                <i  onClick={handleToggleMenu} className={toggle?'fa fixed z-10 text-white fa-xmark text-3xl':'fa fixed z-10 text-white fa-bars text-3xl'}/>
            </div>
            <div className=' w-11/12 mx-auto my-5'>
              <div className=' text-3xl text-white font-bold'>Add New<span className=' text-yellow-500'> Project</span> </div>
            </div>
            <div>
               <form encType={"multipart/form-data"} className=' sm:w-2/4 w-96 p-4 m-auto bg-opacity-60 bg-slate-600 flex flex-col gap-3' onSubmit={handleSubmit((data) => onSubmit(data))}>
                <input className=' h-12 rounded-md  px-4'  {...register("title")} type="text" name='title' placeholder='enter title' />
                <input className=' h-12 rounded-md  px-4' {...register("content")} type="text" name='content' placeholder='enter content'/>
                <input  className=' h-12 rounded-md px-4'{...register("github_repo")} type="text" name='github_repo' placeholder='enter github repo url'/>
                <input onChange={(e) => setUploadfile(e.target.files)} type="file" name='gifurl'  />
                <button className=' bg-yellow-600 h-12 rounded-md text-white uppercase font-semibold' type="submit">Create</button>
              </form>
            </div>
            <OverLayer show={toggle} />
    </div>
            <Footer/>
    </>
  )
}
