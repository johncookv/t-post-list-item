import React from "react";

function PostListItem({ post }) {
  // there are a couple of ways to check if post.content is a url; I'm using the suggestion here:
  // https://stackoverflow.com/a/43467144
  // another simpler way would be to check if 'http' is found at the beginning of the string
  const postContent = post.content;
  let url;
  try {
    url = new URL(post.content);
  } catch {
    url = false;
  }
  const item = url ? (
    <img alt={postContent} src={postContent} />
  ) : (
    <p>{postContent}</p>
  );
  return <div>{item}</div>;
}

export default PostListItem;
