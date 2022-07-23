// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import '../style/bootstrap.min.css';
// import { useNavigate, useParams } from 'react-router-dom';
// import Loader from '../../components/Loader';
// import { getProducts } from '../../redux/apiCalls';
// import { userRequest } from '../../requestMethod';

// export default function EditProduct() {
// 	const [productData, setProductData] = useState({
// 		title: '',
// 		description: '',
// 		price: '',
// 		categories: '',
// 		inStock: '',
// 		color: '',
// 		size: '',
// 	});
// 	const [newFile, setNewFile] = useState(false);
// 	const [previewFileUri, setPreviewFileUri] = useState(null);
// 	let navigate = useNavigate();
// 	const dispatch = useDispatch();
// 	const params = useParams();

// 	let product = useSelector((state) => state.productReducer.products.find((p) => p._id === params.id));

// 	useEffect(() => {
// 		getProducts(dispatch);
// 	}, [dispatch]);

// 	useEffect(() => {
// 		if (product) {
// 			let { title, description, img, categories, price, size, color, inStock } = product;
// 			setProductData({ title, description, img, price, categories, size, color, inStock });
// 		}
// 	}, [product]);

// 	const handleFile = (target) => {
// 		let file = target.files[0];
// 		if (file) {
// 			setProductData({ ...productData, [target.name]: file });
// 			setNewFile(file);
// 			const fileReader = new FileReader();
// 			fileReader.readAsDataURL(file);
// 			fileReader.addEventListener('load', function () {
// 				setPreviewFileUri(this.result);
// 			});
// 		}
// 	};

// 	const handleChange = (e) => {
// 		setProductData({ ...productData, [e.target.name]: e.target.value });
// 	};

// 	const handleProductSubmit = (e) => {
// 		e.preventDefault();
// 		let formData = new FormData();

// 		for (let [key, value] of Object.entries(productData)) {
// 			formData.append(key, value);
// 		}

// 		let updateProduct = async () => {
// 			try {
// 				await userRequest.put(`/products/${params.id}`, formData);
// 				getProducts(dispatch);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		};

// 		updateProduct();
// 		navigate('/admin/products');
// 	};

// 	return (
// 		<>
// 			{product ? (
// 				<div className='content' style={{ minHeight: '100vh', background: '#9fcaff54' }}>
// 					<form onSubmit={handleProductSubmit} encType='multipart/form-data' style={{ padding: '20px' }}>
// 						<input
// 							className='my-2 form-control'
// 							type='text'
// 							onChange={handleChange}
// 							name='title'
// 							placeholder='Title'
// 							value={productData.title}
// 						/>
// 						<input
// 							className='my-2 form-control'
// 							type='text'
// 							onChange={handleChange}
// 							name='description'
// 							placeholder='description'
// 							value={productData.description}
// 						/>
// 						<div className='d-flex align-items-center justify-content-between my-2 px-2 py-3 bg-white file-group form-group'>
// 							<input
// 								style={{ opacity: 0, visibility: 'hidden', position: 'absolute' }}
// 								id='edit-file'
// 								className='form-control'
// 								type='file'
// 								onChange={(e) => handleFile(e.target)}
// 								name='img'
// 								placeholder='img'
// 							/>

// 							{!newFile ? (
// 								<div className='uploaded-files'>
// 									<div className='uploaded-file'>
// 										{/* <button>&times;</button> */}
// 										<img src={`/images/${productData.img}`} alt='' />
// 									</div>
// 								</div>
// 							) : (
// 								<div>
// 									<img style={{ width: '40px', height: '40px' }} src={`${previewFileUri}`} alt='' />
// 								</div>
// 							)}
// 							<label className='btn btn-primary' htmlFor='edit-file'>
// 								Add new image
// 							</label>
// 						</div>
// 						<input
// 							className='my-2 form-control'
// 							type='number'
// 							onChange={handleChange}
// 							name='price'
// 							placeholder='price'
// 							value={productData.price}
// 						/>

// 						<input
// 							className='my-2 form-control'
// 							type='text'
// 							onChange={handleChange}
// 							name='color'
// 							placeholder='Colors'
// 							value={productData.color}
// 						/>
// 						<input
// 							className='my-2 form-control'
// 							type='text'
// 							onChange={handleChange}
// 							name='categories'
// 							placeholder='Categories'
// 							value={productData.categories}
// 						/>
// 						<input
// 							className='my-2 form-control'
// 							type='text'
// 							onChange={handleChange}
// 							name='size'
// 							placeholder='Sizes'
// 							value={product.size}
// 						/>

// 						<input
// 							className='my-2 form-control'
// 							type='text'
// 							onChange={handleChange}
// 							name='inStock'
// 							placeholder='InStock'
// 							value={productData.inStock}
// 						/>
// 						<input className='m-2 btn btn-primary' type='submit' value='UPDATE PRODUCT' />
// 					</form>
// 				</div>
// 			) : (
// 				<Loader />
// 			)}
// 		</>
// 	);
// }
