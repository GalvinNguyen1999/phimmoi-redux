import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSearchResultShow: false,
  isCategoryShow: false,
  isYearShow: false,
  toggleMobileMenu: false
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
    },

    resetToggleMobileMenu: (state) => {
      state.toggleMobileMenu = initialState.toggleMobileMenu
    },
    setResetToggleMobileMenu: (state) => {
      state.toggleMobileMenu = !state.toggleMobileMenu
    }
  }
})

export const {
  isShowSearchResult,
  resetModalSearch,
  resetCategoryShow,
  setCategoryShow,
  resetYearShow,
  setYearShow,
  resetToggleMobileMenu,
  setResetToggleMobileMenu
} = modal.actions
export default modal.reducer
