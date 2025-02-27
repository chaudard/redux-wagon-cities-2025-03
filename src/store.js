import { configureStore } from '@reduxjs/toolkit'

import citiesReducer from './reducers/cities_reducer'

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    cities: citiesReducer
  }
})

export default store