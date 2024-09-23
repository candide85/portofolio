import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { FaPhone } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { Link } from 'react-router-dom';


function Contact() {

  const [message, setMessage] = useState('');
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const payload = {
    firstname: inputs.firstname,
    lastname: inputs.lastname,
    phone: inputs.phone,
    email: inputs.email,
    subject: inputs.subject,
    message: inputs.message
  }

  const sendMessage = async () => {
    const res = await axios.post("http://localhost:4000/api/sendEmail",payload)
    .catch(error => {
      console.log(error);
    })

    const data = await res.data
    return data
  }

  const handleSendingMessage = (e) => {
    e.preventDefault()

    sendMessage()
    .then(() =>{
      console.log("message sent successfully!");
    })
  }

  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className='container-fluid mx-10 m-auto bg-slate-100 max-w-full h-screen'>
    <div className='bg-gradient-to-r from-slate-100 to-pink-500 opacity-90 h-44 text-white flex items-center justify-center mt-1 '>
      <h1 className='text-6xl text-slate-950 font-bold font-serif'>
        Contact Me
      </h1>
    </div>
    <div className='flex p-1'>
      <div className='w-2/3 bg-gradient-to-bl from-slate-100 to-pink-700 gap-y-10'>
        <h1 className='text-left p-1 mt-10 ml-10 font-serif font-semibold text-4xl text-slate-950'>Get In Touch</h1>
        <p className='text-left p-2 my-10 ml-10 font-serif font-normal text-slate-900 text-2xl'>
          Thank you for reaching me through email, call or message.
          If your are some suggestion about my projects or need some hint, I will be glad to help you.
          Also any project you need for your business, organisation or freelancer.
          I'm waiting for you.
        </p>
        <div className='flex gap-x-4 p-2 items-center ml-10 text-xl font-medium'>
          <FaPhone  className='text-white text-2xl' /><span className='text-slate-800'>CI: +225 (0)507692552  / GH: +233 (0)531466881</span>
        </div>
        <div className='flex gap-x-4 p-2 ml-10 items-center text-xl'>
          <IoMailOutline className='text-white text-2xl' /><Link className='text-slate-900'>brainer.techplus@outlook.com</Link>
        </div>
        <div className='flex text-4xl gap-x-10 ml-10 p-4  mt-2 justify-center'>
          <Link>
            <IoLogoWhatsapp className='text-green-800' />          
          </Link>
          <Link>
            <IoLogoFacebook className='text-blue-800' />          
          </Link>
          <Link>
            <IoLogoInstagram className='text-red-800' />          
          </Link>
          <Link className='boder'>
            <IoLogoLinkedin className='text-blue-800' />          
          </Link>
        </div>
      </div>
      <div className='flex justify-center items-center w-full p-5 opacity-100' >
        <form onSubmit={handleSendingMessage} className='flex flex-col gap-2 rounded-md px-10 py-6 w-full bg-transparent ' >
          <div className='flex justify-between gap-2 w-full'>
            <input value={inputs.firstname} onChange={handleChange} className=' border-2 focus:outline-none indent-2 w-full rounded-lg p-1 mt-4 h-12' type="text" name='firstname' placeholder='ENTER FIRSTNAME' />
            <input value={inputs.lastname} onChange={handleChange} className='  border-2  indent-2 w-full focus:outline-none rounded-lg p-1 mt-4 h-12' type="text" name='lastname' placeholder='ENTER LASTNAME' />
          </div>
          <input value={inputs.phone} onChange={handleChange} className='  border-2   indent-2 focus:outline-none  rounded-lg p-1 mt-4 h-12' type="text" name='phone' placeholder='ENTER PHONE NUMBER' />
          <input value={inputs.email} onChange={handleChange} className=' indent-2  border-2  focus:outline-none rounded-lg p-1 mt-4 h-12' type="email" name='email' placeholder='ENTER EMAIL ADDRESS' />
          <input value={inputs.subject} onChange={handleChange} className=' indent-2  border-2  focus:outline-none rounded-lg p-1 mt-4 h-12' type="text" name='subject' placeholder='ENTER SUBJECT' />
          <textarea value={inputs.message} onChange={handleChange} className='text-lg  border-2  indent-2 rounded-lg font-serif' style={{height:150}} name="message" placeholder='TYPE YOUR MESSAGE HERE'></textarea>
          <button type='submit' className='w-32 opacity-100 text-xl font-semibold p-1 text-center rounded-xl border-2 border-slate-300 text-slate-500 bg-gradient-to-br from-white to-pink-400'>Submit</button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Contact