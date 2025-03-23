import { configureStore } from '@reduxjs/toolkit'
import groupReducer from './groupSlice'
import studentReducer from './studentSlice'

const store = configureStore({
  reducer: {
    students: studentReducer,
    groups: groupReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
