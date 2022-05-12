import { fetchData } from '../../../utilities/utils';

export const getAllProducts = (params) => {
	return async (dispatch) => {
		const products = await fetchData(params);
		dispatch({
			type: 'GET_ALL_PRODUCT',
			payload: products.products,
		});
	};
};
