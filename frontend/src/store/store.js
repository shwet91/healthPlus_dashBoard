import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"

import storage from "redux-persist/lib/storage"; // Defaults to localStorage
import { persistReducer, persistStore } from "redux-persist";



const persisitConfig = {
    key: "newAppRoot",
    storage
}

const myReducer = combineReducers({
    auth : authReducer,
})

const persistedReducer = persistReducer(persisitConfig , myReducer)

const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false, // Required for Redux Persist
        }),
})




 export const persistor = persistStore(store)

export default store