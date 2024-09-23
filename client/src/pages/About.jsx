import React from 'react'
import myImage from '../images/ty.png'

function About() {
  return (
    <section className='flex container-fluid mx-10 m-auto bg-gradient-to-tr from-blue-950 to-white h-screen'>
      <div className='' style={{width:800}}>
        <div className=' absolute left-32 top-40 bg-slate-100 z-10' style={{width:550, height:600}}>
          <div className=' relative top-8 left-20'>
            <img style={{width: 700, height:550}} src={myImage} alt="me" />
          </div>
        </div>
        <div className=' absolute left-40 top-48  bg-gradient-to-tr from-blue-200 to-slate-500' style={{width:550, height:600}}></div>
      </div>
      <div className='flex-grow text-justify'>
        <h2 className='font-serif font-semibold text-4xl p-2 mt-14'>Hi, Welcome!</h2>
        <h1 className='font-serif font-black text-7xl p-2 mt-5 text-white'>
            I'm Joel Assagou,
        </h1>
        <h1 className='font-serif font-semibold text-4xl p-2 mt-2'> A FULLSTACK DEVELOPER</h1>
        <p style={{width:780}} className='text-xl indent-6  p-2'>
          I am a passionate fullstack developer specializing in the <span className='font-semibold'>MERN stack</span>. I excel at creating dynamic, 
          high-performance web applications using <span className='font-semibold'>MongoDB, Express.js, React, and Node.js</span>.
          On the front-end, I leverage React’s powerful component-based architecture to build intuitive, 
          responsive user interfaces. On the back-end, <span className='font-semibold'>I develop robust server-side logic and APIs with Node.js and Express.js</span>, 
          ensuring seamless data interactions and application scalability. My expertise with MongoDB allows me to handle complex 
          data structures and implement efficient data storage solutions.
          <span className='font-semibold'>I’m driven by a strong commitment to delivering high-quality software solutions and continuously exploring new 
          technologies to enhance user experiences and streamline development processes</span>.
        </p>
      </div>
    </section>
  )
}

export default About