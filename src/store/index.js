import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'auth-user',
    storage
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
    reducer: {
        authReducer: persistedReducer
    }
})

export default store