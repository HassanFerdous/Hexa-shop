export const addItemToCart = (payload) => {
	return (dispatch) => {
		dispatch({
			type: 'ADD_CART_ITEM',
			payload: payload,
		});
	};
};

export const incrementQuantity = (payload) => {
	return (dispatch) => {
		dispatch({
			type: 'INCREMENT_QUANTITY',
			payload: payload,
		});
	};
};

export const decrementQuantity = (payload) => {
	return (dispatch) => {
		dispatch({
			type: 'DECREMENT_QUANTITY',
			payload: payload,
		});
	};
};
