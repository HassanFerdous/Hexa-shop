import { useState } from 'react';

export default function useModal() {
	const [isShowing, setIsShowing] = useState(true);

	function toggle() {
		setIsShowing(!isShowing);
	}

	return { isShowing, toggle };
}
