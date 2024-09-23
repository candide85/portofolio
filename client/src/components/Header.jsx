import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='container-fluid mx-10 m-auto flex justify-between bg-gradient-to-r from-gray-300 to-white py-6  font-serif text-lg'>
        <Link to={'/'}>
            <img className='border p-1' src="" alt="logo" />
        </Link>
        <div>
            <NavLink className='p-1 w-20 text-center font-semibold' to={'/'}>About</NavLink>
            <NavLink className='p-1 w-20 text-center font-semibold' to={'/project'}>Projects</NavLink>
            <NavLink className='p-1 w-20 text-center font-semibold mr-2' to={'/contact'}>Contact</NavLink>
        </div>
    </div>
  )
}

export default Header