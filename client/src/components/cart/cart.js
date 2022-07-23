import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrementQuantity } from '../../redux/slices/cartSlice';
import { incrementQuantity } from '../../redux/slices/cartSlice';

const Cart = ({ setIsCartOpen }) => {
	const cartItems = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();
	let total = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

	return createPortal(
		<div className='cart'>
			<div className='cart-head'>
				<p>Bag({cartItems.length})</p>
				<button className='cart__close' onClick={() => setIsCartOpen(false)}>
					<img src='/assets/svgs/close.svg' alt='' />
				</button>
			</div>
			<div className='cart-body'>
				<div className='cart__items'>
					{cartItems.map((item, idx) => (
						<div className='cart-item' key={idx}>
							<img src={`/assets/images/${item.img}`} alt='' className='cart-item__img' />
							<div className='cart-item__info'>
								<p className='cart-item__desc'>{item.title}</p>
								<div className='cart-quantity'>
									<button
										className='cart-quantity__plus'
										onClick={() => dispatch(incrementQuantity(item._id))}>
										<img src='/assets/svgs/plus.svg' alt='' />
									</button>
									<input type='number' className='cart-quantity__input' value={item.quantity} readOnly />
									<button
										className='cart-quantity__minus'
										onClick={() => dispatch(decrementQuantity(item._id))}>
										<img src='/assets/svgs/minus.svg' alt='' />
									</button>
								</div>
								<p className='cart-item__price'>${item.price}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='cart-footer'>
				<div className='cart-footer__row'>
					<p>Total price</p>
					<p>${total}</p>
				</div>
				<button className='cart__checkout-btn'>Checkout</button>
			</div>
		</div>,
		document.body
	);
};

export default Cart;
