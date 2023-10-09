import { BsStar, BsStarHalf, BsStarFill, BsFillCalendar2RangeFill } from 'react-icons/bs'

const Credits = ({ movie }) => {
  return (
    <section className='md:pb-2'>
      <h3 className='text-2xl font-bold my-2'>Credits: </h3>
      <div className='p-4 flex flex-col sm:flex-wrap sm:flex-row gap-2 sm:gap-5 justify-center border-b border-gray-500'>
        {movie?.credits?.cast?.slice(0, 5).map((credit) => (
          <div
            className='relative sm:w-5/12 md:w-3/12 lg:w-2/12'
            key={credit?.id}
          >
            <div className='rounded-lg overflow-hidden'>
              <img
                src={`https://image.tmdb.org/t/p/w300${credit?.profile_path}`}
                className='w-full'
                alt={credit?.name}
              />
            </div>
            <div className='absolute bottom-0 left-0 w-full bg-[#00000080] text-white text-center p-2.5'>
              <h3>{credit?.known_for_department}</h3>
              <h3>{credit?.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className='lg:px-7 py-2 flex flex-col md:flex-row items-start md:gap-5 lg:gap-16 mb-5'>
        <div>
          <div className='md:mb-2'>
            <span className='text-lg font-bold mr-2'>Thể Loại:</span>
            {movie?.genres?.map((genre) => (
              <span key={genre?.id}>{genre?.name}, </span>
            ))}
          </div>
          <div>
            <span className='text-lg font-bold mr-2'>Năm sản xuất:</span>
            <span>{movie?.release_date}</span>
          </div>
        </div>

        <div>
          <div className='md:mb-2'>
            <span className='text-lg font-bold mr-2'>Quốc gia:</span>
            {movie?.production_countries?.map((countrie) => (
              <span key={countrie?.id}>{countrie?.name}</span>
            ))}
          </div>
          <div>
            <span className='text-lg font-bold mr-2'>Thời lương phim:</span>
            <span>{movie?.runtime} phút</span>
          </div>
        </div>

        <div>
          <div className='md:mb-2'>
            <div className='text-lg font-bold mr-2 md:mb-4'>Điểm đánh giá:</div>
            {/* <span>1/5</span> */}
            <div className='flex items-center gap-2'>
              <BsStarFill className='text-yellow-500' />
              <BsStarFill className='text-yellow-500' />
              <BsStarFill className='text-yellow-500' />
              <BsStarHalf className='text-yellow-500' />
              <BsStar />
            </div>
          </div>
        </div>
      </div>

      <div className='border mb-4 rounded-lg overflow-hidden'>
        <div className='flex items-center bg-green-800 p-4 gap-2'>
          <BsFillCalendar2RangeFill size={50} className='text-blue-500' />
          <h5 className='font-bold text-gray-900 '>PHIM CHIẾU 1 TẬP MỖI TRƯA THỨ 5 HÀNG TUẦN</h5>
        </div>
        <div className='p-4 bg-gray-500'>
          <div className='text-white font-bold text-xl mb-1'>Nội dung phim</div>
          <div className='text-white line-clamp-3'>{movie?.overview}</div>
        </div>
      </div>
    </section>
  )
}

export default Credits
