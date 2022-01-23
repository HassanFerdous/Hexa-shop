import { createPortal } from 'react-dom';

export default function EditProduct({ isOpen }) {
	const closeModal = () => {
		isOpen(false);
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
							<form action='#' className='form' method='PUT'>
								<div className='form-row'>
									<label className='form-label' htmlFor='name'>
										Name
									</label>
									<input className='form-control' type='text' name='name' id='name' />
								</div>
								<div className='form-row'>
									<label className='form-label' htmlFor='stock'>
										Stock
									</label>
									<input className='form-control' type='number' name='stock' id='stock' />
								</div>
								<div className='form-row'>
									<label className='form-label' htmlFor='status'>
										status
									</label>
									<input className='form-control' type='text' name='status' id='status' />
								</div>
								<div className='form-row'>
									<label className='form-label' htmlFor='price'>
										price
									</label>
									<input className='form-control' type='number' name='price' id='price' />
								</div>
								<div className='form-row'>
									<label className='form-label' htmlFor='desc'>
										Description
									</label>
									<textarea className='form-control form-control--textarea' name='desc' id='desc'></textarea>
								</div>
								<div className='form-row'>
									<input className='btn form-submit' type='submit' defaultValue='update' />
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
