import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);

  // TODO: Add the ability for the <PostCreate /> component to create new posts.
  //CHECK
  // TODO: Add the ability for the <PostList /> component to delete an existing post.
  //CHECK

  const createPost = (newPost) =>
    setPosts ((currentPosts) => [
      newPost,
      ... currentPosts,
    ]);
  
  const deletePost = (indexToDelete) => {
    setPosts((currentPosts) => 
      currentPosts.filter((posted, index) =>
      index !== indexToDelete));
  };

  return (
    <div className="App">
      <PostCreate createPost={createPost} setPosts={setPosts} />
      <PostList 
        posts={posts}
        deletePost={deletePost}
      />
    </div>
  );
}

export default App;
