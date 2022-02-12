import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import useModal from '../../hooks/modal';
import { useState } from 'react';
const LoginModal = ({ hideModal }) => {
	const { isShowing, toggle } = useModal();
	const [login, setLogin] = useState(false);

	const [loginFormData, setLoginFormData] = useState({
		email: '',
		password: '',
	});
	const [signUpFormData, setSignUpFormData] = useState({
		name: '',
		email: '',
		password: '',
		rePassword: '',
	});

	const toggleLogin = () => {
		setLogin(!login);
	};

	const handleChange = (e) => {
		setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
		setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
		console.log(signUpFormData);
	};

	return isShowing
		? createPortal(
				<div className='modal account-modal'>
					<div className='modal-table'>
						<div className='modal-table__cell'>
							<div className='modal__content'>
								<button
									className='modal__close'
									onClick={() => {
										toggle();
										hideModal();
									}}>
									<img src='/assets/svgs/close.svg' alt='' />
								</button>
								{login ? (
									<div className='modal__body'>
										<form action='#' className='form form-account'>
											<div className='form-row'>
												<input
													type='name'
													className='form-control'
													placeholder='User'
													name='name'
													onChange={handleChange}
													required
												/>
											</div>
											<div className='form-row'>
												<input
													type='email'
													className='form-control'
													placeholder='Email'
													name='email'
													onChange={handleChange}
													required
												/>
											</div>
											<div className='form-row'>
												<input
													type='password'
													className='form-control'
													placeholder='Password'
													name='password'
													onChange={handleChange}
													required
												/>
											</div>
											<div className='form-row'>
												<input
													type='password'
													className='form-control'
													placeholder='Repeat-password'
													name='rePassword'
													onChange={handleChange}
													required
												/>
											</div>
											<div className='form-row'>
												<button type='submit' className='form-submit'>
													Sign-up
												</button>
											</div>
											<p className='text-center'>
												Already have an account.
												<Link to='#' onClick={toggleLogin}>
													Sign-in
												</Link>
											</p>
										</form>
									</div>
								) : (
									<div className='modal__body'>
										<form action='#' className='form form-account'>
											<div className='form-row'>
												<input
													type='email'
													className='form-control'
													placeholder='Email'
													name='email'
													onChange={handleChange}
													required
												/>
											</div>
											<div className='form-row'>
												<input
													type='email'
													className='form-control'
													placeholder='Password'
													name='password'
													onChange={handleChange}
													required
												/>
											</div>
											<div className='form-row'>
												<button type='submit' className='form-submit'>
													Sign-in
												</button>
											</div>
											<p className='text-center'>
												Don't have an account. Create a
												<Link to='#' onClick={toggleLogin}>
													new account
												</Link>
											</p>
										</form>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>,
				document.body
		  )
		: null;
};

export default LoginModal;
