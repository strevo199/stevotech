import React, { useState,useRef } from 'react'
import { OverLayer } from '../../components'
import { Footer } from '../../components/footer';
import './about.css'
import reactlogo from '../../img/react.gif'

export const About = () => {
    const [toggle, settoggle] = useState<boolean>(false);

    const workexpriences = [
        {
            id:1,
            workedat: 'Stanbic Ibtc Bank',
            position:'Mobile Engineer',
            role: 'Overseeing the development and installation of new networking and computing infrastructures. Select the best possible solutions using knowledge of a wide range of available technologies. Monitoring systems in the existing network to ensure there are no productivity setbacks.Installing and configuring operating systems and application software. Implementing best practices for system security and data backups. Anticipating potential issues or bottlenecks and identifying possible solutions. Troubleshooting and resolving all technical issues when they arise. Communicating effectively with IT support staff to ensure the setup process runs smoothly. As a System Engineer, my responsibilities include assessing systems and determining problems. '
        },
        {
            id:11,
            workedat: 'Signal Alliance Technology Holding',
            position:'Front-End Developer',
            role: 'Overseeing the development and installation of new networking and computing infrastructures. Select the best possible solutions using knowledge of a wide range of available technologies. Monitoring systems in the existing network to ensure there are no productivity setbacks.Installing and configuring operating systems and application software. Implementing best practices for system security and data backups. Anticipating potential issues or bottlenecks and identifying possible solutions. Troubleshooting and resolving all technical issues when they arise. Communicating effectively with IT support staff to ensure the setup process runs smoothly. As a System Engineer, my responsibilities include assessing systems and determining problems. '
        },
        {
            id:1,
            workedat: 'Share Tray Data Network Solutions LTD - Abuja',
            position:'Full Stack Software Developer',
            role: 'Developing front-end website architecture. Designing user interactions on web pages. Developing back-end website applications. Ensuring cross-platform optimization for mobile phones. Ensuring responsiveness of applications. Working alongside graphic designers for web design features. Designing and developing APIs. As a Senior Full Stack Software Engineer, responsibilities include designing, developing, testing, and deploying software solutions spanning across both the backend APIs and client-side code. Analytic Dashboard & Reporting, client-facing applications, proof of concept prototypes, working closely with the product management and design team to define feature requirements.Using scripting or authoring languages, management tools, content creation tools, applications, and digital media.Conferring with teams to resolve conflicts, prioritize needs, develop content criteria, or choose solutions.Directing or performing Website updates. Developing or validating test routines and schedules to ensure that test cases mimic external interfaces and address all browser and device types.'
        },
        {
            id:3,
            workedat: 'Aztlan Pvt Ltd, Hyderabad,Telangana,India',
            position:'Frontend Developer [Internship]',
            role: 'Determining the structure and design of web pages. Ensuring user experience determines design choices. Developing features to enhance the user experience. Striking a balance between functional and aesthetic design'
        },
        
    ]

    const skills = [
        {id: 1, title: 'HTML5 & CSS3', rate:'90'},
        {id: 2, title: 'JavaScript', rate:'90'},
        {id: 3, title: 'TypeScrpit', rate:'80'},
        {id: 4, title: 'React', rate:'80'},
        {id: 5, title: 'Angular', rate:'60'},
        {id: 5, title: 'Node', rate:'60'},
        {id: 6, title: 'Ionic', rate:'60'},
        {id: 7, title: 'C#', rate:'30'},
        {id: 7, title: 'React Native', rate:'90'},
        {id: 7, title: 'Express', rate:'50'},

    ]

    const handleToggleMenu = () => {
        settoggle(!toggle)
       
    }

  return (
    <>
    <div className='about w-full flex flex-col '>
            <div className=' h-20 flex justify-end items-center w-11/12 mx-auto'>
                <i onClick={handleToggleMenu} className={toggle?'fa fixed z-10 text-white fa-xmark text-3xl':'fa fixed z-10 text-white fa-bars text-3xl'}/>
            </div>
            <div className=' w-11/12 mx-auto'>
                    <div className=' text-white text-3xl sm:text-8xl font-semibold'>About <span className=' text-yellow-600'>Me</span></div>
                    <div className=' text-sm sm:text-2xl myt-3 font-semibold text-white'>Let me tell you a few things...</div>
            </div>
            <div  className='flex w-11/12 sm:flex-row flex-col sm:gap-0 gap-5 mx-auto py-5'>
                <div className=' flex-1' >
                    <div className=' sm:h-80 sm:-80 h-80 w-60 bg-white photo3'></div>
                </div>
                <div className='flex-1 '>
                    <div className='text-yellow-600 text-2xl font-bold'>BIO</div>
                    <div className='text-sm sm:text-lg text-white'>Multitalented Software Developer with experience in the software industry. Demonstrated excellent skills in HTML, Angular, CSS3, REACT, REACT NATIVE, NODE, EXPRESS, MongoDB, JavaScript and TypeScript . True team player with strengths in adaptability and accuracy. Results-oriented software engineering professional with more than 3 years of experience in the field. Well-versed in promoting object-oriented programming to real-time software development. Analytical and detail-oriented.</div>
                    <div className=' my-4'>
                        <a className='text-black bg-yellow-600 font-bold rounded-md px-3 py-2' href="https://my.indeed.com/p/stephenm-xdcw7gf">Download Resume</a>
                    </div>
                </div>
            </div>
            {/* workexprience */}

            <div className='w-11/12 mx-auto py-6 grid-cols-1 sm:grid-cols-2 grid gap-5'>
                {
                    workexpriences.map(workexprience => (
                        <div key={workexprience.id} className=" text-white bg-slate-900 p-4 border-b-4 rounded-md border-yellow-600">
                            <div><span className='text-yellow-600 font-bold text-xl'>Worked at:</span> {workexprience.workedat}</div>
                            <div className=' my-1'><span className='text-yellow-600 font-bold '>Position:</span> {workexprience.position}</div>
                            <div className=' text-sm'><span className='text-yellow-600 font-bold'>Role:</span> {workexprience.role}</div>

                        </div>
                    ))
                }
           
            </div>
            <div className=' w-11/12 mx-auto bg-slate-900 p-4 border-b-4 border-yellow-600 flex'>
                <div className='flex-1'>
                    <div className=' text-yellow-600 text-xl font-bold'>Programming Skills</div>
                    {
                        skills.map(skill => (
                            <div className='flex items-center gap-2'>
                                <div className='h-1 w-1 rounded-sm bg-white'></div>
                                {/* <div className=' text-white'>{skill.title}</div> */}
                                <label className=' w-24 text-white font-semibold upp' htmlFor={skill.title}>{skill.title}</label>
                                <progress id={skill.title} value={skill.rate}  max="100"> 32% </progress>
                            </div>
                        ))
                    }

                </div>
                <div className='flex-1 flex justify-center items-center'>
                    <img className=' h-32 hover:h-40 sm:block hidden' src={reactlogo} alt="" />
                </div>
            </div>
            <OverLayer show={toggle} />
    </div>
    <Footer/>
    </>

  )
}