import "./Blog.css";
import useFetch from "../../restCall/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import useDeleteBlog from "../../restCall/delete";
import { useEffect } from "react";

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch(
    `http://localhost:8080/blogs/id/${id}`
  );

  const { err, deleteBlog, msg } = useDeleteBlog();
  const handleDeleteBlog = () => {
    deleteBlog(`http://localhost:8080/blogs/deleteBlog/id/${id}`);
  };

  useEffect(() => {
    if (msg) {
      alert(msg);
      navigate("/");
    }
  }, [msg, navigate]);

  return (
    <div className="Blog-detail-container">
      {error && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
      {err && (
        <div>
          <h2>{err}</h2>
        </div>
      )}
      {isLoading && <div className="loader"></div>}
      {data && (
        <>
          <h3>{data.blogTitle}</h3>
          <p>{data.blogDetails}</p>
          <h5>Published by : {data.authorName}</h5>
          <h5>Published on : {data.publishedDate}</h5>
          <button onClick={handleDeleteBlog}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Blog;
