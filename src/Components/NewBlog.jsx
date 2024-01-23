import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
export default function NewBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const [allBlogs, setAllBlogs] = useLocalStorage("blogs");
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((title, description, content !== "")) {
      allBlogs
        ? setAllBlogs((prevBlogs) => [
            ...prevBlogs,
            {
              title: title,
              description: description,
              content: content,
              id: crypto.randomUUID(),
            },
          ])
        : setAllBlogs([
            {
              title: title,
              description: description,
              content: content,
              id: crypto.randomUUID(),
            },
          ]);
    }

    setTitle("");
    setDescription("");
    setContent("");
  };
  console.log(allBlogs);
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center flex-col w-1/4 align-middle"
        >
          <label className=" mt-5">Title:</label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
          />
          <label className=" mt-5">Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
          />
          <label className=" mt-5">Content:</label>
          <textarea
            name="content"
            id="con"
            cols="30"
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
