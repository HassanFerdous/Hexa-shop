import React, { useState } from 'react';
import { useEffect } from 'react';
import { useUpdateProductMutation } from '../../redux/slices/apiSlice';
import '../style/bootstrap.min.css';
// import { useEffect } from 'react';

export default function EditProduct({ showModal, product }) {
	const [productData, setProductData] = useState({
		title: '',
		desc: '',
		price: '',
		category: '',
		inStock: '',
		color: '',
		size: '',
		img: '',
	});
	const [newFile, setNewFile] = useState(false);
	const [previewFileUri, setPreviewFileUri] = useState(null);
	const [updateProduct] = useUpdateProductMutation();

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

	useEffect(() => {
		setProductData({
			title: product.title,
			desc: product.desc,
			price: product.price,
			category: product.category,
			inStock: product.inStock,
			color: product.color,
			size: product.size,
			img: product.img,
		});
	}, [product]);

	const handleProductSubmit = async (e) => {
		e.preventDefault();
		let formData = new FormData();
		for (let [key, value] of Object.entries(productData)) {
			formData.append(key, value);
		}

		try {
			await updateProduct({ id: product._id, data: productData });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className='edit-product'>
				{product && (
					<form encType='multipart/form-data' onSubmit={handleProductSubmit} style={{ padding: '20px' }}>
						<h2>Edit product</h2>
						<input
							className='my-2 form-control'
							type='text'
							onChange={handleChange}
							name='title'
							placeholder='Title'
							value={productData.title}
						/>
						<input
							className='my-2 form-control'
							type='text'
							onChange={handleChange}
							name='desc'
							placeholder='description'
							value={productData.desc}
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
										<img src={`/assets/images/${productData.img}`} alt='' />
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
							value={productData.price}
						/>

						<input
							className='my-2 form-control'
							type='text'
							onChange={handleChange}
							name='color'
							placeholder='Colors'
							// value={productData.color}
							value={productData.color}
						/>
						<input
							className='my-2 form-control'
							type='text'
							onChange={handleChange}
							name='category'
							placeholder='Categories'
							value={productData.category}
						/>
						<input
							className='my-2 form-control'
							type='text'
							onChange={handleChange}
							name='size'
							placeholder='Sizes'
							value={productData.size}
						/>

						<input
							className='my-2 form-control'
							type='text'
							onChange={handleChange}
							name='inStock'
							placeholder='InStock'
							value={productData.inStock}
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
