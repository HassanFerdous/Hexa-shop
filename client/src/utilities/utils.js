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
