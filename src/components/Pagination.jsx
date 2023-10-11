import React from 'react'
import { decrement, increment, resetPageNumber, selectorPage } from '@/redux/features/pageSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Pagination = () => {
  const pageSize = 10
  const pages = Array.from({ length: pageSize }, (_, i) => i + 1)

  const currentPage = useAppSelector((state) => state.pageNumberReducer.currentPage)
  const dispatch = useAppDispatch()

  const handlePrevPage = () => {
    dispatch(decrement())
    if (currentPage === 1) dispatch(resetPageNumber())
  }

  const handleNextPage = () => {
    dispatch(increment())
    if (currentPage === 10) dispatch(resetPageNumber())
  }

  const handleSelectorPage = (page) => {
    dispatch(selectorPage(page))
  }

  return (
    <div className='flex justify-center items-center gap-2'>
      <button
        onClick={handlePrevPage}
        className='hover:bg-slate-300 rounded-full transition-all duration-300'
      >
        <MdOutlineKeyboardArrowLeft size={20} />
      </button>
      <div className='flex items-center justify-center gap-3'>
        {pages.map((page, i) => (
          <button
            key={i}
            className={`hover:bg-slate-300 rounded-full transition-all duration-300 px-2 focus:bg-gray-300 ${
              currentPage === page ? 'bg-gray-300' : ''
            }`}
            onClick={() => handleSelectorPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={handleNextPage}
        className='hover:bg-slate-300 rounded-full transition-all duration-300'
      >
        <MdOutlineKeyboardArrowRight size={20} />
      </button>
    </div>
  )
}

export default Pagination
