import { connect } from "react-redux";
import { StoreState } from "../store/storetypes";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { getAllPosts } from "../actions/post";
import { PostState } from "../reducers/types/Post";

export interface MapDispatchToProps {
  getAllPosts: () => void;
}

const mapDispatchToState = (
  dispatch: ThunkDispatch<StoreState, null, Action>
): MapDispatchToProps => {
  return {
    getAllPosts: () => dispatch(getAllPosts())
  };
};

export interface MapStateToProps {
  posts: PostState[];
}

const mapStateToProps = (state: StoreState): MapStateToProps => {
  return {
    posts: state.posts
  };
};

export const container = connect(mapStateToProps, mapDispatchToState);
export default container;
