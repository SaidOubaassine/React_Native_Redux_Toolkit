import { fetchComments } from "../reducers/comments";
import Comment from "../../model/Comment";

export const getComments = (id) => {
    return async (dispatch) => {
      try {
        const response = await fetch(
          `http://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        if (!response.ok) {
          throw new Error(
            "Something went wrong with fetching the data from the server!"
          );
        }
        const resData = await response.json();
        const loadedComments = [];
        for(const key in resData){
          loadedComments.push(
            new Comment(
              resData[key].postId,
              resData[key].id,
              resData[key].name,
              resData[key].name,
              resData[key].email,
              resData[key].body
              )
          )
        }
       dispatch(fetchComments(loadedComments));
      } catch (err) {
        throw err;
      }
    };
  };