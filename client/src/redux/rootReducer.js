import { combineReducers } from 'redux';
import cartReducer from './reducer/cart/cartReducer';
const rootReducer = combineReducers({
	cart: cartReducer,
});

export default rootReducer;
