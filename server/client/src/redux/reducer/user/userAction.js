export const setAuthenticatedUser = (token) => {
	localStorage.setItem('access_token', JSON.stringify(token));
	return {
		type: 'SET_USER',
		payload: token,
	};
};
