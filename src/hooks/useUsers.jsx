import { useState, useEffect } from "react";
import axios from "axios";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        const data = response.data;
        const users = data;
        setUsers(users);
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
