import { combineReducers } from 'redux'
import cityReducer from './cityReducer'
import itineraryReducer from './itineraryReducer'
import authReducer from './authReducer'
import commentReducer from './commentsReducer'
import likeReducer from './likesReducer'

const principalReducer = combineReducers({
  citiesR: cityReducer,
  itinerariesR: itineraryReducer,
  authR: authReducer,
  commentsR: commentReducer,
  likesR: likeReducer
})

export default principalReducer