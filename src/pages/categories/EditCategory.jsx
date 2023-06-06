import axios from "axios";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import useCategory from "../../hooks/useCategory";

function EditCategory() {
  //   const { categories } = useCategory();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const { data } = axios.get(`http://localhost:3000/categories/${id}`);
    console.log(data);
  }, []);

  return (
    <>
      <h1>{id}</h1>
    </>
  );
}

export default EditCategory;
