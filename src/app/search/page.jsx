'use client'
import Movies from '@/modules/Home/Movies'
import axios from '@/utils/customAxios'
import { useEffect, useState } from 'react'
import { listYears } from '@/utils/constant'
import Button from '@/components/Button'

const SearchPage = () => {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [value, setValue] = useState(null)
  const [year, setYear] = useState(null)

  useEffect(() => {
    axios.get('/3/trending/movie/week?language=en-US').then((data) => setMovies(data))
    axios.get('/3/genre/movie/list?language=en').then((data) => setGenres(data))
  }, [])

  const handleSearch = () => {
    axios
      .get(
        `/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&primary_release_year=${year}&sort_by=popularity.desc&with_genres=${value}&query=wonder`,
      )
      .then((data) => setMovies(data))
  }

  return (
    <div>
      <div className='flex items-center gap-3'>
        <select
          value={value}
          name='category'
          id='category'
          className='border p-4 rounded-sm'
          onChange={(e) => {
            setValue(e.target.value)
          }}
        >
          {genres?.genres?.map((genre) => (
            <option
              key={genre.id}
              value={genre?.id}
            >
              {genre?.name}
            </option>
          ))}
        </select>

        <select
          value={year}
          name='category'
          id='category'
          className='border p-4 rounded-sm'
          onChange={(e) => {
            setYear(e.target.value)
          }}
        >
          {listYears?.map((listYear, i) => (
            <option
              key={listYear.id}
              value={listYear?.year}
            >
              {listYear?.year}
            </option>
          ))}
        </select>
        <Button
          handleClick={handleSearch}
          className='py-4 px-4 hover:bg-gray-500 transition-all duration-200'
        >
          Search
        </Button>
      </div>
      <Movies movies={movies} />
    </div>
  )
}

export default SearchPage
