import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


export const Footer = () => {
  return (
    <div className='max-w-full h-[150px] flex flex-col gap-5 items-center justify-center
    bg-[#9fa6fa] text-white'>

      <div className='flex items-center justify-center gap-5'>
        <FaFacebook
          size={32}
          color="blue"
          cursor="pointer"
        />
        <FaSquareInstagram
          size={32}
          color="red"
          cursor="pointer"
        />
        <FaTwitter
          size={32}
          color="blue"
          cursor="pointer"
        />
      </div>
      <div className='text-center'>
        <p className='text-lg'>All rights reserved designed by <a className='italic'>AmeerHamza</a>
        </p>
      </div>

    </div>
  )
}
