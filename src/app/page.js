'use client'
import Carousel from '@/modules/Home/Carousel'
import Movies from '@/modules/Home/Movies'
import { useState, useEffect } from 'react'
import axios from '@/utils/customAxios'

export default function Home() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get('3/movie/popular?language=en-US&page=1').then((data) => setMovies(data))
  }, [])

  return (
    <main className='relative'>
        <Carousel />
        <Movies movies={movies} />
    </main>
  )
}
