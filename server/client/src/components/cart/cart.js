import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cartActionCreator } from '../../redux/action';
import { countTotalPrice } from '../../utilities/utils';
const Cart = ({ setIsCartOpen }) => {
	const cartItems = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const { incrementQuantity, decrementQuantity } = bindActionCreators(cartActionCreator, dispatch);
	const subTotal = countTotalPrice(cartItems);
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
									<button className='cart-quantity__plus' onClick={() => incrementQuantity(item._id)}>
										<img src='/assets/svgs/plus.svg' alt='' />
									</button>
									<input
										type='number'
										className='cart-quantity__input'
										value={item.quantity ? item.quantity : 1}
										readOnly
									/>
									<button className='cart-quantity__minus' onClick={() => decrementQuantity(item._id)}>
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
					<p>${subTotal || 0}</p>
				</div>
				<button className='cart__checkout-btn'>Checkout</button>
			</div>
		</div>,
		document.body
	);
};

export default Cart;
