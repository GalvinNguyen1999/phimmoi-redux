'use client'
import Movies from '@/modules/Home/Movies'
import { listYears } from '@/utils/constant'
import Button from '@/components/button'
import { useGenreListQuery, useResultSearchPageQuery } from '@/redux/services/movieApi'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { setValueSearchPage, setYear } from '@/redux/features/searchSlice'

const SearchPage = () => {
  const dispatch = useAppDispatch()
  const valueSearch = useAppSelector((state) => state.searchReducer.valueSearchPage)
  const year = useAppSelector((state) => state.searchReducer.year)

  // UseQuery for GenreList
  const {
    data: genreData,
    error: genreError,
    isLoading: genreIsLoading,
    isSuccess: genreIsSuccess
  } = useGenreListQuery()

  const {
    data: resultData,
    error: resultError,
    isLoading: resultIsLoading,
    isSuccess: resultIsSuccess
  } = useResultSearchPageQuery({ year, valueSearch })

  const handleSearch = () => {}

  return (
    <div>
      <div className='flex items-center gap-3'>
        <select
          value={valueSearch}
          name='category'
          id='category'
          className='border p-4 rounded-sm'
          onChange={(e) => {
            dispatch(setValueSearchPage(e.target.value))
          }}
        >
          {genreData?.genres?.map((genre) => (
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
            dispatch(setYear(e.target.value))
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
      <Movies movies={resultData} />
    </div>
  )
}

export default SearchPage
