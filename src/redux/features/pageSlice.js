import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  currentMovie: 0,
  carousel: {
    currenIndex: 0
  }
}

export const pageNumber = createSlice({
  name: 'pageNumber',
  initialState,
  reducers: {
    // Pagination
    resetPageNumber: (state) => {
      state.currentPage = initialState.currentPage
    },
    increment: (state) => {
      state.currentPage += 1
    },
    decrement: (state) => {
      state.currentPage -= 1
    },
    selectorPage: (state, action) => {
      state.currentPage = action.payload
    },

    // CurrenPage
    resetCurrenMovie: (state) => {
      state.currentMovie = initialState.currentMovie
    },
    selectorCurrenMovie: (state, action) => {
      state.currentMovie = action.payload
    },

    // Curren Index Movie Carousel
    resetCurrentIndex: (state) => {
      state.carousel.currenIndex = initialState.carousel.currenIndex
    },
    setCurrentIndexNext: (state) => {
      if (state.carousel.currenIndex >= 9) {
        state.carousel.currenIndex = 0
      }
      state.carousel.currenIndex += 1
    },
    setCurrentIndexPrev: (state) => {
      if (state.carousel.currenIndex === 0 ) {
        state.carousel.currenIndex = 10
      }
      state.carousel.currenIndex -= 1
    }
  }
})

export const {
  increment,
  decrement,
  resetPageNumber,
  selectorPage,
  resetCurrenMovie,
  selectorCurrenMovie,
  resetCurrentIndex,
  setCurrentIndexNext,
  setCurrentIndexPrev
} = pageNumber.actions
export default pageNumber.reducer
