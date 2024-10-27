import "./Home.css";
import BlogList from "../blogList/BlogList";
import useFetch from "../../restCall/useFetch";
import image from "../../logo/bench.jpg";
import { useState } from "react";

const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8080/blogs");
  const [topic, setTopic] = useState("All");

  const handleOnOptionSelection = (e) => {
    setTopic(e);
  };

  return (
    <div className="BlogList-container">
      <img src={image} alt="bench" />
      {error && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
      {isLoading && <div className="loader"></div>}
      {data && (
        <>
          <div className="Filter-count-container">
            <div className="Filter-container">
              <h4>Filter by</h4>
              <select
                value={topic}
                onChange={(e) => handleOnOptionSelection(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Technology">Technology</option>
                <option value="Science">Science</option>
                <option value="Health">Health</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
              </select>
            </div>
          </div>
          {topic === "All" ? (
            <BlogList blogs={data} />
          ) : (
            <BlogList blogs={data.filter((blog) => blog.topic === topic)} />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
