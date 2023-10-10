'use client'
import Movies from '@/modules/Home/Movies'
import { Pagination } from '@/components/pagination'
import { useAppSelector } from '@/redux/hook'
import { useNowPlayingQuery } from '@/redux/services/movieApi'

const NowPlayingPage = () => {
  const currentPage = useAppSelector((state) => state.pageNumberReducer.currentPage)
  const { data, error, isLoading, isSuccess } = useNowPlayingQuery({ currentPage })
  
  return (
    <div>
      <Movies movies={data} />
      <Pagination />
    </div>
  )
}

export default NowPlayingPage
