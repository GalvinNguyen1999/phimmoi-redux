'use client'
import { useState, useEffect } from 'react'
import axios from '@/utils/customAxios'
import Movies from '@/modules/Home/Movies'

export default function YearPage({ params }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
      .get(
        `/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=undefined&primary_release_year=${params.slug}&sort_by=popularity.desc`,
      )
      .then((data) => setMovies(data))
  }, [])

  return <Movies movies={movies} />
}
