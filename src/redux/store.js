// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import rootReducer from "./rootReducer";

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import rootReducer from "./rootReducer";
import contactsReducer from './contactsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: 'contacts',
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
