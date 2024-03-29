import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItemToCart } from '../../redux/slices/cartSlice';
import LazyImg from '../lazyImage/LazyImg';

function Card({ product }) {
	const { title, img, price, rating = 5 } = product;
	let navigate = useNavigate();
	const dispatch = useDispatch();
	const handleClick = () => {
		navigate(`/products/${product._id}`, { replace: true });
	};

	const addToCart = () => {
		dispatch(addItemToCart(product));
	};

	return (
		<div className='card'>
			<div className='card__thumb'>
				<picture className='card__img' onClick={handleClick}>
					<LazyImg image={{ src: `/assets/images/${img}` }} />
				</picture>
			</div>

			<div className='card__details'>
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
				{/* <div>{product.category}</div> */}
				<button className='card__atcBtn' onClick={addToCart}>
					Add to cart
				</button>
			</div>
		</div>
	);
}

export default Card;
