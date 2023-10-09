'use client'
import Link from 'next/link'

const Movies = ({ movies }) => {
  return (
    <div className='p-4 flex flex-wrap justify-around gap-3'>
      {movies?.results?.map((m, i) => (
        <div
          className='relative rounded-md overflow-hidden sm:w-5/12 md:w-3/12 lg:w-2/12 border shadow-md'
          key={m.id}
        >
          <Link href={`/movie/${m.id}`}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
                alt={m.title}
                className='w-full h-auto'
              />
              <div className='absolute w-full bg-[rgba(0,0,0,0.5)] text-white text-sm text-center opacity-100 transition-opacity duration-[0.3s] ease-[ease-in-out] p-2.5 left-0 bottom-0'>
                <h6>{m.title}</h6>
                <p>{m.title}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Movies
