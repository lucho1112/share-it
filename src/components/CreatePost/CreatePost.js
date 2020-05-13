import React, { useState } from "react";
import axios from "axios";
import "./CreatePost.scss";

const CreatePost = (props) => {
  const initialState = {
    title: "",
    text: "",
    link: "",
  };
  const [newPost, setNewPost] = useState(initialState);

  const handleChange = (event) => {
    const newPostData = {
      ...newPost,
      [event.target.name]: event.target.value,
    };
    setNewPost(newPostData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createNewPost(newPost);
    props.closeExpand();
    setNewPost(initialState);
    axios
      .post("https://share-it-620ef.firebaseio.com/posts.json", newPost)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="new-post-container">
      <form onSubmit={handleSubmit} className="new-post">
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
  );
};

export default CreatePost;
