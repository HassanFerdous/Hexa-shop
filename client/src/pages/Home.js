import Category from '../components/category/category';
import Hero from '../components/hero/hero';
import Explore from '../components/sections/explore';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productActionCreator } from '../redux/action';
import { useEffect } from 'react';
export default function Home() {
	const category = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const { getAllProducts } = bindActionCreators(productActionCreator, dispatch);

	useEffect(() => {
		getAllProducts('http://localhost:5000/products');
	}, []);

	return (
		<div className='home'>
			<Hero />
			<Category
				category={category}
				title="Men's Latest"
				desc='Details to details is what makes Hexashop different from the other themes.'
			/>

			<Category
				category={category}
				title="Women's Latest"
				desc='Details to details is what makes Hexashop different from the other themes.'
			/>
			<Category
				category={category}
				title="Kid's Latest"
				desc='Details to details is what makes Hexashop different from the other themes.'
			/>
			<Explore />
		</div>
	);
}
