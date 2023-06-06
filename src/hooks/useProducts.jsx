import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  // const [allproducts, setAllproducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        const data = response.data;
        const allProducts = data;
        const products = data.slice(0, 4);
        const topProducts = data.slice(0, 4);
        setProducts(products);
        setTopProducts(topProducts);
        setAllProducts(allProducts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return {
    products,
    topProducts,
    setProducts,
    allProducts,
    // allCategories,
  };
};

export default useProducts;
