import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
const Cart = ({ cartItems, setIsCartOpen }) => {
	return createPortal(
		<div className='cart'>
			<div className='cart-head'>
				<p>Bag(9)</p>
				<button className='cart__close' onClick={() => setIsCartOpen(false)}>
					<img src='/assets/svgs/close.svg' alt='' />
				</button>
			</div>
			<div className='cart-body'>
				<div className='cart__items'>
					{cartItems.map((item) => (
						<div className='cart-item'>
							<img src={`/assets/images/${item.img}`} alt='' className='cart-item__img' />
							<div className='cart-item__info'>
								<p className='cart-item__desc'>{item.title}</p>
								<div className='cart-quantity'>
									<button className='cart-quantity__plus'>
										<img src='/assets/svgs/plus.svg' alt='' />
									</button>
									<input type='number' className='cart-quantity__input' defaultValue={1} />
									<button className='cart-quantity__minus'>
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
				<p>Total price</p>
				<p>$99</p>
			</div>
		</div>,
		document.body
	);
};

const mapStateToProps = (state) => ({
	cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(Cart);
