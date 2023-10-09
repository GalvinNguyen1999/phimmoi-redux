'use client'
import Movies from '@/modules/Home/Movies'
import { Pagination } from '@/components/Pagination'
import { useCategorysQuery } from '@/redux/services/movieApi'
import { useAppSelector } from '@/redux/hook'
import { useEffect } from 'react'

export default function CategoryPage({ params }) {
  const currentPage = useAppSelector((state) => state.pageNumberReducer.currentPage)
  const slug = params?.slug
  const { data, error, isLoading, isSuccess } = useCategorysQuery({ slug, currentPage })
  // useEffect(() => {
  //   axios
  //     .get(
  //       `/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=${params.slug}`,
  //     )
  //     .then((data) => setMovies(data))
  // }, [currentPage])

  return (
    <div>
      <Movies movies={data} />
      <Pagination />
    </div>
  )
}
