import React from 'react';

export const Search = () => {
  return (
    <div className="
    bg-[url('./assets/Images/bg1.jpg')]
    max-w-full 
    min-h-[200px] max-h-[200px]
  bg-gray-200
    flex items-center justify-center"
    >
      <form className='flex items-center justify-center gap-5'>
        <p>
          <input
            className='xs:w-[270px] sm:w-[300px] md:w-[500px] h-10 pl-4 rounded-sm'
            type="text"
            placeholder='Search for food' />
        </p>
        <p>
          <input
            className='text-lg font-semibold bg-gray-50 h-10 text-center px-5 cursor-pointer rounded-sm'
            type="submit"
            value="Search" />
        </p>
      </form>
    </div>
  )
}
