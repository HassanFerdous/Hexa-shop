import { Link } from 'react-router-dom';
import useModal from '../../hooks/modal';
import { useCallback, useState } from 'react';
import { postData } from '../../utilities/utils';
import { useDispatch } from 'react-redux';
import { setAuthenticatedUser } from '../../redux/reducer/user/userAction';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ hideModal }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	//state
	const { toggle } = useModal();
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

	const handleChange = useCallback(
		(e) => {
			if (!login) {
				setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
				return;
			}
			setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
		},
		[loginFormData, signUpFormData, login]
	);

	const handleSignup = async (e) => {
		e.preventDefault();
		if (signUpFormData.password === signUpFormData.rePassword) {
			await postData('http://localhost:5000/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(signUpFormData),
			});
			setSignUpFormData({ name: '', email: '', password: '', rePassword: '' });
			navigate('/account', { replace: true });
			hideModal();
		} else {
			console.log('password not matched');
		}
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			let response = await postData('http://localhost:5000/signin', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(loginFormData),
			});

			if (response.token) {
				dispatch(setAuthenticatedUser(response.token));
				setLoginFormData({ email: '', password: '' });
				navigate('/account', { replace: true });
				hideModal();
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
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
											value={signUpFormData.name}
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
											value={signUpFormData.email}
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
											value={signUpFormData.password}
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
											value={signUpFormData.rePassword}
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
											value={loginFormData.email}
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
											value={loginFormData.password}
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
		</div>
	);
};

export default LoginModal;
