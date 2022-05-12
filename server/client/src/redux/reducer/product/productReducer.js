const INITIAL_STATE = [];

const productReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'GET_ALL_PRODUCT':
			return (state = action.payload);
		default:
			return state;
	}
};

export default productReducer;
