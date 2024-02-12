import { createSlice } from "@reduxjs/toolkit";


export const postSlice = createSlice({
    name:"posts",
    initialState:{
        posts: [],
    },
    reducers:{
        fetchPosts : (state, action) => {
            state.posts = action.payload;
        },
        deletePost : (state, action) => {
            const removeFromPosts = state.posts.filter((item) => item.id !== action.payload);
            state.posts = removeFromPosts;
        }
    }
});


export const {fetchPosts, deletePost} = postSlice.actions;

export default postSlice.reducer;