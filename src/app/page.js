'use client'
import Carousel from '@/modules/Home/Carousel'
import Movies from '@/modules/Home/Movies'
import { useMoviesQuery } from '@/redux/services/movieApi'

export default function Home() {
  const { data, error, isLoading, isSuccess } = useMoviesQuery();
  return (
    <main className='relative'>
        <Carousel />
        <Movies movies={data} />
    </main>
  )
}
