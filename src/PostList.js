import React from "react";
import PostListItem from "./PostListItem";

function PostList({ posts, deletePost }) {
  // TODO: Diplay the list of posts.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // The given class name was "post-list"
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const list = posts.map((entry, index) => (
    <div className="post">
      <PostListItem key={index} post={entry} />
      <button name="delete" onClick={() => deletePost(index)}>
        Delete
      </button>
    </div>
  ));
  return <div>{list}</div>;
}

export default PostList;
