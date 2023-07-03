import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { Formik, Form, Field } from "formik";
import { Typography, Box, Button, Breadcrumbs } from "@mui/material";
import useCategory from "../../hooks/useCategory";
import Topbar from "../../components/global/Topbar";
import Side from "../../components/global/Sidebar";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

function EditProduct() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const { allCategories } = useCategory();
  const { products } = useProducts();
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);
  const [isAddProduct, setIsAddProduct] = useState(false);
  const [content, setContent] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    quantity: "",
    imageCover: "",
    colors: ["yellow"],
  });

  const navigate = useNavigate();

  const handleAdding = () => setIsAddProduct((show) => !show);
  const handleLoading = () => setLoading((show) => !show);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  useEffect(() => {
    async function fetchPostByproductId() {
      const { data } = await axios.get(
        `https://furnival.onrender.com/products/${productId}`
      );
      setForm({
        title: data.data.title,
        description: data.data.description,
        price: data.data.price,
        quantity: data.data.quantity,
        category: data.data.category["name"],
        imageCover: data.data.imageCover,
      });
    }
    fetchPostByproductId();
  }, [productId]);

  useEffect(() => {
    async function fetchCategory() {
      const { data } = await axios.get(
        `https://furnival.onrender.com/categories`
      );
      setCategories(data.data);
    }
    fetchCategory();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEditProduct = () => {
    {
      products.map((product) =>
        product._Id === product.id ? { ...product } : product
      );
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `https://furnival.onrender.com/products/${productId}`,
        {
          title: form.title,
          description: form.description,
          price: form.price,
          quantity: form.quantity,
          category: categories.find((item) => item.name === form.category)._id,
          imageCover: form.imageCover,
        },
        config
      );
      handleEditProduct(data);
      setLoading(false);
      setContent(true);
      if (setContent) {
        setTimeout(() => {
          navigate("/allProducts");
        }, 2500);
      }
    } catch (error) {
      if (!isAddProduct) {
        handleAdding();
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: "45px",
        }}
      >
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          <Side />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "82vw",
          margin: " -40px 0 0 260px",
        }}
      >
        <Topbar />
        <Box sx={{ marginLeft: "20px" }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "20px" }}>
            <Typography>Home</Typography>
            <Typography>Products</Typography>
            <Typography color="#FF9934" aria-current="page">
              Edit product
            </Typography>
          </Breadcrumbs>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {content && (
              <Alert
                severity="success"
                sx={{ width: "20vw", fontSize: "16px" }}
              >
                Product updated successfully!
              </Alert>
            )}
          </Box>
          <Formik>
            <Form>
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
                <Box display="flex" mr={8.8}>
                  <Typography
                    sx={{ ml: 2.6, mr: 0, fontSize: "18px" }}
                    htmlFor="title"
                  >
                    title
                  </Typography>
                  <Typography sx={{ fontSize: "24px", color: "red" }}>
                    *
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
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
                <Box display="flex" mr={4.6}>
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
                    name={category.name}
                    as="select"
                    id={category.name}
                    style={{
                      width: "580px",
                      height: "50px",
                      border: "none",
                      borderRadius: "10px",
                      outline: "1px solid lightgrey",
                      padding: "16px",
                    }}
                  >
                    {allCategories.map((category) => (
                      <option
                        value={category._id}
                        key={category._id}
                        selected={category.name === form.category}
                      >
                        {category.name}
                      </option>
                    ))}
                  </Field>
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
                    htmlFor="color"
                  >
                    Color
                  </Typography>
                  <Typography sx={{ fontSize: "24px", color: "red" }}>
                    *
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Field
                    type="text"
                    id="color"
                    name="color"
                    value={form?.colors}
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
                <Box display="flex" mr={8.4}>
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
                <Box display="flex" mr={5.8}>
                  <Typography
                    sx={{ ml: 2.6, mr: 0, fontSize: "18px" }}
                    htmlFor="quantity"
                  >
                    quantity
                  </Typography>
                  <Typography sx={{ fontSize: "24px", color: "red" }}>
                    *
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Field
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={form.quantity}
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
                <Box display="flex" mr={4}>
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
                  onClick={(e) => {
                    handleLoading();
                    handleEdit(e);
                  }}
                >
                  {loading ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    "Save changes"
                  )}
                </Button>
              </Box>
            </Form>
          </Formik>
        </Box>
      </Box>
    </>
  );
}

export default EditProduct;
