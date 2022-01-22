import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Product from './pages/Product';

export default function App() {
	return (
		<div className='app'>
			<div className='app-content'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/products/:category' element={<Collections />} />
					<Route path='/product/:id' element={<Product />} />
				</Routes>
				<Footer />
			</div>
		</div>
	);
}
