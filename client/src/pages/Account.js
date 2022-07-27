import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../redux/slices/authSlice';

function Account() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logOut());
		navigate('/', { replace: true });
	};

	const { currentUser } = useSelector((state) => state.user);

	return (
		<div className='account'>
			<div className='account__inner'>
				<div className='account__header'>
					<h6 className='account__user'>{currentUser?.username}</h6>
					<button className='btn btn-outline-black logout-btn' onClick={handleLogout}>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
}

export default Account;
