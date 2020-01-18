import { PostState } from "../../reducers/types/Post";

export const FETCH_POST = "@posts/FETCH_POST";

export type FetchPost = {
  type: typeof FETCH_POST;
  payload: PostState[];
};

export const setFetchPost = (posts: PostState[]) => {
  return {
    type: FETCH_POST,
    payload: posts
  };
};
