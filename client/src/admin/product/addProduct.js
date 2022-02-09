import { createPortal } from 'react-dom';
import { useState } from 'react';

export default function AddProductModal({ setNewProductModal }) {
	const [formValue, setFormFormValue] = useState({
		title: '',
		inStock: '',
		status: '',
		price: '',
		desc: '',
	});

	const closeModal = () => {
		setNewProductModal(false);
	};

	const handleChange = (e) => setFormFormValue((data) => (data = { ...data, [e.target.name]: e.target.value }));

	const handleSubmit = async (e) => {
		e.preventDefault();
		let file = e.target.querySelector('[name="img"');

		let formData = new FormData();
		formData.append('title', formValue.title);
		formData.append('inStock', formValue.inStock);
		formData.append('status', formValue.status);
		formData.append('price', formValue.price);
		formData.append('desc', formValue.desc);
		formData.append('img', file.files[0]);

		fetch('http://localhost:5000/products', {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err.message));

		closeModal();
		window.location.reload();
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
							<form className='form' onSubmit={handleSubmit} encType='multipart/form-data'>
								<div className='form-row'>
									<label className='form-label' htmlFor='name'>
										Name
									</label>
									<input
										className='form-control'
										type='text'
										name='title'
										value={formValue.title}
										id='name'
										onChange={handleChange}
										required
									/>
								</div>
								<div className='form-row'>
									<label className='form-label' htmlFor='stock'>
										Stock
									</label>
									<input
										className='form-control'
										type='number'
										value={formValue.inStock}
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
										value={formValue.status}
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
										value={formValue.price}
										id='price'
										onChange={handleChange}
										required
									/>
								</div>
								<div className='form-row'>
									<label className='form-label' htmlFor='desc'>
										Description
									</label>
									<textarea
										className='form-control form-control--textarea'
										name='desc'
										value={formValue.desc}
										onChange={handleChange}
										id='desc'
										required></textarea>
								</div>
								<div className='form-row'>
									<label className='form-label' htmlFor='img'>
										Upload Image
									</label>
									<input
										className='form-control'
										name='img'
										// value={formValue.img}
										onChange={handleChange}
										type='file'
										id='img'
									/>
								</div>
								<div className='form-row'>
									<input className='btn form-submit' type='submit' value='Add' />
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
