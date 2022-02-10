import { useEffect, useState } from 'react';

export default function useFetch(url) {
	const [data, setData] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				let response = await fetch(url);
				let result = await response.json();
				setData(result);
			} catch (err) {
				console.log(err.message);
			}
		})();

		return () => {};
	}, [url]);

	return data;
}
