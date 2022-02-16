import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import useModal from '../../hooks/modal';
import { useState } from 'react';
import { postData } from '../../utilities/utils';
const LoginModal = ({ hideModal }) => {
	const { isShowing, toggle } = useModal();
	const [login, setLogin] = useState(true);

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
		if (!login) {
			setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
			return;
		}
		setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
	};

	const handleSignup = async (e) => {
		e.preventDefault();

		if (signUpFormData.password === signUpFormData.rePassword) {
			delete signUpFormData.rePassword;
			let result = await postData('http://localhost:5000/user/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(signUpFormData),
			});
			console.log(result);
		} else {
			console.log('password not matched');
		}
	};

	const handleLogin = (e) => {
		e.preventDefault();
		console.log('clicked');
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
										<form
											action='#'
											className='form form-account'
											encType='multipart/form-data'
											onSubmit={handleSignup}>
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
												<input className='btn form-submit' type='submit' value='Submit' />
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
										<form
											action='#'
											className='form form-account'
											encType='multipart/form-data'
											onSubmit={handleLogin}>
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
