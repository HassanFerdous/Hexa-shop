import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const hexaApi = createApi({
	reducerPath: 'hexaApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
	tagTypes: ['Product', 'User'],

	endpoints: (builder) => ({
		getProduct: builder.query({
			query: () => `products`,
			providesTags: ['Product'],
		}),
		getProductById: builder.query({
			query: (id) => `products/${id}`,
			providesTags: ['Product'],
		}),
		addProduct: builder.mutation({
			query: (body) => ({
				url: '/products/new',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Product'],
		}),

		deleteProduct: builder.mutation({
			query: (id) => ({
				url: `/products/${id}`,
				method: 'DELETE',
				id,
			}),
			invalidatesTags: ['Product'],
		}),
		getAllUser: builder.query({
			query: () => 'users',
			providesTags: ['User'],
		}),
	}),
});

export const {
	useGetProductQuery,
	useGetProductByIdQuery,
	useGetAllUserQuery,
	useAddProductMutation,
	useDeleteProductMutation,
} = hexaApi;
export default hexaApi;
