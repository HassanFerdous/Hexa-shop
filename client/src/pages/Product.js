export default function Product() {
	return (
		<>
			<h2>Product page</h2>
			{/* {product ? (
				<div className='pdp-wrapper'>
					<section className='pdp'>
						<div className='container pdp__grid'>
							<div className='pdp__gallery'>
								<picture className='pdp__img'>
									<img src={`/assets/images/${product.img}`} alt='' />
								</picture>
							</div>
							<div className='pdp-details'>
								<div className='d-flex align-items-center justify-content-between pdp-details__row'>
									<h3 className='pdp__title'>{product.title}</h3>
									<div className='pdd__rating card__rating'>
										{Array(rating)
											.fill()
											.map((item, idx) => (
												<img key={idx} src='/assets/svgs/star.svg' alt='star' />
											))}
									</div>
								</div>
								<span className='pdp-price'>${product.price}</span>
								<p className='pdp__desc'>{product.desc}</p>
								<div className='pdp__counter counter'>
									<button
										className='counter-btn counter-btn--add'
										onClick={() => decrementQuantity(productId)}>
										-
									</button>
									<input className='counter__input' type='number' defaultValue='1' />
									<button
										className='counter-btn counter-btn--minus'
										onClick={() => incrementQuantity(productId)}>
										+
									</button>
								</div>
								<button className='pdp__atc' onClick={() => addItemToCart(product)}>
									Add to bag
								</button>
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
				</div>
			) : (
				'product not found'
			)} */}
		</>
	);
}
