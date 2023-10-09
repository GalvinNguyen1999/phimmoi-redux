'use client'
import { useEffect, useState } from 'react'
import { carousels } from '@/utils/constant'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevImg = () => {
    const fistImg = currentIndex === 0
    const onPrev = fistImg ? carousels.length - 1 : currentIndex - 1
    setCurrentIndex(onPrev)
  }
  const handleNextImg = () => {
    const lastImg = currentIndex === carousels.length - 1
    const onNext = lastImg ? 0 : currentIndex + 1
    setCurrentIndex(onNext)
  }

  useEffect(() => {
    const auto = setInterval(() => {
      setCurrentIndex((curr) => (curr === carousels.length - 1 ? 0 : curr + 1))
    }, 3000)
    return () => {
      clearInterval(auto)
    }
  }, [])

  return (
    <div className='relative w-full overflow-hidden'>
      <div>
        <img
          src={carousels[currentIndex].imgUrl}
          alt='Slide 1'
          className='cursor-pointer'
        />
        <div className='absolute w-full bg-[rgba(0,0,0,0.5)] text-white text-sm text-center opacity-0 hover:opacity-100 cursor-pointer transition-opacity duration-[0.3s] ease-[ease-in-out] p-2.5 left-0 bottom-0'>
          <h2>{carousels[currentIndex].name}</h2>
          <p>{carousels[currentIndex].description}</p>
        </div>
      </div>
      <button
        onClick={handlePrevImg}
        className='absolute -translate-y-2/4 bbg-[#333 hover:bg-[#333] text-white cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease-in-out] px-4 py-2 border-[none] left-0 top-2/4'
      >
        ❮
      </button>
      <button
        onClick={handleNextImg}
        className='absolute -translate-y-2/4 bbg-[#333 hover:bg-[#333] text-white cursor-pointer transition-[background-color] duration-[0.3s] ease-[ease-in-out] px-4 py-2 border-[none] right-0 top-2/4'
      >
        ❯
      </button>
    </div>
  )
}

export default Carousel
