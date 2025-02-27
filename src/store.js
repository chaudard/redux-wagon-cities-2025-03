import { configureStore } from '@reduxjs/toolkit'

import citiesReducer from './reducers/cities_reducer'
import selectedCityReducer from './reducers/selected_city_reducer'

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    cities: citiesReducer,
    selectedCity: selectedCityReducer
  }
})

export default store