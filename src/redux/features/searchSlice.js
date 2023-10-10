import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ''
}

export const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetSearch: () => initialState,
    onChangeValue: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { onChangeValue, resetSearch } = search.actions
export default search.reducer
