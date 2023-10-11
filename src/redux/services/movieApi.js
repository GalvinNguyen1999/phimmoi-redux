import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTkwMTA5MmZkYzg0ZWJiNmUwYmMyZmVmNjZkODljOCIsInN1YiI6IjY0ZTE4MTMyZGE5ZWYyMDEwMjMyZGFlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RvcKF0YAMLumRPlx3u01NaN_NeG-uBmstl41QXEVwvM'
    }
  }),
  endpoints: (builder) => ({
    movies: builder.query({ query: () => '/3/movie/popular?language=en-US&page=1' }),
    trending: builder.query({ query: () => '/3/trending/movie/day?language=en-US' }),
    categorys: builder.query({
      query: ({ slug, currentPage }) =>
        `/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=${slug}`
    }),
    genreList: builder.query({ query: () => '/3/genre/movie/list?language=en' }),
    nowPlaying: builder.query({
      query: ({ currentPage }) => `/3/movie/now_playing?language=en-US&page=${currentPage}`
    }),
    upComing: builder.query({ query: ({ currentPage }) => `/3/movie/upcoming?language=en-US&page=${currentPage}` }),
    popular: builder.query({ query: ({ currentPage }) => `/3/movie/popular?language=en-US&page=${currentPage}` }),
    year: builder.query({
      query: (slug) =>
        `/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=undefined&primary_release_year=${slug}&sort_by=popularity.desc`
    }),
    searchForm: builder.query({
      query: (searchValue) => `/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`
    }),
    moviePage: builder.query({
      query: (slug) => `/3/movie/${slug}?language=en-US&append_to_response=videos,credits,similar`
    }),
    watchMovie: builder.query({
      query: (slug) => `/3/movie/${slug}?language=en-US&append_to_response=videos,credits,similar`
    }),
    resultSearchPage: builder.query({
      query: ({ year, valueSearch }) =>
        `/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&primary_release_year=${year}&sort_by=popularity.desc&with_genres=${valueSearch}&query=wonder`
    })
  })
})

export const {
  useMoviesQuery,
  useTrendingQuery,
  useCategorysQuery,
  useGenreListQuery,
  useNowPlayingQuery,
  useUpComingQuery,
  usePopularQuery,
  useYearQuery,
  useSearchFormQuery,
  useMoviePageQuery,
  useWatchMovieQuery,
  useResultSearchPageQuery
} = movieApi
