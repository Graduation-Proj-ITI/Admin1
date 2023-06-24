import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Typography, Box, Button, Breadcrumbs, Link } from "@mui/material";
import Topbar from "../../components/global/Topbar";
import Side from "../../components/global/Sidebar";

const AddBlog = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("content is required"),
    images: Yup.string().required("Image is required"),
  });

  const initialValues = {
    title: "",
    content: "",
    images: null,
  };

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post("https://furnival.onrender.com/blogs", values, config);
      resetForm();
      console.log(values);
      console.log(e.target.files[0]);
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
            <Link sx={{ textDecoration: "none" }}>Blogs</Link>
            <Link
              sx={{ textDecoration: "none" }}
              color="#FF9934"
              aria-current="page"
            >
              Add blog
            </Link>
          </Breadcrumbs>
          <Typography
            component="h1"
            sx={{ fontSize: "22px", fontWeight: 600, marginBottom: "30px" }}
          >
            Add blog
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
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
                      htmlFor="title"
                    >
                      Title
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
                  {/* <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Field
                    type="file"
                    id="images"
                    name="images"
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
                </Box> */}
                  <Field name="images">
                    {({ field, form }) => (
                      <div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            form.setFieldValue(field.name, file);
                          }}
                        />
                        <ErrorMessage name="images" component="div" />
                      </div>
                    )}
                  </Field>
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
                      htmlFor="content"
                    >
                      content
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
                      id="content"
                      name="content"
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
                      name="content"
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
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default AddBlog;
