import { Link } from 'react-router-dom';
import Banner from '../components/banner/banner';
import { useGetProductQuery, usePaginationMutation } from '../redux/slices/apiSlice';
import Card from '../components/card/card';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Collections() {
	const [products, setProducts] = useState([]);
	const { data, isLoading, isSuccess } = useGetProductQuery('page=1&limit=6');
	const [pagination] = usePaginationMutation();
	useEffect(() => {
		if (isSuccess) {
			setProducts(data?.products);
		}
	}, [isSuccess, data?.products]);

	const handlePagination = async (e, pageNum) => {
		let paginationLink = [...e.target.parentElement.children];
		paginationLink.forEach((item) => {
			item.classList.remove('active');
			e.target.classList.add('active');
		});
		let { data } = await pagination(`page=${pageNum}&limit=6`);
		setProducts(data?.products);
	};

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
						{isLoading && 'loading'}
						{isSuccess && products.map((item, idx) => <Card key={idx} product={item} />)}
					</div>
					<div className='collection-pagination'>
						{data?.totalPages > 1
							? new Array(data.totalPages).fill('').map((item, idx) => {
									let pageNum = idx + 1;
									return (
										<Link
											key={pageNum}
											to='#'
											className={`${idx === 0 ? 'active' : null}`}
											onClick={(e) => handlePagination(e, pageNum)}>
											{pageNum}
										</Link>
									);
							  })
							: null}
					</div>
				</div>
			</div>
		</>
	);
}
