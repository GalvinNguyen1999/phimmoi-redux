import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  valueSearchPage: '',
  year: 2016
}

export const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetSearch: (state) => {
      state.value = initialState.value
    },
    onChangeValue: (state, action) => {
      state.value = action.payload
    },

    resetValueSearchPage: (state) => {
      state.value = initialState.valueSearchPage
    },
    setValueSearchPage: (state, action) => {
      state.valueSearchPage = action.payload
    },

    resetYear: (state) => {
      state.year = initialState.year
    },
    setYear: (state, action) => {
      state.year = action.payload
    }
  }
})

export const { onChangeValue, resetSearch, resetValueSearchPage, setValueSearchPage, resetYear, setYear } =
  search.actions
export default search.reducer
