import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import hexaApi from './slices/apiSlice';
const store = configureStore({
	reducer: {
		[hexaApi.reducerPath]: hexaApi.reducer,
		cart: cartReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hexaApi.middleware),
});

export default store;
