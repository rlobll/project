import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Blogs() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = () => {
    axios.post("http://localhost:3000/posts", {
      title,
      body,
    });
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/blogs">Blogs</Link>
      <>
        <div className="container">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              className="form-control"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea
              className="form-control"
              value={body}
              onChange={(event) => {
                setBody(event.target.value);
              }}
              rows=""
            />
          </div>
          <button className="btn btn-primary" onClick={onSubmit}>
            Post
          </button>
        </div>
      </>
    </div>
  );
}
