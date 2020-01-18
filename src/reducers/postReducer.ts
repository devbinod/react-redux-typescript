import { PostState } from "./types/Post";
import { Dispatch, AnyAction } from "redux";
import { FETCH_POST } from "../actions/types/post";

export type InitialState = {
  posts: Array<PostState>;
};

const initialState: InitialState = {
  posts: []
};

export const postReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_POST:
      return action.payload;

    default:
      return state;
  }
};
