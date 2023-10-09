'use client'
import { useState, useEffect } from 'react'
import axios from '@/utils/customAxios'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import { BiPlay } from 'react-icons/bi'
import Credits from '@/modules/Movie/Credits'

const MoviePageParams = ({ params }) => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    axios
      .get(`/3/movie/${params.slug}?language=en-US&append_to_response=videos,credits,similar`)
      .then((data) => setMovie(data))
  }, [params.slug])

  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        }}
        className='w-full h-[400px] lg:h-[500px] bg-blend-darken bg-[#000000ad] bg-no-repeat sm:bg-cover relative rounded-md'
      >
        <div className='text-white absolute pr-[10%] left-[10%] bottom-[2%] mb-4'>
          <div className='flex flex-wrap md:flex-nowrap gap-4 w-full'>
            <div className='hidden md:block max-w-full'>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
                className='rounded-md w-full h-full border'
                alt={movie?.original_title}
              />
            </div>

            <div className=''>
              <h3 className='text-xl font-bold'>{movie?.original_title}</h3>
              <br />
              <h5 className='md:flex items-center gap-2'>
                {movie?.genres?.map((genre) => (
                  <span
                    className='px-1 md:px-0'
                    key={genre?.id}
                  >
                    {genre?.name} |
                  </span>
                ))}
                <span>run time: {movie?.runtime}'</span>
              </h5>
              <div className='my-3'>
                <h3 className='mb-1'>Overview</h3>
                <p className='text-sm line-clamp-3 sm:line-clamp-none '>{movie?.overview}</p>
              </div>

              <div className='flex items-center gap-3'>
                <Link
                  href={`/watch-movie/${movie?.id}`}
                  className='flex items-center gap-1 bg-green-500 hover:opacity-70 transition-all duration-200 border-0 p-2 rounded-lg'
                >
                  <IoIosArrowDown />
                  Trailer
                </Link>
                <Link
                  href={`/watch-movie/${movie?.id}`}
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

      <Credits movie={movie} />
    </div>
  )
}

export default MoviePageParams
