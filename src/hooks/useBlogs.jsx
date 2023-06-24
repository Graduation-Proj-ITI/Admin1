import { useState, useEffect } from "react";
import axios from "axios";

const useBlogs = () => {
  const [posts, setPosts] = useState([]);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  useEffect(() => {
    axios
      .get("https://furnival.onrender.com/blogs", config)
      .then((response) => {
        const data = response.data.data;
        // console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return {
    posts,
    setPosts,
  };
};

export default useBlogs;
