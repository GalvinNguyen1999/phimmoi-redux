'use client'
import Movies from '@/modules/Home/Movies'
import { usePopularQuery } from '@/redux/services/movieApi'
import { useAppSelector } from '@/redux/hook'
import Pagination from '@/components/Pagination'

const PopularPage = () => {
  const currentPage = useAppSelector((state) => state.pageNumberReducer.currentPage)
  const { data, error, isLoading, isSuccess } = usePopularQuery({ currentPage })

  return (
    <div>
      <Movies movies={data} />
      <Pagination />
    </div>
  )
}

export default PopularPage
