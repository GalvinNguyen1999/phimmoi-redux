'use client'
import { setCurrentIndexNext, setCurrentIndexPrev } from '@/redux/features/pageSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { useMoviesQuery } from '@/redux/services/movieApi'
import Link from 'next/link'
import { useEffect } from 'react'
import { BiPlay } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'

const Carousel = () => {
  const { data, error, isLoading, isSuccess } = useMoviesQuery()
  const carousels = data?.results.slice(10) || []
  const dispatch = useAppDispatch()
  const currentIndex = useAppSelector((state) => state.pageNumberReducer.carousel.currenIndex)

  useEffect(() => {
    const auto = setInterval(() => dispatch(setCurrentIndexNext()), 3000)
    return () => clearInterval(auto);
  }, [])

  return (
    <div
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${carousels[currentIndex]?.backdrop_path}")`
      }}
      className='w-full h-[400px] lg:h-[500px] bg-blend-darken bg-[#000000ad] bg-no-repeat sm:bg-cover relative rounded-md'
    >
      <div className='text-gray-100 absolute pr-[10%] left-[10%] bottom-[2%] mb-4'>
        <div className='flex flex-wrap md:flex-nowrap gap-4 w-full'>
          <div className='hidden md:block w-4/12 rounded-lg'>
            <img
              src={`https://image.tmdb.org/t/p/w300${carousels[currentIndex]?.poster_path}`}
              className='rounded-md'
              alt={carousels[currentIndex]?.original_title}
            />
          </div>

          <div className='flex flex-col w-full md:w-6/12'>
            <h3 className='text-xl font-bold'>{carousels[currentIndex]?.original_title}</h3>
            <div className='my-3 flex-1'>
              <p className='line-clamp-3 sm:line-clamp-none text-xl font-light'>{carousels[currentIndex]?.overview}</p>
            </div>

            <div className='flex items-center gap-3'>
              <Link
                href={`/watch-movie/${carousels[currentIndex]?.id}`}
                className='flex items-center gap-1 bg-green-500 hover:opacity-70 transition-all duration-200 border-0 p-2 rounded-lg'
              >
                <IoIosArrowDown />
                Trailer
              </Link>
              <Link
                href={`/watch-movie/${carousels[currentIndex]?.id}`}
                className='flex items-center gap-1 bg-green-500 hover:opacity-70 transition-all duration-200 border-0 p-2 rounded-lg'
              >
                <BiPlay />
                Xem phim
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button
        className='absolute -translate-y-2/4 bbg-[#333 hover:bg-[#333] text-white cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease-in-out] px-4 py-2 border-[none] left-0 top-2/4'
        onClick={() => dispatch(setCurrentIndexPrev())}
      >
        ❮
      </button>
      <button
        className='absolute -translate-y-2/4 bbg-[#333 hover:bg-[#333] text-white cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease-in-out] px-4 py-2 border-[none] right-0 top-2/4'
        onClick={() => dispatch(setCurrentIndexNext())}
      >
        ❯
      </button>
    </div>
  )
}

export default Carousel
