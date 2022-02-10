import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import AddProductModal from './addProduct';
import EditProduct from './editProduct';

export default function AdminProducts() {
	const [isOpen, setIsOpen] = useState(false);
	const [product, setProduct] = useState(null);
	const [newProductModal, setNewProductModal] = useState(false);
	const [productArr, setProductArr] = useState([]);

	const products = useFetch('http://localhost:5000/products');

	const openModal = (id) => {
		setIsOpen(true);
		let currentProduct = products.products.find((product) => product._id === id);
		setProduct(currentProduct);
	};

	const deleteProduct = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/products/${id}`);
		} catch (error) {
			console.log('failed to delete product');
		}
		updateProduct();
	};

	function updateProduct() {
		fetch('http://localhost:5000/products')
			.then((res) => res.json())
			.then((data) => setProductArr(data.products))
			.catch((err) => console.log(err.message));
	}

	useEffect(() => {
		// fetch('http://localhost:5000/products')
		// 	.then((res) => res.json())
		// 	.then((data) => setProductArr(data.products))
		// 	.catch((err) => console.log(err.message));
		updateProduct();
	}, []);

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
					<li className='dashboard-sidebar__item'>
						<Link className='dashboard-sidebar__link' to='#' onClick={() => setNewProductModal(true)}>
							Add product
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

						{productArr.map((product, idx) => {
							return (
								<div className='table-row product' key={idx}>
									<div className='table-data product__id'>
										<input type='checkbox' />
										<span>{idx + 1}</span>
									</div>
									<div className='table-data product__thumb'>
										<img
											className='product__img'
											src={`/assets/images/${product.img ? product.img : 'men-01.jpg'}`}
											alt=''
										/>
										<p className='product__name'>{product.title}</p>
									</div>
									<div className='table-data product__stock'>
										<span>{product.inStock}</span>
									</div>
									<div className='table-data product__status'>
										<span>{product.status ? 'active' : 'In-active'}</span>
									</div>
									<div className='table-data product__price'>
										<span>${product.price}</span>
									</div>
									<div className='table-data product-action'>
										<div className='product-action__group'>
											<Link className='product-action__edit' onClick={(e) => openModal(product._id)} to='#'>
												Edit
											</Link>
											<Link
												className='product-action__remove'
												to='#'
												onClick={() => deleteProduct(product._id)}>
												Delete
											</Link>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			{isOpen ? <EditProduct isOpen={setIsOpen} product={product} updateProduct={updateProduct} /> : null}
			{newProductModal ? (
				<AddProductModal setNewProductModal={setNewProductModal} updateProduct={updateProduct} />
			) : null}
		</div>
	);
}
