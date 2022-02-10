import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../cart/cart';

export default function Navbar({ isNavOpen }) {
	const [isCartOpen, setIsCartOpen] = useState(false);
	return (
		<nav className={`navbar ${isNavOpen ? 'navbar--open' : ''}`}>
			<ul className='navbar__list'>
				<li className='navbar__item'>
					<Link to='/' className='navbar__link'>
						Home
					</Link>
				</li>
				<li className='navbar__item'>
					<Link to='/products' className='navbar__link'>
						Shop
					</Link>
				</li>
				<li className='navbar__item'>
					<Link to='/feature' className='navbar__link'>
						Features
					</Link>
				</li>
				<li className='navbar__item'>
					<Link to='/explore' className='navbar__link'>
						Explore
					</Link>
				</li>
				<li className='navbar__item'>
					<Link to='#' className='navbar__link' onClick={() => setIsCartOpen(!isCartOpen)}>
						<img src='/assets/svgs/shopping-bag1.svg' alt='' />
					</Link>
					{isCartOpen ? <Cart setIsCartOpen={setIsCartOpen} /> : null}
				</li>
			</ul>
		</nav>
	);
}
