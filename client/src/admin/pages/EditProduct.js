import React, { useState } from 'react';
import '../style/bootstrap.min.css';
import { useGetProductByIdQuery } from '../../redux/slices/apiSlice';

export default function EditProduct({ showModal, id }) {
	const [productData, setProductData] = useState({
		title: '',
		description: '',
		price: '',
		categories: '',
		inStock: '',
		color: '',
		size: '',
	});
	const [newFile, setNewFile] = useState(false);
	const [previewFileUri, setPreviewFileUri] = useState(null);

	const { data, isLoading, isSuccess, isError } = useGetProductByIdQuery(id);

	const handleFile = (target) => {
		let file = target.files[0];
		if (file) {
			setProductData({ ...productData, [target.name]: file });
			setNewFile(file);
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.addEventListener('load', function () {
				setPreviewFileUri(this.result);
			});
		}
	};

	const handleChange = (e) => {
		setProductData({ ...productData, [e.target.name]: e.target.value });
	};

	// const handleProductSubmit = (e) => {
	// 	e.preventDefault();
	// 	let formData = new FormData();

	// 	for (let [key, value] of Object.entries(productData)) {
	// 		formData.append(key, value);
	// 	}

	// 	let updateProduct = async () => {
	// 		try {
	// 			await userRequest.put(`/products/${params.id}`, formData);
	// 			getProducts(dispatch);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};

	// 	updateProduct();
	// 	navigate('/admin/products');
	// };

	return (
		<>
			<div className='edit-product'>
				{isLoading && <h1>Loading</h1>}
				{isError && <h1>Something went wrong</h1>}

				{isSuccess && (
					<form encType='multipart/form-data' style={{ padding: '20px' }}>
						<h2>Edit product</h2>
						<input
							className='my-2 form-control'
							type='text'
							onChange={handleChange}
							name='title'
							placeholder='Title'
							value={data.product.title}
						/>
						<input
							className='my-2 form-control'
							type='text'
							onChange={handleChange}
							name='description'
							placeholder='description'
							value={data.product.desc}
						/>
						<div className='d-flex align-items-center justify-content-between my-2 px-2 py-3 bg-white file-group form-group'>
							<input
								style={{ opacity: 0, visibility: 'hidden', position: 'absolute' }}
								id='edit-file'
								className='form-control'
								type='file'
								onChange={(e) => handleFile(e.target)}
								name='img'
								placeholder='img'
							/>

							{!newFile ? (
								<div className='uploaded-files'>
									<div className='uploaded-file'>
										{/* <button>&times;</button> */}
										<img src={`/assets/images/${data.product.img}`} alt='' />
									</div>
								</div>
							) : (
								<div>
									<img style={{ width: '40px', height: '40px' }} src={`${previewFileUri}`} alt='' />
								</div>
							)}
							<label className='btn btn-primary' htmlFor='edit-file'>
								Add new image
							</label>
						</div>
						<input
							className='my-2 form-control'
							type='number'
							onChange={handleChange}
							name='price'
							placeholder='price'
							value={data.product.price}
						/>

						<input
							className='my-2 form-control'
							type='text'
							onChange={handleChange}
							name='color'
							placeholder='Colors'
							// value={data.product.color}
							value={'color-1, color-2'}
						/>
						<input
							className='my-2 form-control'
							type='text'
							onChange={handleChange}
							name='categories'
							placeholder='Categories'
							value={data.product.category}
						/>
						<input
							className='my-2 form-control'
							type='text'
							onChange={handleChange}
							name='size'
							placeholder='Sizes'
							value='sm'
						/>

						<input
							className='my-2 form-control'
							type='text'
							onChange={handleChange}
							name='inStock'
							placeholder='InStock'
							value={data.product.inStock}
						/>
						<div className='text-left form-group' style={{ textAlign: 'left' }}>
							<input className='m-2 btn btn-primary' type='submit' value='UPDATE' />
							<button className='m-2 btn btn-danger' type='button' onClick={() => showModal(false)}>
								Cancel
							</button>
						</div>
					</form>
				)}
			</div>
		</>
	);
}
