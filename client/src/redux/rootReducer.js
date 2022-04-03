import { combineReducers } from 'redux';
import cartReducer from './reducer/cart/cartReducer';
import productReducer from './reducer/product/productReducer';
import userReducer from './reducer/user/userReducer';
const rootReducer = combineReducers({
	cart: cartReducer,
	products: productReducer,
	user: userReducer,
});

export default rootReducer;
