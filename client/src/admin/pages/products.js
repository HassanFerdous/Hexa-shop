import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDeleteProductMutation, useGetProductQuery } from '../../redux/slices/apiSlice';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

function Products() {
	const [showModal, setShowModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [editProductId, setEditProductId] = useState(null);
	const { isSuccess, isLoading, data, isError } = useGetProductQuery();
	const [deleteProduct] = useDeleteProductMutation();

	const showForm = () => {
		setShowModal(true);
	};

	const handleEditProduct = (id) => {
		setEditProductId(id);
		setEditModal(true);
	};

	return (
		<div className='container-fluid pt-4 px-4'>
			<div className='bg-light text-center rounded p-4'>
				<div className='d-flex align-items-center justify-content-between mb-4'>
					<h6 className='mb-0'>Products</h6>
				</div>
				{isLoading && <h1>Loading</h1>}
				{isError && <h1>Something went wrong</h1>}

				{isSuccess && (
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
								{data.products.map((product, idx) => (
									<tr key={idx}>
										<td className='d-flex align-items-center justify-content-center'>
											<img
												style={{
													width: '40px',
													height: '40px',
													borderRadius: '50%',
													overflow: 'hidden',
												}}
												src={`/assets/images/${product.img}`}
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
												to='#'
												onClick={() => handleEditProduct(product._id)}>
												Edit
											</Link>
											<Link
												className='ms-3 btn btn-sm btn-primary btn-danger'
												to='#'
												onClick={() => deleteProduct(product._id)}>
												Delete
											</Link>
										</td>
									</tr>
								))}
								{/* <tr>
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
								</tr> */}
							</tbody>
						</table>
					</div>
				)}

				<div className='d-flex justify-content-end'>
					<button className='mt-3 btn btn-success addNewPdp-btn' onClick={showForm}>
						Add new product
					</button>
				</div>
				{showModal && <AddProduct showModal={setShowModal} />}
				{editModal && <EditProduct showModal={setEditModal} id={editProductId} />}
			</div>
		</div>
	);
}

export default Products;
