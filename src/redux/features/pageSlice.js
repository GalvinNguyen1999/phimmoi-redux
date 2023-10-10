import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  currentMovie: 0
}

export const pageNumber = createSlice({
  name: 'pageNumber',
  initialState,
  reducers: {
    // Pagination
    resetPageNumber: (state) => {
      state.currentPage = initialState.currentPage;
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
    }
  }
})

export const { increment, decrement, resetPageNumber, selectorPage, resetCurrenMovie, selectorCurrenMovie } = pageNumber.actions
export default pageNumber.reducer
