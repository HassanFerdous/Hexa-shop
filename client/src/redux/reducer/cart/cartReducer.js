const INITIAL_STATE = {
	cartItems: [],
};

export default function cartReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD_CARD_ITEM':
			return { ...state, cartItems: [...state.cartItems, action.item] };
		default:
			return state;
	}
}
