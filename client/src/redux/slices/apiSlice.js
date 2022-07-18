import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const hexaApi = createApi({
	reducerPath: 'hexaApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
	endpoints: (builder) => ({
		getProduct: builder.query({
			query: () => `products`,
		}),
		getProductById: builder.query({
			query: (id) => `products/${id}`,
		}),
	}),
});

export const { useGetProductQuery, useGetProductByIdQuery } = hexaApi;
export default hexaApi;
