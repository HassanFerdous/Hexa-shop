export const setAuthenticatedUser = (user) => {
	localStorage.setItem('user', JSON.stringify(user));
	return {
		type: 'SET_USER',
		payload: user,
	};
};
