import { combineReducers } from "redux";
import { postReducer as posts } from "./postReducer";

const rootReduer = combineReducers({
  posts
});

export default rootReduer;
