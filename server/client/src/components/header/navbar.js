import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../cart/cart';
import LoginModal from '../login/loginModal';

export default function Navbar({ isNavOpen }) {
	const cartItems = useSelector((state) => state.cart);
	const { access_token } = useSelector((state) => state.user);

	const [isCartOpen, setIsCartOpen] = useState(false);
	const [showAccModal, setShowAccModal] = useState(false);
	let navigate = useNavigate();

	const openAccountModal = () => {
		if (access_token) {
			navigate('/account', { replace: true });
			return;
		}
		setShowAccModal(true);
	};

	const hideModal = () => {
		setShowAccModal(false);
	};

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
					<Link to='#' className='navbar__link'>
						About
					</Link>
				</li>
				<li className='navbar__item'>
					<span className='navbar__link' onClick={openAccountModal}>
						Account
					</span>
				</li>
				<li className='navbar__item'>
					<Link to='#' className='navbar__link'>
						Contact
					</Link>
				</li>
				<li className='navbar__item'>
					<Link to='#' className='cart-btn' onClick={() => setIsCartOpen(!isCartOpen)}>
						<img src='/assets/svgs/shopping-bag1.svg' alt='' />
						{cartItems.length ? <span className='cart-count'>{cartItems.length}</span> : null}
					</Link>
					{isCartOpen ? <Cart setIsCartOpen={setIsCartOpen} /> : null}
				</li>
			</ul>

			{showAccModal ? <LoginModal hideModal={hideModal} /> : null}
		</nav>
	);
}
