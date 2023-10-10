'use client'
import Movies from '@/modules/Home/Movies'
import { useYearQuery } from '@/redux/services/movieApi'

export default function YearPage({ params }) {
  const { data, error, isLoading, isSuccess } = useYearQuery(params.slug)

  return <Movies movies={data} />
}
