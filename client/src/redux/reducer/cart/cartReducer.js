import { addCartItem, decrementQuantity, incrementQuantity } from '../../../utilities/utils';

const CART_ITEMS = [];

export default function cartReducer(state = CART_ITEMS, action) {
	switch (action.type) {
		case 'ADD_CART_ITEM':
			return (state = addCartItem(state, action.payload));
		case 'INCREMENT_QUANTITY':
			return (state = incrementQuantity(state, action.payload));
		case 'DECREMENT_QUANTITY':
			return (state = decrementQuantity(state, action.payload));
		default:
			return state;
	}
}
