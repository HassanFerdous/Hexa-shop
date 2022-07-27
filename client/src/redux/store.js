import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import hexaApi from './slices/apiSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart', 'user'],
};

const rootReducer = combineReducers({
	[hexaApi.reducerPath]: hexaApi.reducer,
	cart: cartReducer,
	user: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hexaApi.middleware),
});

export const persistor = persistStore(store);
export default store;
