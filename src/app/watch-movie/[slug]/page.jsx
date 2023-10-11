'use client'
import Credits from '@/modules/Movie/Credits'
import ReactPlayer from 'react-player/youtube'
import { AiFillDatabase } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { useWatchMovieQuery } from '@/redux/services/movieApi'
import { selectorCurrenMovie } from '@/redux/features/pageSlice'
import Button from '@/components/Button'

const WatchMovieParams = ({ params }) => {
  const currentMovie = useAppSelector((state) => state.pageNumberReducer.currentMovie)
  const { data, error, isLoading, isSuccess } = useWatchMovieQuery(params?.slug)
  const dispatch = useAppDispatch()

  return (
    <>
      <ReactPlayer
        width={'100%'}
        controls={true}
        height={500}
        url={`https://www.youtube.com/watch?v=${data?.videos?.results[currentMovie]?.key}`}
      />

      <div className='my-2'>
        <Button
          leftIcon={<AiFillDatabase />}
          className='bg-green-500 hover:opacity-50 flex items-center gap-2 transition-all duration-200 mb-3'
        >
          Server #1
        </Button>

        <div className='flex flex-wrap gap-1'>
          {data?.videos?.results?.map((video, i) => (
            <Button
              key={video?.id}
              handleClick={() => dispatch(selectorCurrenMovie(i))}
              className='bg-blue-500 p-2 text-white hover:opacity-80 transition-all duration-200 md:p-3 lg:p-4'
            >
              {i + 1}
            </Button>
          ))}
        </div>
      </div>

      <Credits movie={data} />
    </>
  )
}

export default WatchMovieParams
