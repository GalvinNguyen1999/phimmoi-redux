'use client'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import Button from '@/components/button'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { onChangeValue, resetSearch } from '@/redux/features/searchSlice'
import { useSearchFormQuery } from '@/redux/services/movieApi'
import { isShowSearchResult, resetModalSearch } from '@/redux/features/modalSlice'

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
          className='px-2 py-1 w-4/5 outline-none'
          value={searchValue}
          onChange={(e) => dispatch(onChangeValue(e.target.value))}
        />
        <Button
          className='px-4'
          onClick={handleClickSearch}
        >
          <BiSearchAlt2
            size={20}
            className='text-gray-500 hover:text-black'
          />
        </Button>
      </form>
      <Button
        handleClick={handleClickSearch}
        className='border-green-500 hover:bg-green-500 hidden lg:block'
      >
        Search
      </Button>
      <div className={`absolute bg-white top-10 w-full rounded-md shadow-2xl ${isSearchShow ? 'block' : 'hidden'}`}>
        <div className='text-gray-500 px-5 py-2'>Movies</div>
        <div className='flex flex-col gap-2 p-2'>
          {fiveResults?.map((fiveResult) => (
            <Link
              href={`/watch-movie/${fiveResult?.id}`}
              key={fiveResult?.id}
              className='flex border rounded-lg shadow-lg w-full min-h-[80px]'
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
                <p className='text-sm text-gray-500'>{fiveResult?.original_title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchHeader
