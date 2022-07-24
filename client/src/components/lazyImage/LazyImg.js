import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyImg = ({ image }) => (
	<div>
		<LazyLoadImage
			src={image.src} // use normal <img> attributes as props
			height={image.height}
			width={image.width}
			alt={image.alt}
			effect='opacity'
		/>
		<span>{image.caption}</span>
	</div>
);

export default LazyImg;
