import { useState } from "react";
import axios from "axios";

const useDeleteBlog = () => {
  const [err, setErr] = useState(null);
  const [msg, setMsg] = useState("");

  const deleteBlog = (url) => {
    axios
      .delete(url)
      .then((res) => {
        console.log(res);
        setMsg(res.data);
        setErr(null);
      })
      .catch((err) => {
        setErr(err.message);
      });
  };
  return { err, deleteBlog, msg };
};

export default useDeleteBlog;
