import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "./components/Post/Post";
import CreatePost from "./components/CreatePost/CreatePost";
import "./App.scss";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios(
        "https://share-it-620ef.firebaseio.com/posts.json"
      );
      let fetchedPosts = [];
      for (let key in response.data) {
        fetchedPosts.push({
          ...response.data[key],
          id: key,
        });
      }
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);
  const createNewPost = (newPost) => {
    let updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
  };
  const openExpand = () => {
    setExpand(true);
  };
  const closeExpand = () => {
    setExpand(false);
  };

  return (
    <div className="main">
      {expand ? (
        <CreatePost createNewPost={createNewPost} closeExpand={closeExpand} />
      ) : (
        <div className="expand" onClick={openExpand}>
          Create New Post
        </div>
      )}
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            text={post.text}
            link={post.link}
          />
        );
      })}
    </div>
  );
};

export default App;
