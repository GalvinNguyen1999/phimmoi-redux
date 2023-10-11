'use client'
import Movies from '@/modules/Home/Movies'
import { useCategorysQuery } from '@/redux/services/movieApi'
import { useAppSelector } from '@/redux/hook'
import Pagination from '@/components/Pagination'

export default function CategoryPage({ params }) {
  const currentPage = useAppSelector((state) => state.pageNumberReducer.currentPage)
  const slug = params?.slug
  const { data, error, isLoading, isSuccess } = useCategorysQuery({ slug, currentPage })
  
  return (
    <div>
      <Movies movies={data} />
      <Pagination />
    </div>
  )
}
