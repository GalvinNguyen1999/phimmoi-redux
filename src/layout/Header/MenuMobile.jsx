'use client'
import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import Navbar from './Navbar'

const MenuMobile = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
  const handleToggleMenuMobile = () => {
    setToggleMobileMenu((prev) => !prev)
  }
  return (
    <div className='lg:hidden'>
      <button onClick={handleToggleMenuMobile}>
        <BiMenu
          size={32}
          className='cursor-pointer text-gray-500'
        />
      </button>

      <div
        className={`absolute top-10 right-0 w-full shadow-md transition-all ease-linear duration-300 bg-white 
                    ${toggleMobileMenu ? 'translate-y-2' : '-translate-y-80'}`}
      >
        <Navbar onToggleMobileMenu={handleToggleMenuMobile} className='flex flex-col h-auto px-2 gap-2 z-50' />
      </div>
    </div>
  )
}

export default MenuMobile
