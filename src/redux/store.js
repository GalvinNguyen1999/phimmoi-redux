import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from './services/movieApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import pageNumberReducer from './features/pageSlice'
import searchReducer from './features/searchSlice'
import modalReducer from './features/modalSlice'

export const store = configureStore({
  reducer: {
    pageNumberReducer,
    searchReducer,
    modalReducer,
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
})

setupListeners(store.dispatch)
