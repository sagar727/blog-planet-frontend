import "./BlogList.css";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div>
      <div className="Count-container">
        <h4>Total Blogs: </h4>
        <h4>{blogs.length}</h4>
      </div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <div className="Blog-item">
              <h3>{blog.blogTitle}</h3>
              <p>
                {blog.blogDetails.length < 100
                  ? blog.blogDetails
                  : blog.blogDetails.substring(0, 100) + " . . ."}
              </p>
              <p className="Topic-container">#{blog.topic}</p>
              <h5>Published by : {blog.authorName}</h5>
              <h5>Published on : {blog.publishedDate}</h5>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
