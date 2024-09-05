import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../assets/Images/foodLogo1.png';

export const Navbar = () => {
  return (
    <div className='max-w-full'>
      <nav className=' bg-[#9fa6fa] text-white shadow-lg flex items-center justify-around'>
        <div className=''>
          <img className='w-24 h-20' src={logo1} alt="logo" />
        </div>
        <ul className='flex items-center justify-center gap-5'>
          <li>
            <NavLink
              to=""
              className=" xs:text-[1rem] md:text-xl font-semibold"
              // className={({ isActive }) => (isActive ? 'active' : '')}
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className="xs:text-[1rem] md:text-xl font-semibold"
              // className={({ isActive }) => (isActive ? 'active' : '')}
            >About</NavLink>
          </li>
          <li>
            <NavLink
              to="food"
              className="xs:text-[1rem] md:text-xl font-semibold"
              // className={({ isActive }) => (isActive ? 'active' : '')}
            >Food</NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className="xs:text-[1rem] md:text-xl font-semibold"
              // className={({ isActive }) => (isActive ? 'active' : '')}
            >Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}