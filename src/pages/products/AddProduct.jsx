import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Typography, Box, Button, Breadcrumbs, useTheme } from "@mui/material";
import useCategory from "../../hooks/useCategory";
import "react-quill/dist/quill.snow.css";
import Topbar from "../../components/global/Topbar";
import Side from "../../components/global/Sidebar";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../utils/Theme";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

const AddProduct = () => {
  const [content, setContent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAddProduct, setIsAddProduct] = useState(false);
  const { allCategories } = useCategory();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Name is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.string().required("Price is required"),
    quantity: Yup.string().required("quantity is required"),
    description: Yup.string().required("Description is required"),
    imageCover: Yup.string().required("imageCover is required"),
  });

  const handleAdding = () => setIsAddProduct((show) => !show);
  const handleLoading = () => setLoading((show) => !show);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const initialValues = {
    title: "",
    category: "",
    price: "",
    quantity: "",
    description: "",
    imageCover: null,
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post(
        "https://furnival.onrender.com/products",
        values,
        config
      );
      resetForm();
      setLoading(false);
      setContent(true);
      if (setContent) {
        setTimeout(() => {
          navigate("/allProducts");
        }, 1800);
      }
    } catch (e) {
      if (!isAddProduct) {
        handleAdding();
      }
    }
  };

  return (
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
      <Box sx={{ display: "flex", flexDirection: "column", width: "82vw" }}>
        <Topbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "20px",
          }}
        >
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "10px" }}>
            <Typography sx={{ textDecoration: "none" }}>Home</Typography>
            <Typography to="/allProducts">
              <Typography sx={{ textDecoration: "none" }}>Products</Typography>
            </Typography>
            <Typography
              sx={{ textDecoration: "none" }}
              color="#FF9934"
              aria-current="page"
            >
              Add product
            </Typography>
          </Breadcrumbs>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              component="h1"
              sx={{ fontSize: "22px", fontWeight: 600, marginBottom: "30px" }}
            >
              Add product
            </Typography>
            <Box>
              {content && (
                <Alert
                  severity="success"
                  sx={{ width: "20vw", fontSize: "16px" }}
                >
                  Product added successfully!
                </Alert>
              )}
            </Box>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form>
                <Box
                  sx={{
                    // backgroundColor: "#F8F7F6",
                    backgroundColor: colors.primary[400],
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    borderRadius: "10px 10px 0 0",
                    width: "800px",
                    height: "90px",
                    marginBottom: "20px",
                  }}
                >
                  <Box display="flex" mr={11.8}>
                    <Typography
                      sx={{
                        ml: 1,
                        mr: 0,
                        fontSize: "18px",
                        color: colors.redAccent[700],
                      }}
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
                      style={{
                        width: "580px",
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",
                        outline: "1px solid lightgrey",
                        padding: "16px",
                      }}
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      style={{ color: "red", fontSize: "16px" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    // backgroundColor: "#F8F7F6",
                    backgroundColor: colors.primary[400],
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    width: "800px",
                    height: "90px",
                    marginBottom: "20px",
                  }}
                >
                  <Box display="flex" mr={7.2}>
                    <Typography
                      sx={{
                        ml: 1,
                        mr: 0,
                        fontSize: "18px",
                        color: colors.redAccent[700],
                      }}
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
                      name="category"
                      as="select"
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
                        <option value={category._id} key={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="category"
                      component="div"
                      style={{ color: "red", fontSize: "16px" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    // backgroundColor: "#F8F7F6",
                    backgroundColor: colors.primary[400],
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    width: "800px",
                    height: "90px",
                    marginBottom: "20px",
                  }}
                >
                  <Box display="flex" mr={11}>
                    <Typography
                      sx={{
                        ml: 1,
                        mr: 0,
                        fontSize: "18px",
                        color: colors.redAccent[700],
                      }}
                      htmlFor="price"
                    >
                      price
                    </Typography>
                    <Typography sx={{ fontSize: "24px", color: "red" }}>
                      *
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Field
                      type="number"
                      id="price"
                      name="price"
                      style={{
                        width: "580px",
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",
                        outline: "1px solid lightgrey",
                        padding: "16px",
                      }}
                    />
                    <ErrorMessage
                      name="price"
                      component="div"
                      style={{ color: "red", fontSize: "16px" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    // backgroundColor: "#F8F7F6",
                    backgroundColor: colors.primary[400],
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    width: "800px",
                    height: "90px",
                    marginBottom: "20px",
                  }}
                >
                  <Box display="flex" mr={7.8}>
                    <Typography
                      sx={{
                        ml: 1,
                        mr: 0,
                        fontSize: "18px",
                        color: colors.redAccent[700],
                      }}
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
                      type="number"
                      id="quantity"
                      name="quantity"
                      style={{
                        width: "580px",
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",
                        outline: "1px solid lightgrey",
                        padding: "16px",
                      }}
                    />
                    <ErrorMessage
                      name="quantity"
                      component="div"
                      style={{ color: "red", fontSize: "16px" }}
                    />
                  </Box>
                </Box>

                <Box
                  sx={{
                    // backgroundColor: "#F8F7F6",
                    backgroundColor: colors.primary[400],
                    display: "flex",
                    p: 2,
                    marginBottom: "20px",
                    width: "800px",
                    height: "90px",
                  }}
                >
                  <Box display="flex" mr={5}>
                    <Typography
                      sx={{
                        ml: 1,
                        mr: 0,
                        fontSize: "18px",
                        color: colors.redAccent[700],
                      }}
                      htmlFor="imageCover"
                    >
                      imageCover
                    </Typography>
                    <Typography sx={{ fontSize: "24px", color: "red" }}>
                      *
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Field name="imageCover">
                      {({ field, form }) => (
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(event) => {
                              const file = event.currentTarget.files[0];
                              form.setFieldValue(field.name, file);
                            }}
                            style={{
                              width: "580px",
                              height: "50px",
                              border: "none",
                              borderRadius: "10px",
                              outline: "1px solid lightgrey",
                              padding: "16px",
                            }}
                          />
                          <ErrorMessage name="imageCover" component="div" />
                        </div>
                      )}
                    </Field>
                    <ErrorMessage
                      name="imageCover"
                      component="div"
                      style={{ color: "red", fontSize: "16px" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundColor: colors.primary[400],
                    display: "flex",
                    p: 2,
                    borderRadius: "0 0 10px 10px",
                    width: "800px",
                    height: "fit-content",
                  }}
                >
                  <Box display="flex" mr={5}>
                    <Typography
                      sx={{
                        ml: 1,
                        mr: 0,
                        fontSize: "18px",
                        color: colors.redAccent[700],
                      }}
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
                      style={{
                        width: "580px",
                        minHeight: "130px",
                        border: "none",
                        borderRadius: "10px",
                        outline: "1px solid lightgrey",
                        padding: "16px",
                      }}
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      style={{ color: "red", fontSize: "16px" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: " 0 0 30px 220px",
                  }}
                >
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
                      handleSubmit(e);
                    }}
                  >
                    {loading ? <CircularProgress color="inherit" /> : "Save"}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProduct;
