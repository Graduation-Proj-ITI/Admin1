import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

function EditPost() {
  const { products } = useProducts();
  const { id } = useParams();

  const [form, setForm] = useState({
    productName: "",
    description: "",
    // img: "",
  });

  useEffect(() => {
    async function fetchPostById() {
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);
      setForm({
        productName: data.productName,
        description: data.description,
        // img: data.img,
      });
    }
    fetchPostById();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEditPost = () => {
    {
      products.map((product) =>
        product.id === product.id ? { ...product } : product
      );
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const { data } = await axios.put(`http://localhost:3000/products/${id}`, {
      productName: form.productName,
      description: form.description,
      // img: form.img,
    });
    handleEditPost(data);
  };

  return (
    <>
      <h1>{id}</h1>
      <div>
        <form onSubmit={handleEdit}>
          <input
            id="productName"
            type="text"
            name="productName"
            value={form.productName}
            onChange={handleChange}
          />
          <br />
          <textarea
            id="description"
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
          ></textarea>
          <br />
          {/* <input
            id="img"
            type={"file"}
            value={form.img}
            onChange={handleChange}
          /> */}
          <div>
            <button>Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditPost;
