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
				url: 'products/new',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Product'],
		}),

		deleteProduct: builder.mutation({
			query: (id) => ({
				url: `products/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Product'],
		}),
		updateProduct: builder.mutation({
			query: ({ id, data }) => ({
				url: `products/${id}`,
				method: 'PUT',
				body: data,
			}),
			invalidatesTags: ['Product'],
		}),

		//user
		getAllUser: builder.query({
			query: () => 'users',
			providesTags: ['User'],
		}),
		signIn: builder.mutation({
			query: (body) => ({
				url: 'signin',
				method: 'POST',
				body,
			}),
		}),
		register: builder.mutation({
			query: (body) => ({
				url: 'register',
				method: 'POST',
				body,
			}),
		}),
	}),
});

export const {
	useGetProductQuery,
	useGetProductByIdQuery,
	useGetAllUserQuery,
	useAddProductMutation,
	useDeleteProductMutation,
	useUpdateProductMutation,
	useSignInMutation,
	useRegisterMutation,
} = hexaApi;
export default hexaApi;
