import React from 'react';
import { useGetAllUserQuery } from '../../redux/slices/apiSlice';
import { Link } from 'react-router-dom';
function Clients() {
	const { data, isError, isLoading, isSuccess } = useGetAllUserQuery();
	return (
		<div className='container-fluid pt-4 px-4'>
			<div className='bg-light text-center rounded p-4'>
				<div className='d-flex align-items-center justify-content-between mb-4'>
					<h6 className='mb-0'>Clients</h6>
				</div>
				{isLoading && <h1>Loading</h1>}
				{isError && <h1>Something went wrong</h1>}
				{isSuccess && (
					<div className='table-responsive'>
						<table className='table text-start align-middle table-bordered table-hover mb-0'>
							<thead>
								<tr className='text-dark'>
									<th scope='col'>#</th>
									<th scope='col'>Name</th>
									<th scope='col'>Email</th>
									<th scope='col'>User type</th>
									<th scope='col' style={{ width: '80px' }}>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{data.users.map((user) => (
									<tr key={user._id}>
										<td className='d-flex align-items-center justify-content-center'>
											<img
												style={{ width: '40px', height: '40px' }}
												src='/assets/images/profile.png'
												alt=''
											/>
										</td>
										<td>{user.username}</td>
										<td>{user.email}</td>
										<td>{user.isAdmin ? 'admin' : 'normal'}</td>
										<td>
											<Link className='btn btn-sm btn-primary btn-danger' to='#'>
												Delete
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
}

export default Clients;
