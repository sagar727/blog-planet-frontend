import "./App.css";
import HeaderContent from "./components/header/HeaderContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import AddBlog from "./components/addBlog/AddBlog";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";

function App() {
  return (
    <Router>
      <main>
        <div className="App">
          <header>
            <HeaderContent />
          </header>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addBlog" element={<AddBlog />} />
              <Route path="/blogs/:id" element={<Blog />} />
              <Route path="/about" element={<About/>} />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
