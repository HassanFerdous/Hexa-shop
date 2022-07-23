import { useNavigate } from 'react-router-dom';

function Card({ product }) {
	const { title, img, price, rating = 5 } = product;
	let navigate = useNavigate();

	const handleClick = () => {
		navigate(`/products/${product._id}`, { replace: true });
	};

	return (
		<div className='card'>
			<div className='card__thumb'>
				<picture className='card__img' onClick={handleClick}>
					<img src={`/assets/images/${img}`} alt='' />
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
				<button className='card__atcBtn'>Add to cart</button>
			</div>
		</div>
	);
}

export default Card;
