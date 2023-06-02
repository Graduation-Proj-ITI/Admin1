import { useState, useEffect } from "react";
import axios from "axios";

const useBlogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return {
    posts,
    setPosts
  };
};

export default useBlogs;
