import Category from '../components/category/category';
import Hero from '../components/hero/hero';
import Explore from '../components/sections/explore';
export default function Home() {
	return (
		<div className='home'>
			<Hero />
			<Category
				// category={category}
				title="Men's Latest"
				desc='Details to details is what makes Hexashop different from the other themes.'
			/>

			<Category
				// category={category}
				title="Women's Latest"
				desc='Details to details is what makes Hexashop different from the other themes.'
			/>
			<Category
				// category={category}
				title="Kid's Latest"
				desc='Details to details is what makes Hexashop different from the other themes.'
			/>
			<Explore />
		</div>
	);
}
