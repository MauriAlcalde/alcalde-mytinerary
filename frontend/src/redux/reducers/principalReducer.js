import { combineReducers } from 'redux'
import cityReducer from './cityReducer'
import itineraryReducer from './itineraryReducer'

const principalReducer = combineReducers({
  citiesR: cityReducer,
  itinerariesR: itineraryReducer
})

export default principalReducer