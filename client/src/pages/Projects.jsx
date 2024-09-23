import React from 'react'
import emptyImage from '../images/empty.jpg'
import crudProjectImage from '../images/crud.png'
import authMernApp from '../images/auth.png'
import weatherApp from '../images/weather.png'
import { Link, NavLink } from 'react-router-dom'

function Projects() {
  return (
    <section className='container-fluid  mx-10 m-auto bg-gradient-to-bl from-red-400 to-white h-screen'>
    <div className='max-w-full h-screen'>
      <h1 className='text-center text-5xl pt-10 border-y-4 pb-2 text-white font-bold font-serif'>SOME OF MY PROJECTS</h1>
      <div>
        <div className='grid grid-cols-3 gap-y-10  mt-10 place-items-center'>

          <div>
            <NavLink to={'https://crud-with-json-server-lovat.vercel.app/'} target='_blank'>
              <img className='h-52 w-80' src={crudProjectImage} alt="crudApp" />
            </NavLink>

            <NavLink  to={'https://crud-with-json-server-lovat.vercel.app/'} target='_blank'>
              <span className='border-4 p-1 mt-1 text-center text-2xl bg-white border-white hover:font-semibold font-medium font-serif block customHover '>CRUD App with json server</span>
            </NavLink>
          </div>

          <div>
            <Link onClick={() => {window.open("https://mern-auth-frontend-black.vercel.app/signin", "_target")}}>
              <img className='h-52 w-80' src={authMernApp} alt="authApp" />
            </Link>

            <Link onClick={() => {window.open("https://mern-auth-frontend-black.vercel.app/signin", "_target")}}>
              <p className='border-4 p-1 mt-1 text-center text-2xl font-medium font-serif block hover:font-semibold border-white customHover bg-white'>MERN Stack Auth App</p>
            </Link>
          </div>

          <div>
            <Link onClick={() => window.open("https://weather-app-xi-opal-33.vercel.app", "_target")}>
              <img className='h-52 w-80' src={weatherApp} alt="project 1" />
            </Link>

            <Link onClick={() => window.open("https://weather-app-xi-opal-33.vercel.app", "_target")}>
              <p className='border-4 p-1 mt-1 text-center text-2xl font-medium font-serif block border-white customHover hover:font-semibold bg-white'>WEATHER OpenweatherApi</p>
            </Link>
          </div>

          <div>
            <Link>
              <img className='h-52 w-80' src={emptyImage} alt="project 1" />
            </Link>

            <Link>
              <p className='border-4 p-1 mt-1 text-center text-2xl font-medium font-serif block border-white customHover hover:font-semibold bg-white'>Project 1</p>
            </Link>
          </div>

          <div>
            <Link>
              <img className='h-52 w-80' src={emptyImage} alt="project 1" />
            </Link>

            <Link>
              <p className='border-4 p-1 mt-1 text-center text-2xl font-medium font-serif block border-white customHover hover:font-semibold bg-white'>Project 1</p>
            </Link>
          </div>

          <div>
            <Link>
              <img className='h-52 w-80' src={emptyImage} alt="project 1" />
            </Link>

            <Link>
              <p className='border-4 p-1 mt-1 text-center text-2xl font-medium font-serif block border-white customHover hover:font-semibold bg-white'>Project 1</p>
            </Link>
          </div>

        </div>
      </div>
    </div>
  </section>
  )
}

export default Projects