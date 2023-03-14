import { createStore } from 'redux'
import rootReducer from './rootReducer'

const store = createStore(rootReducer) // getState(), dispatch()

export default store
