import { useState } from "react";
import axios from "axios";

const usePostBlog = () => {
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState("");

  const post = (url, data) => {
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        setMsg(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return { error, post, msg };
};

export default usePostBlog;
