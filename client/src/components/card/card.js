import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/reducer/cart/cartAction';

function Card({ product, cartItems, addItem }) {
	const { title, img, price, rating = 5 } = product;
	return (
		<div className='card'>
			<div className='card__thumb'>
				<picture className='card__img'>
					<img src={`/assets/images/${img}`} alt='' />
				</picture>
				<div className='card__hover'>
					<button className='card-btn'>
						<img src='/assets/svgs/eye.svg' alt='expand' />
					</button>
					<button className='card-btn'>
						<img src='/assets/svgs/star.svg' alt='star' />
					</button>
					<button
						className='card-btn'
						onClick={() => {
							addItem(product);
							console.log(cartItems);
						}}>
						<img src='/assets/svgs/shopping-bag.svg' alt='bag' />
					</button>
				</div>
			</div>

			<div className='card__row'>
				<h3 className='card__title'>{title}</h3>
				<div className='card__rating'>
					{Array(rating)
						.fill()
						.map((item, idx) => (
							<img key={idx} src='/assets/svgs/star.svg' alt='star' />
						))}
				</div>
			</div>
			<p className='card__price'>${price}</p>
		</div>
	);
}

const mapStateToProps = (state) => ({
	cartItems: state.cart.cartItems,
});

let mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
