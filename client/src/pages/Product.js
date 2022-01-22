import Explore from '../components/sections/explore';

export default function Product() {
	const rating = 5;
	return (
		<>
			<section className='pdp'>
				<div className='container pdp__grid'>
					<div className='pdp__gallery'>
						<picture className='pdp__img'>
							<img src='/assets/images/men-01.jpg' alt='' />
						</picture>
					</div>
					<div className='pdp-details'>
						<div className='d-flex align-items-center justify-content-between pdp-details__row'>
							<h3 className='pdp__title'>New Green Jacket</h3>
							<div className='pdd__rating card__rating'>
								{Array(rating)
									.fill()
									.map((item, idx) => (
										<img key={idx} src='/assets/svgs/star.svg' alt='star' />
									))}
							</div>
						</div>
						<span className='pdp-price'>$75.00</span>
						<p className='pdp__desc'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis ex sint aliquam
							enim? Nobis, rem? Quasi tenetur itaque debitis cum at quos cupiditate ducimus. Iste harum rem
							aliquid blanditiis?
						</p>
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
			<Explore />
		</>
	);
}
