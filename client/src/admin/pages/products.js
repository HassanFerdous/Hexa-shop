import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct';
// import { getProducts } from '../../redux/apiCalls';
// import { userRequest } from '../../requestMethod';
// import { useDispatch, useSelector } from 'react-redux';

function Products() {
	const [showModal, setShowModal] = useState(false);
	// const dispatch = useDispatch();
	// const products = useSelector((state) => state.productReducer.products);
	// useEffect(() => {
	// 	getProducts(dispatch);
	// }, [dispatch]);

	// const removeProduct = async (id) => {
	// 	try {
	// 		let res = await userRequest.delete(`/products/${id}`);
	// 		console.log(res.data);
	// 		getProducts(dispatch);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	const showForm = () => {
		setShowModal(true);
	};

	return (
		<div className='container-fluid pt-4 px-4'>
			<div className='bg-light text-center rounded p-4'>
				<div className='d-flex align-items-center justify-content-between mb-4'>
					<h6 className='mb-0'>Products</h6>
					<Link to='/admin/products/add'>Add Product</Link>
				</div>
				<div className='table-responsive'>
					<table className='table text-start align-middle table-bordered table-hover mb-0'>
						<thead>
							<tr className='text-dark'>
								<th scope='col'>#</th>
								<th scope='col'>Title</th>
								<th scope='col'>Price</th>
								<th scope='col'>Id</th>
								<th scope='col'>Status</th>
								<th scope='col' style={{ width: '140px' }}>
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{/* {products.map((product, idx) => (
									<tr key={idx}>
										<td className='d-flex align-items-center justify-content-center'>
											<img
												style={{
													width: '40px',
													height: '40px',
													borderRadius: '50%',
													overflow: 'hidden',
												}}
												src={`/images/${product.img}`}
												alt=''
											/>
										</td>
										<td>{product.title}</td>
										<td>${product.price}</td>
										<td>{product._id}</td>
										<td>{product.status}</td>
										<td>
											<Link
												className='btn btn-sm btn-primary btn-secondary'
												to={`/admin/products/${product._id}`}>
												Edit
											</Link>
											<Link
												className='ms-3 btn btn-sm btn-primary btn-danger'
												to='#'
												onClick={() => removeProduct(product._id)}>
												Delete
											</Link>
										</td>
									</tr>
								))} */}
							<tr>
								<td className='d-flex align-items-center justify-content-center'>
									<img
										style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }}
										src='/images/img-1652720992531.jpg'
										alt=''
									/>
								</td>
								<td>Men jeans</td>
								<td>75</td>
								<td>klsdflsfjdksfjl</td>
								<td>active</td>
								<td>
									<Link className='btn btn-sm btn-primary btn-secondary' to='#'>
										Edit
									</Link>
									<Link className='ms-3 btn btn-sm btn-primary btn-danger' to='#'>
										Delete
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='d-flex justify-content-end'>
					<button className='mt-3 btn btn-success addNewPdp-btn' onClick={showForm}>
						Add new product
					</button>
				</div>
				{showModal && <AddProduct showModal={setShowModal} />}
			</div>
		</div>
	);
}

export default Products;
