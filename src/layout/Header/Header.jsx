import MenuMobile from './MenuMobile'
import SearchHeader from './SearchHeader'
import Navbar from './Navbar'
import Button from '@/components/Button'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='flex items-center px-3 h-[42px] shadow-md fixed top-0 right-0 left-0 md:h-14 lg:h-20 w-full z-50 bg-white'>
      <div className='flex items-center justify-between px-3 w-full lg:max-w-[1280px] lg:mx-auto'>
        <Logo />
        <Navbar className='hidden lg:flex lg:items-center lg:w-4/6' />
        <div className='md:w-3/6 w-2/6 lg:flex lg:gap-2'>
          <SearchHeader className='border-2 rounded-lg overflow-hidden shadow-md w-full justify-between hidden md:flex lg:flex-1' />
          <div className='hidden lg:flex gap-2 items-center lg:w-2/6'>
            <Button className='border-blue-500 hover:bg-blue-500'>Login</Button>
          </div>
        </div>
        <MenuMobile />
      </div>
    </header>
  )
}

export default Header
