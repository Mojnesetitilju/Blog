import { useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

export default function EditBlog({ props, toSwitch }) {
  const { id, title, description, content } = props;
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newContent, setNewContent] = useState(content);
  const [savedBlogs, setSavedBlog] = useLocalStorage("blogs");
  //const [editedBlog, setEditedBlog] = useState();
  const index = savedBlogs.findIndex((obj) => obj.id === id);

  function handleSubmit(e) {
    e.preventDefault();
    const editedBlog = {
      title: newTitle,
      description: newDescription,
      content: newContent,
      id: id,
    };

    const newArray = [...savedBlogs];
    newArray[index] = editedBlog;
    toSwitch(false, newArray);
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col w-1/4 align-middle"
      >
        <label htmlFor="title">Title:</label>

        <input
          id="title"
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter Title"
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Enter Description"
        />
        <label htmlFor="content">Content:</label>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        ></textarea>

        <button type="submit" className="btn btn-outline btn-warning">
          Save
        </button>
      </form>
    </div>
  );
}
