import Navbar from './navbar';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
	const [navOpen, setNavOpen] = useState(false);
	const handleNavOpen = (e) => {
		e.preventDefault();
		setNavOpen(!navOpen);
		document.body.classList.toggle('nav-open');
	};

	let { pathname } = useLocation();

	useEffect(() => {
		setNavOpen(false);
		document.body.classList.remove('nav-open');
	}, [pathname]);

	return (
		<header className='header'>
			<div className='container header-grid'>
				<div className='header__left'>
					<Link to='/'>
						<img src='/assets/images/logo.png' alt='logo' />
					</Link>
				</div>
				<Navbar isNavOpen={navOpen} showNav={setNavOpen} />
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
