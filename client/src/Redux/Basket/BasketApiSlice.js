import  apiSlice  from "../apiSlice";

const basketApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getBasket: build.query({
      query: () => ({
        url: '/api/basket',
        method: "GET",
      }),
      providesTags:["basket"]
    }),

    addBasket: build.mutation({
      query: (productData) => ({
        url: "api/basket/add",
        method: "POST",
        body: productData,
      }),
      invalidatesTags:["basket"]

    }),

  deleteBasket:build.mutation({
    query:(_id)=>({
      url: `api/basket/delete/${_id}`,
      method:"DELETE"
    }),
    invalidatesTags:["basket"]

    
  }) 
  }),
});

export const {
  useGetBasketQuery,
  useAddBasketMutation,
  useDeleteBasketMutation
} = basketApiSlice;

export default basketApiSlice;