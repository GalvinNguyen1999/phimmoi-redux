import { BiMoviePlay } from 'react-icons/bi'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center gap-2 lg:w-1/6'>
      <BiMoviePlay
        size={32}
        className='text-blue-500 cursor-pointer'
      />
      <span className='text-blue-500 font-medium cursor-pointer'>Phim Mới</span>
    </Link>
  )
}

export default Logo
