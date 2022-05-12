const access_token = JSON.parse(localStorage.getItem('access_token'));
export default function userReducer(state = { access_token }, action) {
	switch (action.type) {
		case 'SET_USER':
			return (state = { ...state, access_token: action.payload });
		default:
			return state;
	}
}
