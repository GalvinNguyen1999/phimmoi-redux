'use client'
import { useState, useEffect } from 'react'
import axios from '@/utils/customAxios'
import Credits from '@/modules/Movie/Credits'
import ReactPlayer from 'react-player/youtube'
import Button from '@/components/Button'
import { AiFillDatabase } from 'react-icons/ai'

const WatchMovieParams = ({ params }) => {
  const [movie, setMovie] = useState({})
  const [currentMovie, setCurrentMovie] = useState(0)

  useEffect(() => {
    axios
      .get(`/3/movie/${params.slug}?language=en-US&append_to_response=videos,credits,similar`)
      .then((data) => setMovie(data))
  }, [params.slug])

  return (
    <>
      <ReactPlayer
        width={'100%'}
        controls={true}
        height={500}
        url={`https://www.youtube.com/watch?v=${movie?.videos?.results[currentMovie]?.key}`}
      />

      <div className='my-2'>
        <Button
          leftIcon={<AiFillDatabase />}
          className='bg-green-500 hover:opacity-50 flex items-center gap-2 transition-all duration-200 mb-3'
        >
          Server #1
        </Button>

        <div className='flex flex-wrap gap-1'>
          {movie?.videos?.results?.map((video, i) => (
            <Button
              key={video?.id}
              handleClick={() => setCurrentMovie(i)}
              className='bg-blue-500 p-2 text-white hover:opacity-80 transition-all duration-200 md:p-3 lg:p-4'
            >
              {i + 1}
            </Button>
          ))}
        </div>
      </div>

      <Credits movie={movie} />
    </>
  )
}

export default WatchMovieParams
