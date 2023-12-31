'use client'
import { BiMenu } from 'react-icons/bi'
import Navbar from './Navbar'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { setResetToggleMobileMenu } from '@/redux/features/modalSlice'

const MenuMobile = () => {
  const dispatch = useAppDispatch()
  const toggleMobileMenu = useAppSelector((state) => state.modalReducer.toggleMobileMenu)

  const handleToggleMenu = () => {
    dispatch(setResetToggleMobileMenu())
  }

  return (
    <div className='lg:hidden'>
      <button onClick={() => dispatch(setResetToggleMobileMenu())}>
        <BiMenu
          size={30}
          className='cursor-pointer text-gray-900 mt-2 hover:opacity-50 transition-all duration-200'
        />
      </button>

      <div
        className={`absolute top-10 right-0 w-full shadow-md transition-all ease-linear duration-300 bg-white 
                    ${toggleMobileMenu ? 'translate-y-1 md:translate-y-3' : '-translate-y-80'}`}
      >
        <Navbar
          onToggleMobileMenu={handleToggleMenu}
          className='flex flex-col h-auto p-2 gap-2 z-50 bg-gray-100 rounded-md'
        />
      </div>
    </div>
  )
}

export default MenuMobile
