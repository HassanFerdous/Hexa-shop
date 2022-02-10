import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/banner/banner';
import Card from '../components/card/card';

export default function Collections() {
	const [collection, setCollection] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				let res = await fetch('http://localhost:5000/products');
				let result = await res.json();
				setCollection(result.products);
			} catch (error) {
				console.log(error.message);
			}
		})();
	}, []);

	return (
		<>
			<Banner
				bgUrl='/assets/images/collection-banner.jpg'
				title='Check Our Products'
				desc='Awesome & Creative HTML CSS layout by TemplateMo'
			/>
			<div className='collection'>
				<div className='container'>
					<div className='collection__head'>
						<h2 className='collection__title'>Our Latest Products</h2>
						<p className='collection__desc'>Check out all of our products.</p>
					</div>
					<div className='collection__grid'>
						{collection.map((item, idx) => (
							<Card key={idx} product={item} />
						))}
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
