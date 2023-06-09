import { useState, useEffect } from "react";
import axios from "axios";

const useOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((response) => {
        const data = response.data;
        const allOrders = data;
        setAllOrders(allOrders);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return {
    allOrders,
    setAllOrders,
  };
};

export default useOrders;
