import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<div className='footer'>
			<div className='container'>
				<div className='footer__top'>
					<div className='footer-widget'>
						<Link className='footer__logo' to='#'>
							<img src='/assets/images/white-logo.png' alt='' />
						</Link>
						<ul className='footer-list'>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'>
									16501 Collins Ave, Sunny Isles Beach, FL 33160, United States
								</Link>
							</li>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'>
									hexashop@company.com
								</Link>
							</li>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'>
									hexashop@company.com
								</Link>
							</li>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'>
									010-020-0340
								</Link>
							</li>
						</ul>
					</div>
					<div className='footer-widget'>
						<h5 className='footer-widget__heading'>Shopping & Categories</h5>
						<ul className='footer-list'>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'>
									Men’s Shopping
								</Link>
							</li>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'>
									Women’s Shopping
								</Link>
							</li>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'>
									Kid's Shopping
								</Link>
							</li>
						</ul>
					</div>
					<div className='footer-widget'>
						<h5 className='footer-widget__heading'>Useful Links</h5>
						<ul className='footer-list'>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'>
									Homepage
								</Link>
							</li>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'>
									About Us
								</Link>
							</li>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'>
									Help
								</Link>
							</li>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'>
									Contact Us
								</Link>
							</li>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'></Link>
							</li>
						</ul>
					</div>
					<div className='footer-widget'>
						<h5 className='footer-widget__heading'>Help & Information</h5>
						<ul className='footer-list'>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'>
									Help
								</Link>
							</li>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'>
									FAQ's
								</Link>
							</li>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'>
									Shipping
								</Link>
							</li>
							<li className='footer-list__item'>
								<Link to='#' className='footer__link'>
									Tracking ID
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className='footer__bottom'>
					<p>
						Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved. <br /> Design:
						<Link to='/'>TemplateMo</Link>
					</p>

					<ul className='footer-socialMedia'>
						<li>
							<Link className='footer-socialMedia__link' to='#'>
								<img src='/assets/svgs/facebook.svg' alt='' />
							</Link>
						</li>
						<li>
							<Link className='footer-socialMedia__link' to='#'>
								<img src='/assets/svgs/twitter.svg' alt='' />
							</Link>
						</li>
						<li>
							<Link className='footer-socialMedia__link' to='#'>
								<img src='/assets/svgs/linkedin.svg' alt='' />
							</Link>
						</li>
						<li>
							<Link className='footer-socialMedia__link' to='#'>
								<img src='/assets/svgs/pinterest.svg' alt='' />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
