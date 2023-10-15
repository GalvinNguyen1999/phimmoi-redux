import { BiSolidCameraMovie } from 'react-icons/bi'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link
      href={'/'}
      className='flex items-center gap-3 lg:w-1/6 text-gray-800 font-medium text-2xl cursor-pointer hover:opacity-50 transition-all duration-200'
    >
      <BiSolidCameraMovie size={30} />
      <span className='italic'>Movie</span>
    </Link>
  )
}

export default Logo
