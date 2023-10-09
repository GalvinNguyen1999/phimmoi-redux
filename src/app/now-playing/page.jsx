'use client'
import { useState, useEffect } from 'react'
import axios from '@/utils/customAxios'
import Movies from '@/modules/Home/Movies'
import { Pagination } from '@/components/pagination'

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(null)
  const pageSize = 10

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    axios.get(`/3/movie/now_playing?language=en-US&page=${currentPage}`).then((data) => setMovies(data))
  }, [currentPage])

  return (
    <div>
      <Movies movies={movies} />
      <Pagination pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  )
}

export default NowPlayingPage
