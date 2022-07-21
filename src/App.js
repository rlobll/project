import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./component/Blogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blogs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
