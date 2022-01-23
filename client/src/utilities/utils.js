export const getData = async (url) => {
	let data;
	try {
		const response = await fetch(url);
		data = await response.json();
	} catch (err) {
		console.log(err.message);
	}

	return data;
};
