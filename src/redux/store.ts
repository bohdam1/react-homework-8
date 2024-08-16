import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./Contact/slise"; 
import {authreducer} from "./Auth/slise.auth"
import { persistStore,  FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER, } from 'redux-persist'
import {currentreducer} from "./Current/current.slice"
import filterReducer from "./Filter/slise";


const persistedReducer =  contactsReducer
export type RootState = ReturnType<typeof store.getState>
export const store = configureStore({
  reducer:{
    contacts: persistedReducer,
    filter : filterReducer,
    auth : authreducer,
    current : currentreducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore (store)
export type AppDispatch = typeof store.dispatch;