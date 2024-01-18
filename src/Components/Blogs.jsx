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
  console.log(blogs);
  return (
    <>
      <Navbar />
      {forEditing && <EditBlog props={postToEdit} toSwitch={toSwitch} />}
      {blogs.length !== 0 ? (
        blogs.map((m) => {
          return (
            <div className="flex justify-center text-wrap mb-5">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body text-balance">
                  <h2 className="card-title">{m.title}</h2>
                  <h6 className="card-title">{m.description}</h6>
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
