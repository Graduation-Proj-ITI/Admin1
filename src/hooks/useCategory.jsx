import { useState, useEffect } from "react";
import axios from "axios";

const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [topCategories, setTopCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://furnival.onrender.com/categories")
      .then((response) => {
        const allCategories = response.data.data;
        // console.log(data);
        // const allCategories = data;
        const categories = allCategories.slice(0, 4);
        // const categories = allCategories;
        const topCategories = allCategories.slice(0, 3);
        setCategories(categories);
        setTopCategories(topCategories);
        setAllCategories(allCategories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return {
    categories,
    topCategories,
    allCategories,
  };
};

export default useCategory;
