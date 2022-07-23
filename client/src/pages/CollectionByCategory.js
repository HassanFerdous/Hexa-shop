import { Link } from 'react-router-dom';
import Banner from '../components/banner/banner';
import { useGetProductQuery } from '../redux/slices/apiSlice';
import Card from '../components/card/card';

export default function CategoryCollection({ category }) {
	const { data, isLoading, isSuccess } = useGetProductQuery();
	return (
		<>
			<Banner
				bgUrl='/assets/images/collection-banner.jpg'
				title={category}
				desc={`All collection for ${category}`}
			/>
			<div className='collection'>
				<div className='container'>
					<div className='collection__head'>
						<h2 className='collection__title'>Our Latest Products</h2>
						<p className='collection__desc'>Check out all of our products.</p>
					</div>
					<div className='collection__grid'>
						{isLoading && 'loading'}
						{isSuccess &&
							data.products
								.map((product) => {
									return { ...product, category: product.category.split(',').map((item) => item.trim()) };
								})
								.filter((product) => product.category.indexOf(category) !== -1)
								.map((item, idx) => <Card key={idx} product={item} />)}
					</div>
					<div className='collection-pagination'>
						<Link to='#'>1</Link>
						<Link to='#'>2</Link>
						<Link to='#'>3</Link>
						<Link to='#'>4</Link>
						<Link to='#'>
							<img src='/assets/svgs/angle-right.svg' alt='' />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
