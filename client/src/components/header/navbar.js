import { Link } from 'react-router-dom';

export default function Navbar({ isNavOpen }) {
	return (
		<nav className={`navbar ${isNavOpen ? 'navbar--open' : ''}`}>
			<ul className='navbar__list'>
				<li className='navbar__item'>
					<Link to='/' className='navbar__link'>
						Home
					</Link>
				</li>
				<li className='navbar__item'>
					<Link to='#' className='navbar__link'>
						Men's
					</Link>
				</li>
				<li className='navbar__item'>
					<Link to='#' className='navbar__link'>
						Women's
					</Link>
				</li>
				<li className='navbar__item'>
					<Link to='#' className='navbar__link'>
						Kid's
					</Link>
				</li>
				<li className='navbar__item'>
					<Link to='#' className='navbar__link'>
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
			</ul>
		</nav>
	);
}
