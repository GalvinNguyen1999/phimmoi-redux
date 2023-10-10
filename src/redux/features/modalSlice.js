import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSearchResultShow: false,
  isCategoryShow: false,
  isYearShow: false
}

export const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    resetModalSearch: (state) => {
      state.isSearchResultShow = initialState.isSearchResultShow
    },
    isShowSearchResult: (state) => {
      state.isSearchResultShow = true
    },

    resetCategoryShow: (state) => {
      state.isCategoryShow = initialState.isCategoryShow
    },
    setCategoryShow: (state) => {
      state.isCategoryShow = !state.isCategoryShow
    },

    resetYearShow: (state) => {
      state.isYearShow = initialState.isYearShow
    },
    setYearShow: (state) => {
      state.isYearShow = !state.isYearShow
    }
  }
})

export const { isShowSearchResult, resetModalSearch, resetCategoryShow, setCategoryShow, resetYearShow, setYearShow } =
  modal.actions
export default modal.reducer
