const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
	},

	reducers: {
		addItemToCart: (state, { payload }) => {
			const existedItem = state.items.find((item) => item._id === payload._id);
			if (existedItem) {
				return {
					...state,
					items: state.items.map((item) => (item._id === payload._id ? { ...item, quantity: 1 } : item)),
				};
			}

			state.items.push(payload);
		},
	},
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
