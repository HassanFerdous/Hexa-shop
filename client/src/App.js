import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './pages/Home';

export default function App() {
	return (
		<div className='app'>
			<div className='app-content'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
				<Footer />
			</div>
		</div>
	);
}
