import { useState, useEffect } from "react";
import axios from "axios";

const useOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://furnival.onrender.com/orders", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        const data = response.data.data;
        // console.log(data);
        setAllOrders(data);
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
