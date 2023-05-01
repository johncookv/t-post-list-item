import React, { useState } from "react";

function PostCreate({createPost, setPosts}) {
  const [type, setType] = useState("Text");
  const [content, setContent] = useState("");
  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

  // For the tests to pass, the form below must have:
  // - a `name="create"` attribute
  // - one child `<button>` with a `type="submit"` attribute
  // - one child `<select>` with a `name="type"` attribute
  // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"` 

  const handleTypeChange = (event) => setType(event.target.value)

  const handleContentChange = (event) => setContent(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    createPost({content});
    setContent("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select 
            id="type" 
            name="type" 
            required={true} 
            onChange={handleTypeChange}
            value={type}
          >
            <option>Text</option>
            <option>Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea 
              id="content" 
              name="content" 
              required={true} 
              rows={3} 
              onChange={handleContentChange}
              value={content}
            />
          ) : (
            <input 
              id="content" 
              name="content" 
              type="url" 
              required={true} 
              onChange={handleContentChange}
              value={content}
            />
          )}
        </div>
        <div>
          <button type="submit" >Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
