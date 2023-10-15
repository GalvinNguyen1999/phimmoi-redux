import MenuMobile from './MenuMobile'
import SearchHeader from './SearchHeader'
import Navbar from './Navbar'
import Logo from './Logo'
import Button from '@/components/Button'
import { FiLogIn } from 'react-icons/fi'

const Header = () => {
  return (
    <header className='flex items-center px-3 h-[42px] fixed top-0 right-0 left-0 md:h-14 w-full z-50 bg-gradient-to-r from-gray-100 to-gray-300'>
      <div className='flex items-center justify-between px-3 w-full lg:max-w-[1280px] lg:mx-auto'>
        <Logo />
        <Navbar className='hidden lg:flex lg:items-center lg:gap-2 lg:w-4/6' />
        <div className='md:w-3/6 w-2/6 lg:flex lg:gap-2'>
          <SearchHeader className='py-1 pl-4 bg-gray-100 rounded-3xl border border-gray-500 overflow-hidden w-full justify-between items-center hidden md:flex lg:flex-1' />
          <div className='hidden lg:flex gap-2 items-center lg:w-2/6'>
            <Button className='border-blue-500 hover:bg-blue-500 flex items-center gap-1 transition-all duration-200 text-lg font-medium text-gray-800'>
              Login <FiLogIn />
            </Button>
          </div>
        </div>
        <MenuMobile />
      </div>
    </header>
  )
}

export default Header
