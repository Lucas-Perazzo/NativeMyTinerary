import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import cityReducer from './cityReducer'
import itineraryReducer from './itineraryReducer'

const rootReducer = combineReducers({
    cities: cityReducer,
    itineraries: itineraryReducer,
    account: accountReducer
})

export default rootReducer