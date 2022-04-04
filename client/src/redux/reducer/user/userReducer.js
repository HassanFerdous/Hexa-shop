const authenticatedUser = JSON.parse(localStorage.getItem('user'));
export default function userReducer(state = { authenticatedUser }, action) {
	switch (action.type) {
		case 'SET_USER':
			return (state = { ...state, authenticatedUser: action.payload });
		default:
			return state;
	}
}
