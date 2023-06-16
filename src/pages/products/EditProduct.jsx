import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { Formik, Form, Field } from "formik";
import { Typography, Box, Button } from "@mui/material";

function EditPost() {
  const { products } = useProducts();
  const { id } = useParams();

  const [form, setForm] = useState({
    productName: "",
    description: "",
    price: "",
    category: "",
    amount: "",
    date: "",
    // img: "",
  });

  useEffect(() => {
    async function fetchPostById() {
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);
      setForm({
        productName: data.productName,
        description: data.description,
        price: data.price,
        amount: data.amount,
        category: data.category,
        date: data.date,
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
      price: form.price,
      amount: form.amount,
      category: form.category,
      date: form.date,
    });
    handleEditPost(data);
  };

  return (
    <>
      <div>
        <Formik>
          <Form onSubmit={handleEdit}>
            <Box
              sx={{
                backgroundColor: "#F8F7F6",
                display: "flex",
                alignItems: "center",
                p: 2,
                borderRadius: "10px 10px 0 0",
                width: "800px",
                height: "90px",
                marginBottom: "20px",
              }}
            >
              <Box display="flex" mr={8}>
                <Typography
                  sx={{ ml: 2.6, mr: 0, fontSize: "18px" }}
                  htmlFor="productName"
                >
                  productName
                </Typography>
                <Typography sx={{ fontSize: "24px", color: "red" }}>
                  *
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Field
                  type="text"
                  id="productName"
                  name="productName"
                  value={form.productName}
                  onChange={handleChange}
                  style={{
                    width: "580px",
                    height: "50px",
                    border: "none",
                    borderRadius: "10px",
                    outline: "1px solid lightgrey",
                    padding: "16px",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#F8F7F6",
                display: "flex",
                alignItems: "center",
                p: 2,
                borderRadius: "10px 10px 0 0",
                width: "800px",
                height: "90px",
                marginBottom: "20px",
              }}
            >
              <Box display="flex" mr={8}>
                <Typography
                  sx={{ ml: 2.6, mr: 0, fontSize: "18px" }}
                  htmlFor="category"
                >
                  Category
                </Typography>
                <Typography sx={{ fontSize: "24px", color: "red" }}>
                  *
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Field
                  type="text"
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  style={{
                    width: "580px",
                    height: "50px",
                    border: "none",
                    borderRadius: "10px",
                    outline: "1px solid lightgrey",
                    padding: "16px",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#F8F7F6",
                display: "flex",
                alignItems: "center",
                p: 2,
                borderRadius: "10px 10px 0 0",
                width: "800px",
                height: "90px",
                marginBottom: "20px",
              }}
            >
              <Box display="flex" mr={8}>
                <Typography
                  sx={{ ml: 2.6, mr: 0, fontSize: "18px" }}
                  htmlFor="date"
                >
                  Date
                </Typography>
                <Typography sx={{ fontSize: "24px", color: "red" }}>
                  *
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Field
                  type="text"
                  id="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  style={{
                    width: "580px",
                    height: "50px",
                    border: "none",
                    borderRadius: "10px",
                    outline: "1px solid lightgrey",
                    padding: "16px",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#F8F7F6",
                display: "flex",
                alignItems: "center",
                p: 2,
                borderRadius: "10px 10px 0 0",
                width: "800px",
                height: "90px",
                marginBottom: "20px",
              }}
            >
              <Box display="flex" mr={8}>
                <Typography
                  sx={{ ml: 2.6, mr: 0, fontSize: "18px" }}
                  htmlFor="price"
                >
                  Price
                </Typography>
                <Typography sx={{ fontSize: "24px", color: "red" }}>
                  *
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Field
                  type="text"
                  id="price"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  style={{
                    width: "580px",
                    height: "50px",
                    border: "none",
                    borderRadius: "10px",
                    outline: "1px solid lightgrey",
                    padding: "16px",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#F8F7F6",
                display: "flex",
                alignItems: "center",
                p: 2,
                borderRadius: "10px 10px 0 0",
                width: "800px",
                height: "90px",
                marginBottom: "20px",
              }}
            >
              <Box display="flex" mr={8}>
                <Typography
                  sx={{ ml: 2.6, mr: 0, fontSize: "18px" }}
                  htmlFor="amount"
                >
                  amount
                </Typography>
                <Typography sx={{ fontSize: "24px", color: "red" }}>
                  *
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Field
                  type="text"
                  id="amount"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  style={{
                    width: "580px",
                    height: "50px",
                    border: "none",
                    borderRadius: "10px",
                    outline: "1px solid lightgrey",
                    padding: "16px",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#F8F7F6",
                display: "flex",
                p: 2,
                borderRadius: "0 0 10px 10px",
                width: "800px",
                height: "fit-content",
                marginBottom: "20px",
              }}
            >
              <Box display="flex" mr={3.2}>
                <Typography
                  sx={{ ml: 1, mr: 0, fontSize: "18px" }}
                  htmlFor="description"
                >
                  Description
                </Typography>
                <Typography sx={{ fontSize: "24px", color: "red" }}>
                  *
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "fit-content",
                }}
              >
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  style={{
                    width: "580px",
                    minHeight: "130px",
                    border: "none",
                    borderRadius: "10px",
                    outline: "1px solid lightgrey",
                    padding: "16px",
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: "150px",
                  fontSize: "16px",
                  textTransform: "capitalize",
                  marginTop: "30px",
                  background: "#133A5E",
                  "&:hover": { backgroundColor: "#FF9934" },
                }}
              >
                Save changes
              </Button>
            </Box>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default EditPost;
