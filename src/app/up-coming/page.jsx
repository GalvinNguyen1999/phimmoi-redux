'use client'
import Movies from '@/modules/Home/Movies'
import { useUpComingQuery } from '@/redux/services/movieApi'
import { useAppSelector } from '@/redux/hook'
import Pagination from '@/components/Pagination'

const UpComingPage = () => {
  const currentPage = useAppSelector((state) => state.pageNumberReducer.currentPage)
  const { data, error, isLoading, isSuccess } = useUpComingQuery({ currentPage })
 
  return (
    <div>
      <Movies movies={data} />
      <Pagination />
    </div>
  )
}

export default UpComingPage
