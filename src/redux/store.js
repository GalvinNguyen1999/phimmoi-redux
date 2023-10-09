import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from './services/movieApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import pageNumberReducer from './features/pageSlice'

export const store = configureStore({
  reducer: {
    pageNumberReducer,
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
})

setupListeners(store.dispatch)
