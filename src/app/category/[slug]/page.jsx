'use client'
import { useState, useEffect } from 'react'
import axios from '@/utils/customAxios'
import Movies from '@/modules/Home/Movies'
import { Pagination } from '@/components/Pagination'

export default function CategoryPage({ params }) {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(null)
  const pageSize = 10

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    axios
      .get(
        `/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=${params.slug}`,
      )
      .then((data) => setMovies(data))
  }, [currentPage])

  return (
    <div>
      <Movies movies={movies} />
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
