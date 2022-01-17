import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
	const [navOpen, setNavOpen] = useState(false);
	const handleNavOpen = (e) => {
		e.preventDefault();
		setNavOpen(!navOpen);
	};

	return (
		<header className='header'>
			<div className='container header-grid'>
				<div className='header__left'>
					<Link to='/'>
						<img src='/assets/images/logo.png' alt='logo' />
					</Link>
				</div>
				<Navbar isNavOpen={navOpen} />
				<div
					className={`navbar-toggler ${navOpen ? 'navbar-toggler--open' : ''}`}
					onClick={(e) => handleNavOpen(e)}>
					<span></span>
				</div>
			</div>
		</header>
	);
};

export default Header;
