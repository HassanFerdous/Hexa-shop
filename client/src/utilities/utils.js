export const addCartItem = (cartItems, item) => {
	const existItem = cartItems.find((i) => i._id === item._id);
	if (!existItem) {
		return [...cartItems, { ...item, quantity: 1 }];
	}

	return cartItems.map((i) => (i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i));
};

export const incrementQuantity = (cartItems, id) => {
	const existItem = cartItems.find((i) => i._id === id);
	if (existItem) {
		return cartItems.map((i) => (i._id === id ? { ...i, quantity: i.quantity + 1 } : i));
	}
};

export const decrementQuantity = (cartItems, id) => {
	const existItem = cartItems.find((i) => i._id === id);
	if (existItem && existItem.quantity > 1) {
		return cartItems.map((i) => (i._id === id ? { ...i, quantity: i.quantity - 1 } : i));
	} else {
		return cartItems.filter((i) => i._id !== id);
	}
};

export const countTotalPrice = (cartItems) => {
	return cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
};

//Fetch Data from Api
export const fetchData = async (url) => {
	try {
		let response = await fetch(url);
		let result = await response.json();
		return result;
	} catch (err) {
		console.log(err.message);
	}
};

//post data
export const postData = async (url, options) => {
	try {
		let response = await fetch(url, options);
		let result = await response.json();
		return result;
	} catch (err) {
		console.log(err.message);
	}
};

//get cookie
export const getCookieValue = (name) => {
	return document.cookie
		.split('; ')
		.find((row) => row.startsWith(`${name}=`))
		.split('=')[1];
};
