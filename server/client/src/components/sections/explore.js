import { Link } from 'react-router-dom';
export default function Explore() {
	return (
		<section className='explore'>
			<div className='container'>
				<div className='explore__grid'>
					<div className='explore__grid-col'>
						<h3 className='explore__title'>Explore Our Products</h3>
						<p>
							You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this
							layout. You can convert this template as any kind of ecommerce CMS theme as you wish.
						</p>
						<blockquote className='explore__quote'>
							<img src='/assets/svgs/quote.svg' alt='' /> You are not allowed to redistribute this template ZIP
							file on any other website.
						</blockquote>
						<p>
							There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely
							free of charge at our TemplateMo website. There are web development costs for us.
						</p>
						<p>
							If this template is beneficial for your website or business, please kindly support us a little via
							PayPal. Please also tell your friends about our great website. Thank you.
						</p>
						<Link className='btn btn-outline' to='#'>
							Discover more
						</Link>
					</div>
					<div className='explore__grid-col explore-gallery'>
						<div className='explore-gallery__item'>
							<div className='explore-gallery__content'>
								<h4>Leather Bags</h4>
								<p>Latest Collection</p>
							</div>
						</div>
						<div className='explore-gallery__item'>
							<img src='/assets/images/explore-image-01.jpg' alt='img' />
						</div>
						<div className='explore-gallery__item'>
							<img src='/assets/images/explore-image-02.jpg' alt='img' />
						</div>
						<div className='explore-gallery__item'>
							<div className='explore-gallery__content'>
								<h4>Leather Bags</h4>
								<p>Latest Collection</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
