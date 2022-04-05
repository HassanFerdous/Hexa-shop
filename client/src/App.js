import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Product from './pages/Product';
import AdminProducts from './admin/product/products';
import Account from './pages/Account';

export default function App() {
	return (
		<div className='app'>
			<div className='app-content'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/products/' element={<Collections />} />
					<Route path='/products/:id' element={<Product />} />
					<Route path='' element={<Account />} />
					<Route path='/admin/products' element={<AdminProducts />} />
				</Routes>
				<Footer />
			</div>
		</div>
	);
}
