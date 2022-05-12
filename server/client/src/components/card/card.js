import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cartActionCreator } from '../../redux/action';
import { useNavigate } from 'react-router-dom';

function Card({ product }) {
	const { title, img, price, rating = 5 } = product;
	const dispatch = useDispatch();
	const { addItemToCart } = bindActionCreators(cartActionCreator, dispatch);
	let navigate = useNavigate();

	const handleClick = () => {
		navigate(`/products/${product._id}`, { replace: true });
	};

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
							addItemToCart(product);
						}}>
						<img src='/assets/svgs/shopping-bag.svg' alt='bag' />
					</button>
				</div>
			</div>

			<div className='card__row'>
				<h3 className='card__title' onClick={handleClick}>
					{title}
				</h3>
				<div className='card__rating'>
					{Array(rating)
						.fill()
						.map((item, idx) => (
							<img key={idx} src='/assets/svgs/star.svg' alt='star' />
						))}
				</div>
			</div>
			<p className='card__price'>${price || 0}</p>
		</div>
	);
}

export default Card;
