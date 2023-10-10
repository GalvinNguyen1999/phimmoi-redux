'use client'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import { BiPlay } from 'react-icons/bi'
import Credits from '@/modules/Movie/Credits'
import { useMoviePageQuery } from '@/redux/services/movieApi'

const MoviePageParams = ({ params }) => {
  const { data, error, isLoading, isSuccess } = useMoviePageQuery(params?.slug)

  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${data?.backdrop_path}")`
        }}
        className='w-full h-[400px] lg:h-[500px] bg-blend-darken bg-[#000000ad] bg-no-repeat sm:bg-cover relative rounded-md'
      >
        <div className='text-white absolute pr-[10%] left-[10%] bottom-[2%] mb-4'>
          <div className='flex flex-wrap md:flex-nowrap gap-4 w-full'>
            <div className='hidden md:block max-w-full'>
              <img
                src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`}
                className='rounded-md w-full h-full border'
                alt={data?.original_title}
              />
            </div>

            <div className=''>
              <h3 className='text-xl font-bold'>{data?.original_title}</h3>
              <br />
              <h5 className='md:flex items-center gap-2'>
                {data?.genres?.map((genre) => (
                  <span
                    className='px-1 md:px-0'
                    key={genre?.id}
                  >
                    {genre?.name} |
                  </span>
                ))}
                <span>run time: {data?.runtime}'</span>
              </h5>
              <div className='my-3'>
                <h3 className='mb-1'>Overview</h3>
                <p className='text-sm line-clamp-3 sm:line-clamp-none '>{data?.overview}</p>
              </div>

              <div className='flex items-center gap-3'>
                <Link
                  href={`/watch-movie/${data?.id}`}
                  className='flex items-center gap-1 bg-green-500 hover:opacity-70 transition-all duration-200 border-0 p-2 rounded-lg'
                >
                  <IoIosArrowDown />
                  Trailer
                </Link>
                <Link
                  href={`/watch-movie/${data?.id}`}
                  className='flex items-center gap-1 bg-green-500 hover:opacity-70 transition-all duration-200 border-0 p-2 rounded-lg'
                >
                  <BiPlay />
                  Xem phim
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Credits movie={data} />
    </div>
  )
}

export default MoviePageParams
