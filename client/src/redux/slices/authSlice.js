import { createSlice } from '@reduxjs/toolkit';
import hexaApi from './apiSlice';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		currentUser: null,
		token: null,
	},
	reducers: {
		logOut: (state) => {
			state.currentUser = null;
			state.token = null;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(hexaApi.endpoints.signIn.matchFulfilled, (state, { payload }) => {
			const user = {
				username: payload.user.username,
				email: payload.user.email,
				id: payload.user._id,
				isAdmin: payload.user.isAdmin,
			};
			// state.token = payload.token;
			state.currentUser = user;
			state.token = payload.token;
		});

		builder.addMatcher(hexaApi.endpoints.register.matchFulfilled, (state, { payload }) => {
			const user = {
				username: payload.user.username,
				email: payload.user.email,
				id: payload.user._id,
				isAdmin: payload.user.isAdmin,
			};
			// state.token = payload.token;
			state.currentUser = user;
			state.token = payload.token;
		});
	},
});
export const { logOut } = authSlice.actions;
export default authSlice.reducer;
