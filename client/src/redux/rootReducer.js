import { combineReducers } from 'redux';
import cartReducer from './reducer/cart/cartReducer';
import productReducer from './reducer/product/productReducer';
const rootReducer = combineReducers({
	cart: cartReducer,
	products: productReducer,
});

export default rootReducer;
