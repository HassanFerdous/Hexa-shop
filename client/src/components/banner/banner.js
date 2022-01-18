export default function Banner({ bgUrl, title, desc }) {
	return (
		<section className='banner'>
			<div className='banner__bg'>
				<img src={bgUrl} alt='products' />
			</div>
			<div className='banner__content'>
				<div className='container'>
					<h2 className='banner__title'>{title}</h2>
					<p className='banner__desc'>{desc}</p>
				</div>
			</div>
		</section>
	);
}
