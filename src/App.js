import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
// import Blogs from "./component/Blogs";
import BlogForm from "./component/BlogForm";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/blog_form"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div path="/" exact="">
          Home Page
        </div>
      </div>
      <Routes>
        {/* <Route path="/" element={<Blogs />}></Route> */}
        <Route path="/blog_form" element={<BlogForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
