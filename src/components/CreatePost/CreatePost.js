import React, { useState } from "react";
import axios from "axios";
import "./CreatePost.scss";

const CreatePost = (props) => {
  const initialState = {
    title: "",
    text: "",
    link: "",
    id: "",
  };
  const [newPost, setNewPost] = useState(initialState);

  const handleChange = (event) => {
    const newPostData = {
      ...newPost,
      [event.target.name]: event.target.value,
      id: event.target.name === "title" ? event.target.value : newPost.id,
    };
    setNewPost(newPostData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newPost);
    props.createNewPost(newPost);
    axios
      .post("https://share-it-620ef.firebaseio.com/posts.json", newPost)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setNewPost(initialState);
    props.closeExpand();
  };

  return (
    <div className="new-post-container">
      <div className="new-post-close" onClick={props.closeExpand}></div>
      <div className="new-post">
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            className="new-post-input"
            type="text"
            name="title"
            onChange={handleChange}
            value={newPost.title}
            required
          />
          <label>Link</label>
          <input
            className="new-post-input"
            type="text"
            name="link"
            onChange={handleChange}
            value={newPost.link}
            required
          />
          <label>Text</label>
          <textarea
            className="new-post-input"
            type="textarea"
            name="text"
            onChange={handleChange}
            value={newPost.text}
            required
          />
          <input className="new-post-submit" type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
