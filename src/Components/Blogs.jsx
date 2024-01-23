import Navbar from "./Navbar";
import Footer from "./Footer";
import EditBlog from "./EditBlog";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Blogs() {
  const [blogs, setBlogs] = useLocalStorage("blogs");
  const [postToEdit, setPostToEdit] = useState();
  const [forEditing, setForEditing] = useState(false);

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  function editBlog(m) {
    setPostToEdit(m);

    setForEditing(true);
  }
  function toSwitch(p, array) {
    setForEditing(p);
    setBlogs(array);
  }

  return (
    <>
      <Navbar />
      {forEditing && <EditBlog props={postToEdit} toSwitch={toSwitch} />}
      {blogs ? (
        blogs.map((m) => {
          return (
            <div className="flex justify-center text-wrap mb-5">
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="card-body text-balance">
                  <h1 className="card-title text-4xl break-words">{m.title}</h1>
                  <h2 className="card-title text-2xl ">{m.description}</h2>
                  <p className=" break-words">{m.content}</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      onClick={() => deleteBlog(m.id)}
                    >
                      Delete Blog
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => editBlog(m)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex justify-center mt-24">
          <Link to="/NewBlog">
            <button className="btn btn-primary">Create New Blog</button>
          </Link>
        </div>
      )}

      <Footer />
    </>
  );
}
