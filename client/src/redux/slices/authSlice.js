import { createSlice, current } from '@reduxjs/toolkit';
import hexaApi from './apiSlice';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		currentUser: null,
		token: null,
	},
	reducers: {},
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
	},
});

export default authSlice.reducer;
