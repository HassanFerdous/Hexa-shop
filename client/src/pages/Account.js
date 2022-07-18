import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../utilities/utils';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Account() {
	const [user, setUser] = useState(null);
	let navigate = useNavigate();
	const dispatch = useDispatch();
	const { access_token } = useSelector((state) => state.user);

	useEffect(() => {
		try {
			const decode = jwt_decode(access_token);
			(async function () {
				let response = await fetchData(`http://localhost:5000/account/${decode.user_id}`, {
					headers: {
						'x-access-token': access_token,
					},
				});
				setUser(response.user);
			})();
		} catch (error) {
			navigate('/', { replace: true });
			return;
		}
	}, [access_token, navigate]);

	const handleLogout = (e) => {
		e.preventDefault();
		navigate('/', { replace: true });
		localStorage.removeItem('access_token');
	};

	return (
		<div className='account'>
			<div className='account__inner'>
				<div className='account__header'>
					<h6 className='account__user'>{user?.name}</h6>
					<button className='btn btn-outline-black logout-btn' onClick={handleLogout}>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
}

export default Account;
