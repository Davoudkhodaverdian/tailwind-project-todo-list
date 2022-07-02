import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice'
import userListSlice from './slices/userListSlice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
  todo: todoSlice,
  user: userListSlice,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [] // only this item will be persisted

}


const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({ reducer: persistedReducer })
const persistor = persistStore(store)

export { store, persistor }


