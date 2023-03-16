import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './rootReducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage,
    whitelist:['user']
}
const persistedReducer = persistReducer(persistConfig, rootReducer) // 1. config:Object, 2. reducer

const enhancer = process.env.NODE_ENV === 'production' 
? applyMiddleware(thunk)
: composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(persistedReducer,enhancer)
export const persistor = persistStore(store)