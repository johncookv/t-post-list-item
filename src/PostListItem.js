import React from "react";

function PostListItem({ posts }) {
  return (
    <div>
      <li>{posts.content}</li>
    </div>
  );
}

export default PostListItem;
