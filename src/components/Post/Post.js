import React from "react";
import "./Post.scss";

const Post = (props) => {
  return (
    <div className="post">
      <h2 className="post-title">{props.title}</h2>
      <a className="post-link" href={props.link}>
        {props.link}
      </a>
      <div className="post-text">{props.text}</div>
      <button onClick={props.deletePost}>Delete</button>
    </div>
  );
};

export default Post;
