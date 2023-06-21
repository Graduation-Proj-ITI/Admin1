import useUsers from "../../hooks/useUsers";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UserDetails() {
  const { users } = useUsers();
  const { id } = useParams();

  const [data, setData] = useState({
    name: "",
    image: "",
    email: "",
    location: "",
    active: "",
    addresses: "",
  });

  useEffect(() => {
    async function fetchPostById() {
      const { data } = await axios.get(
        `https://furnival.onrender.com/users/${id}`
      );
      setData({
        name: data.name,
        email: data.email,
        // img: data.img,
      });
    }
    fetchPostById();
  }, []);
  return (
    // <h1>
    //   {id}
    // </h1>
    <Box></Box>
  );
}

export default UserDetails;
