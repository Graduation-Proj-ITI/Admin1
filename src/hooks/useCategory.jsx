import { useState, useEffect } from "react";
import axios from "axios";

const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [topCategories, setTopCategories] = useState([]);
  // const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        const data = response.data;
        const categories = data.slice(0, 4);
        const topCategories = data.slice(0, 3);
        setCategories(categories);
        setTopCategories(topCategories);
        // setAllCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return {
    categories,
    topCategories,
    // allCategories,
  };
};

export default useCategory;
