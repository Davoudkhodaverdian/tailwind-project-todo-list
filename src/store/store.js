import { combineReducers, configureStore } from '@reduxjs/toolkit'
import currentUserSlice from './slices/currentUserSlice'
import counterSlice from './slices/counterSlice'
import authenticateSlice from './slices/authenticateSlice'
import userListSlice from './slices/userListSlice'
import modalSlice from './slices/modalSlice'
import themeSlice from './slices/themeSlice'
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const rootReducer = combineReducers({

  user: userListSlice,
  counter: counterSlice,
  authenticate: authenticateSlice,
  currentUser: currentUserSlice,
  showModal: modalSlice,
  theme: themeSlice,
})

//without persist
// const store = configureStore({ reducer: rootReducer })
// export { store }

//with persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["authenticate","currentUser"] // only this item will be persisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer: persistedReducer,
  //non-serializable value
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false, }),
});

const persistor = persistStore(store)
export { store, persistor }

