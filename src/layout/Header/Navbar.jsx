'use client'
import Link from 'next/link'
import { navigations } from '@/utils/constant'
import { useRouter } from 'next/navigation'
import { listYears } from '@/utils/constant'
import { useGenreListQuery } from '@/redux/services/movieApi'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import {
  resetCategoryShow,
  resetToggleMobileMenu,
  resetYearShow,
  setCategoryShow,
  setResetToggleMobileMenu,
  setYearShow
} from '@/redux/features/modalSlice'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'

const Navbar = ({ className }) => {
  const router = useRouter()
  const isCategoryShow = useAppSelector((state) => state.modalReducer.isCategoryShow)
  const isYearShow = useAppSelector((state) => state.modalReducer.isYearShow)
  const dispatch = useAppDispatch()

  const { data, error, isLoading, isSuccess } = useGenreListQuery()

  return (
    <nav className={`${className}`}>
      <div className='relative inline-block text-left'>
        <div>
          <button
            type='button'
            className='navigation_button flex items-center justify-between gap-1'
            id='menu-button'
            aria-expanded='true'
            aria-haspopup='true'
            onClick={() => dispatch(setCategoryShow())}
          >
            category
            {!!isCategoryShow ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </button>
        </div>
        <div
          className={`absolute left-0 z-10 mt-2 w-full lg:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            isCategoryShow ? 'block' : 'hidden'
          }`}
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabIndex={-1}
        >
          <div
            className='py-1'
            role='none'
          >
            {data?.genres?.map((genre) => (
              <button
                key={genre.id}
                className='sub-navigation_button'
                role='menuitem'
                tabIndex={-1}
                onClick={() => {
                  dispatch(resetCategoryShow())
                  dispatch(setResetToggleMobileMenu())
                  router.push(`/category/${genre.id}`)
                }}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {navigations.map((n, i) => (
        <Link
          key={i}
          href={n.href}
          className='navigation_button lg:leading-tight lg:whitespace-nowrap'
          onClick={() => {
            dispatch(resetToggleMobileMenu())
            dispatch(resetCategoryShow())
            dispatch(resetYearShow())
          }}
        >
          {n.title}
        </Link>
      ))}

      <div className='relative inline-block text-left'>
        <div>
          <button
            type='button'
            className='navigation_button text-start flex items-center justify-between gap-1'
            id='menu-button'
            aria-expanded='true'
            aria-haspopup='true'
            onClick={() => dispatch(setYearShow())}
          >
            year
            {!!isYearShow ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </button>
        </div>
        <div
          className={`absolute left-0 z-10 mt-2 w-full lg:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            isYearShow ? 'block' : 'hidden'
          }`}
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabIndex={-1}
        >
          <div
            className='py-1'
            role='none'
          >
            {listYears?.map((year) => (
              <button
                key={year.id}
                className='sub-navigation_button'
                role='menuitem'
                tabIndex={-1}
                onClick={() => {
                  router.push(`/year/${year?.year}`)
                  dispatch(resetYearShow())
                  dispatch(setResetToggleMobileMenu())
                }}
              >
                {year?.year}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
