import { Dispatch, AnyAction } from "redux";
import axios from "axios";
import { setFetchPost } from "./types/post";

export const getAllPosts = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(res => {
        console.log("called.");
        dispatch(setFetchPost(res.data));
      })
      .catch(err => console.log(err));
  };
};
