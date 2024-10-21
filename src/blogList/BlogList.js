import "./BlogList.css";

const BlogList = ({ blogs }) => {
  return (
    <div className="BlogList">
      {blogs.map((blog) => (
        <div className="Blog-item" key={blog.id}>
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
      ))}
    </div>
  );
};

export default BlogList;
