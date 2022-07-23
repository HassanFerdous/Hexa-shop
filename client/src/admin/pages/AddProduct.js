import React, { useState } from 'react';
import '../style/bootstrap.min.css';

export default function AddProduct({ showModal }) {
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		price: '',
		color: '',
		categories: '',
		size: '',
		inStock: '',
	});

	// const handleProductSubmit = (e) => {
	// 	e.preventDefault();

	// 	let data = new FormData();

	// 	for (let [key, value] of Object.entries(formData)) {
	// 		// console.log(key, '=', value);
	// 		data.append(key, value);
	// 	}

	// 	const uploadProduct = async () => {
	// 		try {
	// 			let res = await userRequest.post('/products/new', data);
	// 			setFormData((prev) => {
	// 				for (let [key] of Object.entries(prev)) {
	// 					if (key === 'img') return;
	// 					prev[key] = '';
	// 				}
	// 			});
	// 			console.log(res.data);
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	};
	// 	uploadProduct();
	// };

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className='new-product-modal'>
			<form encType='multipart/form-data' style={{ padding: '20px' }}>
				<h2 className='m-2'>New Product</h2>
				<input className='m-2 form-control' type='text' onChange={handleChange} name='title' placeholder='Title' />
				<input
					className='m-2 form-control'
					type='text'
					onChange={handleChange}
					name='description'
					placeholder='description'
				/>
				<input
					className='m-2 form-control'
					type='file'
					onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
					name='img'
					placeholder='img'
					// value={formData?.img}
				/>
				<input
					className='m-2 form-control'
					type='number'
					onChange={handleChange}
					name='price'
					placeholder='price'
				/>

				<input className='m-2 form-control' type='text' onChange={handleChange} name='color' placeholder='Colors' />
				<input
					className='m-2 form-control'
					type='text'
					onChange={handleChange}
					name='categories'
					placeholder='Categories'
				/>
				<input className='m-2 form-control' type='text' onChange={handleChange} name='size' placeholder='Sizes' />

				<input
					className='m-2 form-control'
					type='text'
					onChange={handleChange}
					name='inStock'
					placeholder='InStock'
				/>
				<div className='text-left form-group' style={{ textAlign: 'left' }}>
					<input className='m-2 btn btn-primary' type='submit' value='ADD PRODUCT' />
					<button
						className='m-2 btn btn-danger'
						type='button'
						value='ADD PRODUCT'
						onClick={() => showModal(false)}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}
