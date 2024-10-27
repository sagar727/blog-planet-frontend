import { useEffect, useState } from "react";
import "./AddBlog.css";
import usePostBlog from "../../restCall/post";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("Technology");
  const [titleSize, setTitleSize] = useState(0);
  const [contentSize, setContentSize] = useState(0);
  const { error, post, msg } = usePostBlog();

  const handleOnTitleChange = (e) => {
    setTitle(e);
    setTitleSize(e.trim().length);
  };

  const handleOnContentChange = (e) => {
    setContent(e);
    setContentSize(e.trim().length);
  };

  const handleOnOptionSelection = (e) => {
    setTopic(e);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();

    const blog = {
      blogTitle: title,
      blogDetails: content,
      topic: topic,
      authorName: "Sagar Modi",
    };
    if (titleSize !== 0 && contentSize !== 0) {
      post("http://localhost:8080/blogs/createBlog", blog);
    } else {
      alert("Please fill all fields.");
      setTitle("");
      setContent("");
    }
  };

  useEffect(() => {
    if (msg) {
      alert(msg);
    }
  }, [msg]);

  return (
    <div className="Blog-container">
      <h3>Write a new Blog</h3>
      {!error && (
        <form className="Form-container">
          <label>Blog Title</label>
          <input
            type="text"
            maxLength={200}
            required
            value={title}
            onChange={(e) => handleOnTitleChange(e.target.value)}
          />
          <div className="Text-size-container">
            <h5>{titleSize}/200</h5>
          </div>
          <label>Blog Content</label>
          <textarea
            required
            maxLength={1000}
            value={content}
            onChange={(e) => handleOnContentChange(e.target.value)}
          ></textarea>
          <div className="Text-size-container">
            <h5>{contentSize}/1000</h5>
          </div>
          <label>Blog Topic</label>
          <select
            value={topic}
            onChange={(e) => handleOnOptionSelection(e.target.value)}
          >
            <option value="Technology">Technology</option>
            <option value="Science">Science</option>
            <option value="Health">Health</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
          </select>
          <button onClick={handleSubmitClick}>Add Blog</button>
        </form>
      )}
      {error && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
      {/* {msg && (
        <div>
          <h2>{msg}</h2>
        </div>
      )} */}
    </div>
  );
};

export default AddBlog;
