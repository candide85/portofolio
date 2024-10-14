import React from 'react'
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCsswizardry } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import myImage from '../images/sitePhoto.png'

function About() {
  return (
    <section className='flex justify-between container-fluid  mx-10 m-auto bg-gradient-to-tr from-blue-950 to-white h-screen'>
        <div className=' mt-14 ml-5' style={{width:300, height:700, backgroundColor:'#e5c4d5', borderRadius:500}}>
              <img style={{width: 600, height:600}} src={myImage} alt="me" className='' />
        </div>
        <div className='w-96 flex-1 p-4 mt-14 mx-4' >
          <div className='flex justify-around'>
            <div className='flex flex-col items-start '>
              <div className='w-16 h-16 rounded-3xl bg-yellow-200 flex justify-center items-center'>
                <SiJavascript color='#fff' style={{width:'40px', height:'40px'}}/>
              </div>
              <div className=' relative mt-4 drop-shadow-2xl'>
                <p className=' rounded-l-xl absolute w-28 bg-slate-600 h-3'></p>
                <p className=' rounded-xl w-40 bg-slate-300 h-3'></p>
              </div>
            </div>
            <div className='flex flex-col items-start'>
              <div className='w-16 h-16 rounded-3xl bg-blue-200 flex justify-center items-center'>
                <SiPython color='#fff' style={{width:'40px', height:'40px'}}/>
              </div>
              <div className=' relative mt-4'>
                <p className=' rounded-l-xl absolute w-24 bg-slate-600 h-3'></p>
                <p className=' rounded-xl w-40 bg-slate-200 h-3'></p>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <h2 className=' text-center text-3xl text-white mt-10 roboto-bold'>Frontend</h2>
            <div className='flex mt-5 justify-around items-center bg-slate-500 h-16 drop-shadow-xl'>
              <SiReact color='#fff' style={{width:'40px', height:'40px'}} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-blue-500 duration-300'/>
              <SiBootstrap color='#fff' style={{width:'40px', height:'40px'}} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-purple-500 duration-300' />
              <SiCsswizardry color='#fff' style={{width:'40px', height:'40px'}} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-blue-800 duration-300' />
              <SiHtml5 color='#fff' style={{width:'40px', height:'40px'}} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-orange-600 duration-300' />
              <SiTailwindcss color='#fff' style={{width:'40px', height:'40px'}} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-green-400 duration-300' />
              <SiRedux color='#fff' style={{width:'40px', height:'40px'}} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-purple-500 duration-300' />
            </div>
          </div>
          <div className='flex flex-col'>
            <h2 className=' text-center text-3xl text-white mt-10 roboto-bold'>Backend</h2>
            <div className='flex mt-10 justify-around items-center bg-slate-500 h-16 drop-shadow-xl'>
              <SiNodedotjs color='#fff' style={{width:'40px', height:'40px'}} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-green-600 duration-300' />
              <SiExpress color='#fff' style={{width:'40px', height:'40px'}} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-slate-400 duration-300' />
              <SiDjango color='#fff' style={{width:'40px', height:'40px'}} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-green-800 duration-300' />
              </div>
          </div>
              <div className='flex flex-col mt-5 '>
                <h2 className='text-center text-3xl text-white mt-5 roboto-bold' >Database</h2>
                <div className='flex mt-10 justify-around items-center bg-slate-500 h-16 drop-shadow-xl'>
                  <SiMongodb color='#fff' style={{width:'40px', height:'40px'}} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-green-600 duration-300' />
                  <SiMicrosoftsqlserver color='#fff' style={{width:'40px', height:'40px'}} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-slate-400 duration-300' />
                  <SiPostgresql color='#fff' style={{width:'40px', height:'40px'}} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-blue-600 duration-300' />
                  <SiMysql color='#fff' style={{width:'50px', height:'50px'}} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-orange-600 duration-300' />
                </div>
            </div>
        </div>
        <div className='text-justify'>
          <h1 className='roboto-bold mt-40 text-3xl mx-4  text-red-800'>
              Hi, I am <span className='text-5xl'>Joel Assagou</span> 
          </h1>
          <h1 className='roboto-bold text-3xl p-2 mt-2 text-slate-800'> A Fullstack Developer</h1>
          <p style={{width:780}} className='text-xl indent-6 p-2 montserrat-thin'>
            I am a passionate fullstack developer specializing in the <span className='font-medium'>MERN stack</span>. I excel at creating dynamic, 
            high-performance web applications using <span className='font-medium'>MongoDB, Express.js, React, and Node.js</span>.
            On the front-end, I leverage React’s powerful component-based architecture to build intuitive, 
            responsive user interfaces. On the back-end, <span className='font-medium'>I develop robust server-side logic and APIs with Node.js and Express.js</span>, 
            ensuring seamless data interactions and application scalability. My expertise with MongoDB allows me to handle complex 
            data structures and implement efficient data storage solutions.
            <span className='font-medium'>I’m driven by a strong commitment to delivering high-quality software solutions and continuously exploring new 
            technologies to enhance user experiences and streamline development processes</span>.
          </p>
        </div>
    </section>
  )
}

export default About