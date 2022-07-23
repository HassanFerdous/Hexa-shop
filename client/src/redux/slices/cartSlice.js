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
					items: state.items.map((item) =>
						item._id === payload._id ? { ...item, quantity: item.quantity + 1 } : item
					),
				};
			}

			state.items.push({ ...payload, quantity: 1 });
		},

		removeItemFromCart: (state, { payload: id }) => {
			state.items = state.filter((item) => item._id !== id);
		},

		decrementQuantity: (state, { payload: id }) => {
			const existedItem = state.items.find((item) => item._id === id);
			if (existedItem.quantity > 1) {
				state.items = state.items.map((item) =>
					item._id === id ? { ...item, quantity: item.quantity - 1 } : item
				);
				return;
			}

			state.items = state.items.filter((item) => item._id !== id);
		},

		incrementQuantity: (state, { payload: id }) => {
			state.items = state.items.map((item) => (item._id === id ? { ...item, quantity: item.quantity + 1 } : item));
		},
	},
});

export const { addItemToCart, removeItemFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
