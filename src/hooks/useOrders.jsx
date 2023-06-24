import { useState, useEffect } from "react";
import axios from "axios";

const useOrders = () => {
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://furnival.onrender.com/orders", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        const data = response.data.data;
        setOrders(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return {
    Orders,
    setOrders,
  };
};

export default useOrders;
