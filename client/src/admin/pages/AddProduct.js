import React, { useState } from 'react';
import { useAddProductMutation } from '../../redux/slices/apiSlice';
import '../style/bootstrap.min.css';

export default function AddProduct({ showModal }) {
	const [addProduct] = useAddProductMutation();

	const [formData, setFormData] = useState({
		title: '',
		description: '',
		price: '',
		color: '',
		category: '',
		size: '',
		inStock: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		let data = new FormData();
		for (let [key, value] of Object.entries(formData)) {
			// console.log(key, '=', value);
			data.append(key, value);
		}

		try {
			await addProduct(data);
			setFormData((prev) => {
				for (let [key] of Object.entries(prev)) {
					if (key === 'img') return;
					prev[key] = '';
				}
			});
		} catch (err) {
			console.log(err);
		}
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className='new-product-modal'>
			<form encType='multipart/form-data' style={{ padding: '20px' }} onSubmit={handleSubmit}>
				<h2 className='m-2'>New Product</h2>
				<input className='m-2 form-control' type='text' onChange={handleChange} name='title' placeholder='Title' />
				<input
					className='m-2 form-control'
					type='text'
					onChange={handleChange}
					name='desc'
					placeholder='description'
				/>
				<input
					className='m-2 form-control'
					type='file'
					onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
					name='img'
					placeholder='img'
					// value={formData?.img}
				/>
				<input
					className='m-2 form-control'
					type='number'
					onChange={handleChange}
					name='price'
					placeholder='price'
				/>

				<input className='m-2 form-control' type='text' onChange={handleChange} name='color' placeholder='Colors' />
				<input
					className='m-2 form-control'
					type='text'
					onChange={handleChange}
					name='category'
					placeholder='Categories'
				/>
				<input className='m-2 form-control' type='text' onChange={handleChange} name='size' placeholder='Sizes' />

				<input
					className='m-2 form-control'
					type='text'
					onChange={handleChange}
					name='inStock'
					placeholder='InStock'
				/>
				<div className='text-left form-group' style={{ textAlign: 'left' }}>
					<input className='m-2 btn btn-primary' type='submit' value='ADD PRODUCT' />
					<button
						className='m-2 btn btn-danger'
						type='button'
						value='ADD PRODUCT'
						onClick={() => showModal(false)}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

// let a = [
// 	{
// 		title: 'Mens Casual Premium Slim Fit T-Shirts ',
// 		price: 22.3,
// 		description:
// 			'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
// 		category: "men's clothing",
// 		image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
// 		rating: { rate: 4.1, count: 259 },
// 	},
// 	{
// 		title: 'Mens Cotton Jacket',
// 		price: 55.99,
// 		description:
// 			'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
// 		category: "men's clothing",
// 		image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
// 		rating: { rate: 4.7, count: 500 },
// 	},
// 	{
// 		title: 'Mens Casual Slim Fit',
// 		price: 15.99,
// 		description:
// 			'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
// 		category: "men's clothing",
// 		image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
// 		rating: { rate: 2.1, count: 430 },
// 	},

// 	{
// 		title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
// 		price: 56.99,
// 		description:
// 			'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
// 		category: "women's clothing",
// 		image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
// 		rating: { rate: 2.6, count: 235 },
// 	},
// 	{
// 		title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
// 		price: 29.95,
// 		description:
// 			'100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
// 		category: "women's clothing",
// 		image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
// 		rating: { rate: 2.9, count: 340 },
// 	},
// 	{
// 		title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
// 		price: 39.99,
// 		description:
// 			"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
// 		category: "women's clothing",
// 		image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
// 		rating: { rate: 3.8, count: 679 },
// 	},
// 	{
// 		title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
// 		price: 9.85,
// 		description:
// 			'95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
// 		category: "women's clothing",
// 		image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
// 		rating: { rate: 4.7, count: 130 },
// 	},
// 	{
// 		title: "Opna Women's Short Sleeve Moisture",
// 		price: 7.95,
// 		description:
// 			'100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
// 		category: "women's clothing",
// 		image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
// 		rating: { rate: 4.5, count: 146 },
// 	},
// 	{
// 		title: 'DANVOUY Womens T Shirt Casual Cotton Short',
// 		price: 12.99,
// 		description:
// 			'95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
// 		category: "women's clothing",
// 		image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
// 		rating: { rate: 3.6, count: 145 },
// 	},
// ];
