import { fetchPosts } from "../reducers/posts";
import Post from "../../model/Post";

export const getPosts = () => {
    return async (dispatch) => {
      try {
        const response = await fetch(
          'http://jsonplaceholder.typicode.com/posts'
        );
        if (!response.ok) {
          throw new Error(
            "Something went wrong with fetching the data from the server!"
          );
        }
        const resData = await response.json();
        const loadedPosts = [];
        for (const key in resData) {
          loadedPosts.push(
            new Post(
              resData[key].userId,
              resData[key].id,
              resData[key].title,
              resData[key].body,
              resData[key].body.replace(/\s+/g, '').length
            )
          );
        }
       dispatch(fetchPosts(loadedPosts));
      } catch (err) {
        throw err;
      }
    };
  };

  