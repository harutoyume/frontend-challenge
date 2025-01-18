import { configureStore } from '@reduxjs/toolkit'
import reducer from '@/store/catsSlice'

export const store = configureStore({
  reducer: {
    cats: reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch