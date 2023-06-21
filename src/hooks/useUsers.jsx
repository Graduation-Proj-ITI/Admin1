import { useState, useEffect } from "react";
import axios from "axios";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://furnival.onrender.com/users", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        const data = response.data.data;
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return {
    users,
    setUsers,
  };
};

export default useUsers;
