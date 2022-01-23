import { useState } from 'react';
import { Link } from 'react-router-dom';
import EditProduct from './updateModal';

export default function AdminProducts() {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = (e) => {
		setIsOpen(true);
	};
	return (
		<div className='dashboard'>
			<div className='dashboard-sidebar'>
				<h3 className='dashboard-sidebar__title'>Dashboard</h3>
				<ul className='dashboard-sidebar__list'>
					<li className='dashboard-sidebar__item'>
						<Link className='dashboard-sidebar__link' to='#'>
							Users
						</Link>
					</li>
					<li className='dashboard-sidebar__item'>
						<Link className='dashboard-sidebar__link' to='#'>
							Categories
						</Link>
					</li>
					<li className='dashboard-sidebar__item'>
						<Link className='dashboard-sidebar__link' to='#'>
							Products
						</Link>
					</li>
				</ul>
			</div>
			<div className='dashboard-main'>
				<div className='products'>
					<div className='table'>
						<div className='table-row'>
							<div className='table-head product__id'>
								<input type='checkbox' />
								<span>Id</span>
							</div>
							<div className='table-head'>
								<span>Image</span>
							</div>
							<div className='table-head'>
								<span>Stock</span>
							</div>
							<div className='table-head'>
								<span>status</span>
							</div>
							<div className='table-head'>
								<span>Price</span>
							</div>
							<div className='table-head'>
								<span>action</span>
							</div>
						</div>
						<div className='table-row product'>
							<div className='table-data product__id'>
								<input type='checkbox' />
								<span>1</span>
							</div>
							<div className='table-data product__thumb'>
								<img className='product__img' src='/assets/images/men-01.jpg' alt='' />
								<p className='product__name'>Air Force 1 X</p>
							</div>
							<div className='table-data product__stock'>
								<span>123</span>
							</div>
							<div className='table-data product__status'>
								<span>active</span>
							</div>
							<div className='table-data product__price'>
								<span>$120.00</span>
							</div>
							<div className='table-data product-action'>
								<div className='product-action__group'>
									<Link className='product-action__edit' onClick={openModal} to='#'>
										Edit
									</Link>
									<Link className='product-action__remove' to='#'>
										Delete
									</Link>
								</div>
							</div>
						</div>
						<div className='table-row product'>
							<div className='table-data product__id'>
								<input type='checkbox' />
								<span>2</span>
							</div>
							<div className='table-data product__thumb'>
								<img className='product__img' src='/assets/images/men-01.jpg' alt='' />
								<p className='product__name'>Air Force 1 X</p>
							</div>
							<div className='table-data product__stock'>
								<span>123</span>
							</div>
							<div className='table-data product__status'>
								<span>active</span>
							</div>
							<div className='table-data product__price'>
								<span>$120.00</span>
							</div>
							<div className='table-data product-action'>
								<div className='product-action__group'>
									<Link className='product-action__edit' onClick={openModal} to='#'>
										Edit
									</Link>
									<Link className='product-action__remove' to='#'>
										Delete
									</Link>
								</div>
							</div>
						</div>
						<div className='table-row product'>
							<div className='table-data product__id'>
								<input type='checkbox' />
								<span>3</span>
							</div>
							<div className='table-data product__thumb'>
								<img className='product__img' src='/assets/images/men-01.jpg' alt='' />
								<p className='product__name'>Air Force 1 X</p>
							</div>
							<div className='table-data product__stock'>
								<span>123</span>
							</div>
							<div className='table-data product__status'>
								<span>active</span>
							</div>
							<div className='table-data product__price'>
								<span>$120.00</span>
							</div>
							<div className='table-data product-action'>
								<div className='product-action__group'>
									<Link className='product-action__edit' onClick={openModal} to='#'>
										Edit
									</Link>
									<Link className='product-action__remove' to='#'>
										Delete
									</Link>
								</div>
							</div>
						</div>
						<div className='table-row product'>
							<div className='table-data product__id'>
								<input type='checkbox' />
								<span>4</span>
							</div>
							<div className='table-data product__thumb'>
								<img className='product__img' src='/assets/images/men-01.jpg' alt='' />
								<p className='product__name'>Air Force 1 X</p>
							</div>
							<div className='table-data product__stock'>
								<span>123</span>
							</div>
							<div className='table-data product__status'>
								<span>active</span>
							</div>
							<div className='table-data product__price'>
								<span>$120.00</span>
							</div>
							<div className='table-data product-action'>
								<div className='product-action__group'>
									<Link className='product-action__edit' onClick={openModal} to='#'>
										Edit
									</Link>
									<Link className='product-action__remove' to='#'>
										Delete
									</Link>
								</div>
							</div>
						</div>
						<div className='table-row product'>
							<div className='table-data product__id'>
								<input type='checkbox' />
								<span>5</span>
							</div>
							<div className='table-data product__thumb'>
								<img className='product__img' src='/assets/images/men-01.jpg' alt='' />
								<p className='product__name'>Air Force 1 X</p>
							</div>
							<div className='table-data product__stock'>
								<span>123</span>
							</div>
							<div className='table-data product__status'>
								<span>active</span>
							</div>
							<div className='table-data product__price'>
								<span>$120.00</span>
							</div>
							<div className='table-data product-action'>
								<div className='product-action__group'>
									<Link className='product-action__edit' onClick={openModal} to='#'>
										Edit
									</Link>
									<Link className='product-action__remove' to='#'>
										Delete
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{isOpen ? <EditProduct isOpen={setIsOpen} /> : null}
		</div>
	);
}
