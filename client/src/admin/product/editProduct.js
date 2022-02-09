import { createPortal } from 'react-dom';
import { useState } from 'react';

export default function EditProduct({ isOpen, product }) {
	const [formData, setFormData] = useState({
		title: product.title,
		inStock: product.inStock,
		status: product.status,
		price: product.price,
		desc: product.desc,
	});

	const closeModal = () => {
		isOpen(false);
	};

	const handleChange = (e) => {
		setFormData((data) => (data = { ...data, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let res = await fetch(`http://localhost:5000/products/${product._id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});
			closeModal();
			window.location.reload();
		} catch (error) {
			console.log(error.message);
		}
	};

	return createPortal(
		<div className='modal'>
			<div className='modal-table'>
				<div className='modal-table__cell'>
					<div className='modal__content'>
						<button className='modal__close' onClick={closeModal}>
							close
						</button>
						<div className='modal__body'>
							<form className='form' onSubmit={handleSubmit}>
								<div className='form-row'>
									<label className='form-label' htmlFor='name'>
										Name
									</label>
									<input
										className='form-control'
										type='text'
										name='title'
										value={formData.title}
										id='name'
										onChange={handleChange}
									/>
								</div>
								<div className='form-row'>
									<label className='form-label' htmlFor='stock'>
										Stock
									</label>
									<input
										className='form-control'
										type='number'
										value={formData.inStock}
										name='inStock'
										id='stock'
										onChange={handleChange}
									/>
								</div>
								<div className='form-row'>
									<label className='form-label' htmlFor='status'>
										status
									</label>
									<input
										className='form-control'
										type='text'
										name='status'
										value={formData.status}
										id='status'
										onChange={handleChange}
									/>
								</div>
								<div className='form-row'>
									<label className='form-label' htmlFor='price'>
										price
									</label>
									<input
										className='form-control'
										type='number'
										name='price'
										value={formData.price}
										id='price'
										onChange={handleChange}
									/>
								</div>
								<div className='form-row'>
									<label className='form-label' htmlFor='desc'>
										Description
									</label>
									<textarea
										className='form-control form-control--textarea'
										name='desc'
										value={formData.desc}
										onChange={handleChange}
										id='desc'></textarea>
								</div>
								<div className='form-row'>
									<input className='btn form-submit' type='submit' value='update' />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>,
		document.body
	);
}
