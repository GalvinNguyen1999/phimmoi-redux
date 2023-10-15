'use client'
import Link from 'next/link'
import { useTrendingQuery } from '@/redux/services/movieApi'

const Trending = () => {
  const { data, error, isLoading, isSuccess } = useTrendingQuery()
  console.log('data: ', data)
  return (
    <div className='text-gray-200'>
      <h2 className='text-[1.75rem] italic font-bold mb-2 uppercase'>top trending</h2>
      {data?.results?.slice(0, 6).map((t, i) => (
        <Link
          href={`/movie/${t.id}`}
          key={t.id}
        >
          <div className='mb-4 overflow-hidden bg-gray-700 rounded-2xl hover:border'>
            <div className='flex flex-wrap'>
              <div className='w-1/3'>
                <img
                  src={`https://image.tmdb.org/t/p/w300${t.poster_path}`}
                  className='w-full h-full'
                  alt={t.title}
                />
              </div>
              <div className='w-2/3'>
                <div className='p-4'>
                  <h5 className='mb-2 text-lg font-medium line-clamp-2'>{t.title}</h5>
                  <p className='line-clamp-2'>{t?.overview}</p>
                  <p>
                    <small className='text-gray-300'>lượt xem: {t.popularity}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Trending
