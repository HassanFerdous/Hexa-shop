import { Routes, Route } from 'react-router-dom';
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
			</div>
		</div>
	);
}
