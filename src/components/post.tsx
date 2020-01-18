import React, { Component } from "react";

import { PostState } from "../reducers/types/Post";

import container, { MapStateToProps, MapDispatchToProps } from "./container";

export type InitialPostState = {
  posts: Array<PostState>;
};

export const initialPostValue: InitialPostState = {
  posts: []
};

export type PostProps = MapDispatchToProps & MapStateToProps;

export class Post extends Component<PostProps, InitialPostState> {
  constructor(props: PostProps) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    const { posts } = this.props;
    console.log("posts ", posts);
    console.log("post length", posts.length);

    return (
      <div>
        {this.props.posts.length > 1 ? (
          <div>
            {this.props.posts.map((p: PostState) => {
              return (
                <div key={p.id} className="postDiv">
                  <div>Title: {p.title}</div>
                  <div>{`Body ${p.body}`}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>loading.........</div>
        )}
      </div>
    );
  }
}

export default container(Post);
