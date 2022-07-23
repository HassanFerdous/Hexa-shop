import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../redux/slices/apiSlice';
import CategoryCollection from './CollectionByCategory';

export default function Product() {
	let { param } = useParams();
	let isProductId = new RegExp('^[0-9a-fA-F]{24}$').test(param);

	if (!isProductId) {
		return <CategoryCollection category={param} />;
	}

	return <SingleProduct id={param} />;
}

function SingleProduct({ id }) {
	const { data, isLoading, isSuccess } = useGetProductByIdQuery(id);
	return (
		<>
			{isLoading && <h2>Loading</h2>}
			{isSuccess ? (
				<div className='pdp-wrapper'>
					<section className='pdp'>
						<div className='container pdp__grid'>
							<div className='pdp__gallery'>
								<picture className='pdp__img'>
									<img src={`/assets/images/${data.product.img}`} alt='' />
								</picture>
							</div>
							<div className='pdp-details'>
								<div className='d-flex align-items-center justify-content-between pdp-details__row'>
									<h3 className='pdp__title'>{data.product.title}</h3>
									<div className='pdd__rating card__rating'>
										{Array(5)
											.fill()
											.map((item, idx) => (
												<img key={idx} src='/assets/svgs/star.svg' alt='star' />
											))}
									</div>
								</div>
								<span className='pdp-price'>${data.product.price}</span>
								<p className='pdp__desc'>{data.product.desc}</p>
								<div className='pdp__counter counter'>
									<button className='counter-btn counter-btn--add'>-</button>
									<input className='counter__input' type='number' defaultValue='1' />
									<button className='counter-btn counter-btn--minus'>+</button>
								</div>
								<button className='pdp__atc'>Add to bag</button>
								<ul className='pdp__list'>
									<li>amet consectetur adipisicing elit. Placeat, sunt.</li>
									<li>Lorem ipsum dolor sit, adipisicing elit. Placeat, sunt.</li>
									<li>sit, amet consectetur adipisicing elit. Placeat, sunt.</li>
									<li>dolor sit, amet consectetur adipisicing elit. Placeat, sunt.</li>
									<li>Lorem ipsum dolor adipisicing elit. Placeat, sunt.</li>
								</ul>
							</div>
						</div>
					</section>
					{/* <Explore /> */}
				</div>
			) : (
				'product not found'
			)}
		</>
	);
}
