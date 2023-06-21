import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  Typography,
  Box,
  Button,
  Breadcrumbs,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import useCategory from "../../hooks/useCategory";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

const AddProduct = () => {
  // let [description, setDescription] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const { allCategories } = useCategory();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    selectedValue: Yup.string().required("Category is required"),
    price: Yup.string().required("Price is required"),
    amount: Yup.string().required("Amount is required"),
    description: Yup.string().required("Description is required"),
    date: Yup.string().required("Date is required"),
    image: Yup.string().required("Image is required"),
  });

  const initialValues = {
    name: "",
    selectedValue: "",
    price: "",
    amount: "",
    description: "",
    date: "",
    image: "",
  };

  console.log(allCategories);
  console.log(selectedValue);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(values);
      const { data } = await axios.post(
        "https://furnival.onrender.com/products",
        values,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(data);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "20px",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "10px" }}>
        <Link sx={{ textDecoration: "none" }}>Home</Link>
        <Link to="/allProducts">
          <Typography sx={{ textDecoration: "none" }}>Products</Typography>
        </Link>
        <Typography
          // underline="hover"
          sx={{ textDecoration: "none" }}
          color="#FF9934"
          aria-current="page"
        >
          Add product
        </Typography>
      </Breadcrumbs>
      <Typography
        component="h1"
        sx={{ fontSize: "22px", fontWeight: 600, marginBottom: "30px" }}
      >
        Add product
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
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
            <Box display="flex" mr={9.5}>
              <Typography
                sx={{ ml: 1, mr: 0, fontSize: "18px" }}
                htmlFor="name"
              >
                Name
              </Typography>
              <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Field
                type="text"
                id="name"
                name="name"
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
                name="name"
                component="div"
                style={{ color: "red", fontSize: "16px" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#F8F7F6",
              display: "flex",
              alignItems: "center",
              p: 2,
              width: "800px",
              height: "90px",
              marginBottom: "20px",
            }}
          >
            <Box display="flex" mr={6.5}>
              <Typography
                sx={{ ml: 1, mr: 0, fontSize: "18px" }}
                htmlFor="category"
              >
                Category
              </Typography>
              <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {/* <Field
                type="text"
                id="category"
                name="category"
                style={{
                  width: "580px",
                  height: "50px",
                  border: "none",
                  borderRadius: "10px",
                  outline: "1px solid lightgrey",
                  padding: "16px",
                }}
              /> */}
              <FormControl
                sx={{
                  // m: 1,
                  width: "580px",
                  height: "50px",
                  // border: "none",
                  borderRadius: "10px",
                  background: "white",
                  // outline: "1px solid lightgrey",
                }}
              >
                <Select
                  // value={selectedValue}
                  onChange={handleChange}
                  id="selectedValue"
                  name="selectedValue"
                  value={selectedValue}
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    borderRadius: "10px",
                    height: "50px",
                    "&:hover": { outline: "none" },
                  }}
                >
                  {allCategories.map((category) => (
                    <MenuItem value={category._id} key={category._id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <ErrorMessage
                name="category"
                component="div"
                style={{ color: "red", fontSize: "16px" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#F8F7F6",
              display: "flex",
              alignItems: "center",
              p: 2,
              width: "800px",
              height: "90px",
              marginBottom: "20px",
            }}
          >
            <Box display="flex" mr={10.2}>
              <Typography
                sx={{ ml: 1, mr: 0, fontSize: "18px" }}
                htmlFor="price"
              >
                price
              </Typography>
              <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Field
                type="text"
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
              backgroundColor: "#F8F7F6",
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
                sx={{ ml: 1, mr: 0, fontSize: "18px" }}
                htmlFor="amount"
              >
                Amount
              </Typography>
              <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Field
                type="text"
                id="amount"
                name="amount"
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
                name="amount"
                component="div"
                style={{ color: "red", fontSize: "16px" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#F8F7F6",
              display: "flex",
              p: 2,
              marginBottom: "20px",
              width: "800px",
              height: "90px",
            }}
          >
            <Box display="flex" mr={10.2}>
              <Typography
                sx={{ ml: 1, mr: 0, fontSize: "18px" }}
                htmlFor="date"
              >
                Date
              </Typography>
              <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Field
                type="text"
                id="date"
                name="date"
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
                name="date"
                component="div"
                style={{ color: "red", fontSize: "16px" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#F8F7F6",
              display: "flex",
              p: 2,
              marginBottom: "20px",
              width: "800px",
              height: "90px",
            }}
          >
            <Box display="flex" mr={8}>
              <Typography
                sx={{ ml: 1, mr: 0, fontSize: "18px" }}
                htmlFor="image"
              >
                Image
              </Typography>
              <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Field
                type="file"
                id="image"
                name="image"
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
                name="image"
                component="div"
                style={{ color: "red", fontSize: "16px" }}
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
            }}
          >
            <Box display="flex" mr={3.2}>
              <Typography
                sx={{ ml: 1, mr: 0, fontSize: "18px" }}
                htmlFor="description"
              >
                Description
              </Typography>
              <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
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
              {/* <ReactQuill
                theme="snow"
                // name={description}
                // id={description}
                // onChange={setDescription}
                id="description"
                name="description"
                style={{
                  width: "600px",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  padding: "16px",
                  marginBottom: "10px",
                  type: "text",
                }}
              /> */}
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
            >
              Save
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default AddProduct;
