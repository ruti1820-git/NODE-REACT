
import { apiSlice } from "../../app/apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: '/api/users',
        method: "GET",
      }),
    }),

    addUser: build.mutation({
      query: (userData) => ({
        url: "api/user/add",
        method: "POST",
        body: userData,
      }),
    }),

    getUserById: build.query({
      query: (id) => ({
        url: `/api/user/id/${id}`,
        method: "GET",
      }),
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `/api/user/delete/${id}`,
        method: "DELETE", 
      }),
    }),
  }), 
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useGetUserByIdQuery,
  useDeleteUserMutation,
} = userApiSlice;

export default userApiSlice;