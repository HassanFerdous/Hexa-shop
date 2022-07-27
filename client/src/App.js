import { Routes, Route, useLocation, Outlet, Navigate } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Product from './pages/Product';
import Account from './pages/Account';
import Admin from './admin/Admin';
import LoginAdmin from './admin/loginAdmin';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function App() {
	let { pathname } = useLocation();
	const { currentUser, token } = useSelector((state) => state.user);

	const [showHeader, setShowHeader] = useState(true);
	useEffect(() => {
		pathname.split('/')[1] === 'admin' && setShowHeader(false);
		pathname.split('/')[1] === 'login' && setShowHeader(false);
	}, [pathname]);

	return (
		<>
			<div className='app'>
				{showHeader && <Header />}

				<div className='app-content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/products/' element={<Collections />} />
						<Route path='/products/:param' element={<Product />} />
						<Route path='/account' element={currentUser ? <Account /> : <Navigate to={'/login'} replace />} />
						<Route path='/admin/' element={currentUser?.isAdmin ? <Admin /> : <Navigate to={'/login'} replace />}>
							<Route path='client' element={<Outlet />}></Route>
							<Route path='products' element={<Outlet />}></Route>
						</Route>
						<Route path='/login' element={<LoginAdmin />} />
					</Routes>
				</div>

				{showHeader && <Footer />}
			</div>
		</>
	);
}
