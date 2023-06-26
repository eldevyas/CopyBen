import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { UserReducer } from "./Reducers/UserReducer";
import { OrderReducer } from "./Reducers/OrderReducer";
import AuthReducer from "./Slices/AuthSlice";

// Configure Redux Persist
const persistConfig = {
    key: 'Root',
    storage,
};

const rootReducer = combineReducers({
    Order: OrderReducer,
    Auth: AuthReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
});

// Initialize Redux Persist
export const persistor = persistStore(store);

// Root State 
export type RootState = ReturnType<typeof store.getState>;

// Root Dispatch
export type RootDispatch = ReturnType<typeof store.dispatch>;

// App Dispatch
export type AppDispatch = typeof store.dispatch;