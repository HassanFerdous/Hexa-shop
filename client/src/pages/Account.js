function Account() {
	const handleLogout = (e) => {
		e.preventDefault();
	};

	return (
		<div className='account'>
			<div className='account__inner'>
				<div className='account__header'>
					<h6 className='account__user'>User name</h6>
					<button className='btn btn-outline-black logout-btn' onClick={handleLogout}>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
}

export default Account;
