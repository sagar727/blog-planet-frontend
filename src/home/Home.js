import { useState, useEffect } from "react";
import "./Home.css";
import BlogList from "../blogList/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not find blogs.");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="BlogList-container">
      {error && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
      {isLoading && <div className="loader"></div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
