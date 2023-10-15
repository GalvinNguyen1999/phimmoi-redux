'use client'
import { BiSearchAlt2 } from 'react-icons/bi'
import { TbFilterSearch } from 'react-icons/tb'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { onChangeValue, resetSearch } from '@/redux/features/searchSlice'
import { useSearchFormQuery } from '@/redux/services/movieApi'
import { isShowSearchResult, resetModalSearch } from '@/redux/features/modalSlice'
import Button from '@/components/Button'

const SearchHeader = ({ className }) => {
  const router = useRouter()
  const searchValue = useAppSelector((state) => state.searchReducer.value)
  const isSearchShow = useAppSelector((state) => state.modalReducer.isSearchResultShow)
  const dispatch = useAppDispatch()

  const { data, error, isLoading, isSuccess } = useSearchFormQuery(searchValue)
  const fiveResults = data?.results?.slice(0, 5)

  if (!!searchValue) {
    dispatch(isShowSearchResult())
  } else {
    dispatch(resetModalSearch())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleClickSearch()
  }

  const handleClickSearch = () => {
    router.push(`/search`)
    dispatch(resetSearch())
  }

  return (
    <div className='relative flex items-center gap-2'>
      <form
        className={className}
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='Search Movie...'
          className='py-1 w-4/5 outline-none bg-transparent text-gray-900'
          value={searchValue}
          onChange={(e) => dispatch(onChangeValue(e.target.value))}
        />
        <Button
          className='text-gray-900 hover:bg-gray-500 mr-2 rounded-full transition-all duration-200 border-0'
          onClick={handleClickSearch}
        >
          <BiSearchAlt2 size={24} />
        </Button>
      </form>
      <Button
        handleClick={handleClickSearch}
        className='border-green-500 hover:bg-green-600 hidden lg:flex transition-all duration-200 items-center gap-1 text-lg font-medium'
      >
        Search
        <TbFilterSearch size={16} />
      </Button>
      {!!isSearchShow && (
        <div className={`absolute bg-gray-100 border rounded-lg top-12 w-full shadow-lg`}>
        <div className='text-gray-900 font-medium text-sm p-2 capitalize border-b '>result search :</div>
        <div className='flex flex-col gap-2 p-2'>
          {fiveResults?.map((fiveResult) => (
            <Link
              href={`/watch-movie/${fiveResult?.id}`}
              key={fiveResult?.id}
              className='flex border border-gray-300 rounded-lg shadow-md hover:shadow-xl hover:border-gray-500 transition-all duration-200 w-full min-h-[80px]'
              onClick={() => dispatch(resetSearch())}
            >
              <div className='rounded-lg overflow-hidden w-1/4 h-full'>
                <img
                  src={`https://image.tmdb.org/t/p/w300${fiveResult?.poster_path}`}
                  alt={fiveResult?.title}
                  className='w-full h-full'
                />
              </div>
              <div className='p-2 w-3/4'>
                <h5 className='font-bold  leading-tight mb-1'>{fiveResult?.title}</h5>
                <p className='text-sm text-gray-700 line-clamp-3'>{fiveResult?.overview || 'Loading...'}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      ) }
      
    </div>
  )
}

export default SearchHeader
