import React, { useState } from 'react';
import './style/bootstrap.min.css';
import './style/style.css';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { useRegisterMutation, useSignInMutation } from '../redux/slices/apiSlice';

function LoginAdmin() {
	let [userExist, setUserExist] = useState(true);
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});
	const [registerData, setRegisterData] = useState({
		username: '',
		email: '',
		password: '',
	});
	const navigate = useNavigate();

	const [signIn] = useSignInMutation();
	const [register] = useRegisterMutation();

	const handleChange = (type, target) => {
		if (type === 'login') {
			setLoginData({ ...loginData, [target.name]: target.value });
		} else if (type === 'register') {
			setRegisterData({ ...registerData, [target.name]: target.value });
		}
	};

	const clearInputs = () => {
		setLoginData({
			email: '',
			password: '',
		});
		setRegisterData({
			username: '',
			email: '',
			password: '',
		});
	};

	const redirectToPage = (isAdmin) => {
		if (isAdmin) {
			navigate('/admin', { replace: true });
		} else {
			navigate('/account', { replace: true });
		}
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			let { user } = await signIn(loginData).unwrap();
			clearInputs();
			redirectToPage(user.isAdmin);
		} catch (error) {
			console.log(error);
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			let { user } = await register(registerData).unwrap();
			clearInputs();
			redirectToPage(user.isAdmin);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className='admin-login'>
			<div className='container-fluid'>
				{userExist ? (
					<div className='row h-100 align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
						<div className='col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4'>
							<div className='bg-light rounded p-4 p-sm-5 my-4 mx-3'>
								<div className='d-flex align-items-center justify-content-between mb-3'>
									<h3>Sign In</h3>
								</div>
								<form action='#' onSubmit={handleLogin}>
									<div className='form-floating mb-3'>
										<input
											type='email'
											className='form-control'
											id='floatingInput'
											placeholder='Email'
											name='email'
											value={loginData?.email}
											onChange={(e) => handleChange('login', e.target)}
										/>
										<label htmlFor='floatingInput'>Email</label>
									</div>
									<div className='form-floating mb-4'>
										<input
											type='password'
											className='form-control'
											id='floatingPassword'
											placeholder='Password'
											name='password'
											value={loginData?.password}
											onChange={(e) => handleChange('login', e.target)}
										/>
										<label htmlFor='floatingPassword'>Password</label>
									</div>
									<div className='d-flex align-items-center justify-content-between mb-4'>
										<div className='form-check'>
											<input type='checkbox' className='form-check-input' id='exampleCheck1' />
											<label className='form-check-label' htmlFor='exampleCheck1'>
												Check me out
											</label>
										</div>
										<Link to='#'>Forgot Password</Link>
									</div>
									<button type='submit' className='btn btn-primary py-3 w-100 mb-4'>
										Sign In
									</button>
								</form>
								<p className='text-center mb-0'>
									Don't have an Account?
									<Link
										className='text-underlined'
										to='#'
										onClick={(e) => {
											setUserExist(false);
											clearInputs(e);
										}}>
										Sign Up
									</Link>
								</p>
							</div>
						</div>
					</div>
				) : (
					<div className='row h-100 align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
						<div className='col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4'>
							<div className='bg-light rounded p-4 p-sm-5 my-4 mx-3'>
								<div className='d-flex align-items-center justify-content-between mb-3'>
									<h3>Sign Up</h3>
								</div>
								<form action='#' onSubmit={handleRegister}>
									<div className='form-floating mb-3'>
										<input
											type='text'
											className='form-control'
											id='floatingInput2'
											placeholder='Name'
											name='username'
											value={registerData?.username}
											onChange={(e) => handleChange('register', e.target)}
										/>
										<label htmlFor='floatingInput2'>Username</label>
									</div>
									<div className='form-floating mb-3'>
										<input
											type='email'
											className='form-control'
											id='floatingInput'
											placeholder='name@example.com'
											name='email'
											value={registerData?.email}
											onChange={(e) => handleChange('register', e.target)}
										/>
										<label htmlFor='floatingInput'>Email address</label>
									</div>
									<div className='form-floating mb-4'>
										<input
											type='password'
											className='form-control'
											id='floatingPassword'
											placeholder='Password'
											name='password'
											value={registerData?.password}
											onChange={(e) => handleChange('register', e.target)}
										/>
										<label htmlFor='floatingPassword'>Password</label>
									</div>
									<div className='d-flex align-items-center justify-content-between mb-4'>
										<div className='form-check'>
											<input type='checkbox' className='form-check-input' id='exampleCheck1' />
											<label className='form-check-label' htmlFor='exampleCheck1'>
												Check me out
											</label>
										</div>
										<Link to='#'>Forgot Password</Link>
									</div>
									<button type='submit' className='btn btn-primary py-3 w-100 mb-4'>
										Sign Up
									</button>
								</form>
								<p className='text-center mb-0'>
									Already have an Account?
									<Link
										className='text-underlined'
										to='#'
										onClick={(e) => {
											setUserExist(true);
											clearInputs(e);
										}}>
										Sign In
									</Link>
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default LoginAdmin;
