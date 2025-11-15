import apiSlice from "../../Redux/apiSlice"
const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        url: '/api/products',
        method: "GET",
      }),
      providesTags: ["products"]
    }),

    addProduct: build.mutation({
      query: (productData) => ({
        url: "api/products/add",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["products"]
    }),

    getProductById: build.query({
      query: (id) => ({
        url: `/api/products/id/${id}`,
        method: "GET",
      }),
    }),

    deleteProduct: build.mutation({
      query: (_id) => ({
        url: `/api/products/delete/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"]
    }),
    updateProduct: build.mutation({
      query: (product) => ({
        url: `/api/products/update/${product.id}`,
        method: "PUT",
        body: product
      }),
      invalidatesTags: ["products"]
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useLazyGetProductByIdQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApiSlice;

export default productsApiSlice;