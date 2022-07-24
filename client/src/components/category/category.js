// Import Swiper React components
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Card from '../card/card';
import { useGetProductQuery } from '../../redux/slices/apiSlice';

SwiperCore.use([Navigation]);

export default function CategorySlider({ category, title, desc }) {
	const navPrevRef = useRef(null);
	const navNextRef = useRef(null);

	const { data, isLoading, isSuccess } = useGetProductQuery();

	return (
		<div className='category'>
			<div className='container'>
				<div className='category__head'>
					<h2 className='category__title'>{title}</h2>
					<p className='category__desc'>{desc}</p>
				</div>

				<div className='category-carousel'>
					<div className='category-nav'>
						<button ref={navPrevRef} className='category-nav__prev'>
							<img src='/assets/svgs/angle-left.svg' alt='' />
						</button>
						<button ref={navNextRef} className='category-nav__next'>
							<img src='/assets/svgs/angle-right.svg' alt='' />
						</button>
					</div>
					{isLoading && <h1>Loading...</h1>}

					{isSuccess && (
						<Swiper
							spaceBetween={20}
							slidesPerView={1.3}
							loop={true}
							navigation={{
								prevEl: navPrevRef.current,
								nextEl: navNextRef.current,
							}}
							onBeforeInit={(swiper) => {
								swiper.params.navigation.prevEl = navPrevRef.current;
								swiper.params.navigation.nextEl = navNextRef.current;
							}}
							breakpoints={{
								576: {
									slidesPerView: 2,
								},
								992: {
									slidesPerView: 3,
								},
							}}>
							{data.products
								.map((product) => {
									return { ...product, category: product.category.split(',').map((item) => item.trim()) };
								})
								.filter((product) => product.category.indexOf(category) !== -1)
								.map(
									(categoryItem, idx) =>
										idx <= 5 && (
											<SwiperSlide key={idx}>
												<Card product={categoryItem} />
											</SwiperSlide>
										)
								)}
						</Swiper>
					)}
				</div>
			</div>
		</div>
	);
}
