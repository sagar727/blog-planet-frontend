import "./App.css";
import HeaderContent from "./header/HeaderContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import AddBlog from "./addBlog/AddBlog";

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
              <Route path="addBlog" element={<AddBlog />} />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
