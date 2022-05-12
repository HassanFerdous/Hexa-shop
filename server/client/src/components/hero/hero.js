import { Link } from 'react-router-dom';

export default function Hero() {
	return (
		<div className='hero'>
			<div className='container-fluid'>
				<div className='hero-grid'>
					<div className='hero-banner'>
						<img src='assets/images/hero-banner.jpg' alt='' />
						<div className='hero-card__top hero-banner__content'>
							<h2 className='hero__title hero__title-lg'>We Are Hexashop</h2>
							<p>Awesome, clean & creative HTML5 Template</p>
							<Link to='#' className='btn btn-outline'>
								Purchase Now!
							</Link>
						</div>
					</div>
					<div className='hero__cards'>
						<div className='hero-card'>
							<img src='/assets/images/hero-1.jpg' alt='' />
							<div className='hero-card__top'>
								<div className='hero-card__content'>
									<h3 className='hero-card__title'>Women</h3>
									<p>Best Clothes For Women</p>
								</div>
								<div className='hero-card__content-hover'>
									<h3 className='hero-card__title'>Women</h3>
									<Link to='#' className='btn btn-outline'>
										Discover More
									</Link>
								</div>
							</div>
						</div>
						<div className='hero-card'>
							<img src='/assets/images/hero-2.jpg' alt='' />
							<div className='hero-card__top'>
								<div className='hero-card__content'>
									<h3 className='hero-card__title'>Women</h3>
									<p>Best Clothes For Women</p>
								</div>
								<div className='hero-card__content-hover'>
									<h3 className='hero-card__title'>Women</h3>
									<Link to='#' className='btn btn-outline'>
										Discover More
									</Link>
								</div>
							</div>
						</div>
						<div className='hero-card'>
							<img src='/assets/images/hero-3.jpg' alt='' />
							<div className='hero-card__top'>
								<div className='hero-card__content'>
									<h3 className='hero-card__title'>Women</h3>
									<p>Best Clothes For Women</p>
								</div>
								<div className='hero-card__content-hover'>
									<h3 className='hero-card__title'>Women</h3>
									<Link to='#' className='btn btn-outline'>
										Discover More
									</Link>
								</div>
							</div>
						</div>
						<div className='hero-card'>
							<img src='/assets/images/hero-4.jpg' alt='' />
							<div className='hero-card__top'>
								<div className='hero-card__content'>
									<h3 className='hero-card__title'>Women</h3>
									<p>Best Clothes For Women</p>
								</div>
								<div className='hero-card__content-hover'>
									<h3 className='hero-card__title'>Women</h3>
									<Link to='#' className='btn btn-outline'>
										Discover More
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
