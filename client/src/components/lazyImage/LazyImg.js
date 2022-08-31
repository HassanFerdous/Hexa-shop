import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import placeholder from './inkling_spinner.gif';
const LazyImg = ({ image }) => (
	<div>
		<LazyLoadImage
			src={image.src} // use normal <img> attributes as props
			height={image.height}
			width={image.width}
			alt={image.alt}
			effect='blur'
			delayTime={500}
			placeholderSrc={placeholder}
		/>
		<span>{image.caption}</span>
	</div>
);

export default LazyImg;
