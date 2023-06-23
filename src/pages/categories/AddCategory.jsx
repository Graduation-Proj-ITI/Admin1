import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Typography, Box, Button, Breadcrumbs, Link } from "@mui/material";
import Topbar from "../../components/global/Topbar";
import Side from "../../components/global/Sidebar";

const AddCategory = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    image: Yup.string().required("Image is required"),
  });

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
      accept: "application/json",
    },
  };

  const initialValues = {
    name: "",
    image: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(values);
      await axios.post(
        "https://furnival.onrender.com/categories",
        values,
        config
      );

      resetForm();
      // navigate("/allCategories")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridAutoRows: "45px",
        // gap:"20px"
      }}
    >
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <Side />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "80vw" }}>
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
            <Link sx={{ textDecoration: "none" }}>Home</Link>
            <Link sx={{ textDecoration: "none" }}>Categories</Link>
            <Link
              // underline="hover"
              sx={{ textDecoration: "none" }}
              color="#FF9934"
              // href="/material-ui/react-breadcrumbs/"
              aria-current="page"
            >
              Add category
            </Link>
          </Breadcrumbs>
          <Typography
            component="h1"
            sx={{ fontSize: "22px", fontWeight: 600, marginBottom: "30px" }}
          >
            Add category
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
                <Box display="flex" mr={8}>
                  <Typography
                    sx={{ ml: 1, mr: 0, fontSize: "18px" }}
                    htmlFor="name"
                  >
                    Name
                  </Typography>
                  <Typography sx={{ fontSize: "24px", color: "red" }}>
                    *
                  </Typography>
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
              {/* <Box
            sx={{
              backgroundColor: "#F8F7F6",
              display: "flex",
              p: 2,
              marginBottom: "20px",
              width: "800px",
              height: "90px",
            }}
          >
            <Box display="flex" mr={9.2}>
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
          </Box> */}

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
                  <Typography sx={{ fontSize: "24px", color: "red" }}>
                    *
                  </Typography>
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
      </Box>
    </Box>
  );
};

export default AddCategory;
