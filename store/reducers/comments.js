import { createSlice } from "@reduxjs/toolkit";
import Comment from "../../model/Comment";

export const commentSlice = createSlice({
    name:"comments",
    initialState:{
        comments: [],
    },
    reducers:{
        fetchComments : (state, action) => {
            state.comments = action.payload
        },
    }
});

export const {fetchComments} = commentSlice.actions;

export default commentSlice.reducer;