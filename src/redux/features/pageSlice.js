import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1
}

export const pageNumber = createSlice({
  name: 'pageNumber',
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.currentPage += 1
    },
    decrement: (state) => {
      state.currentPage -= 1
    }
  }
})

export const { increment, decrement, reset } = pageNumber.actions
export default pageNumber.reducer
