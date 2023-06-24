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
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import useCategory from "../../hooks/useCategory";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Topbar from "../../components/global/Topbar";
import Side from "../../components/global/Sidebar";
import { tokens } from "../../utils/Theme";

const AddProduct = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { allCategories } = useCategory();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Name is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.string().required("Price is required"),
    quantity: Yup.string().required("quantity is required"),
    description: Yup.string().required("Description is required"),
    date: Yup.string().required("Date is required"),
    imageCover: Yup.string().required("imageCover is required"),
  });

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
      // console.log("ello");
      console.log(values);
      await axios.post(
        "https://furnival.onrender.com/products",
        values,
        config
      );
      // console.log(data);
      resetForm();
    } catch (error) {
      console.error(error);
    }
    console.log(values);
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
            // validationSchema={validationSchema}
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
                  <Box display="flex" mr={9.5}>
                    <Typography
                      sx={{ ml: 1, mr: 0, fontSize: "18px" }}
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
                {/* <Box
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
                category
              </Typography>
              <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Field
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
              />
              <ErrorMessage
                name="category"
                component="div"
                style={{ color: "red", fontSize: "16px" }}
              />
            </Box>
          </Box> */}
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
                      htmlFor="imageCover"
                    >
                      imageCover
                    </Typography>
                    <Typography sx={{ fontSize: "24px", color: "red" }}>
                      *
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    {/* <Field
                      type="file"
                      id="imageCover"
                      name="imageCover"
                      style={{
                        width: "580px",
                        height: "50px",
                        border: "none",
                        borderRadius: "10px",
                        outline: "1px solid lightgrey",
                        padding: "16px",
                      }}
                    /> */}
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

export default AddProduct;

// function AddProduct() {
//   const [category, setCategory] = useState("");
//   const { allCategories } = useCategory();

//   // const validationSchema = Yup.object().shape({
//   //   name: Yup.string().required("Name is required"),
//   //   category: Yup.string().required("Category is required"),
//   //   price: Yup.string().required("Price is required"),
//   //   quantity: Yup.string().required("quantity is required"),
//   //   description: Yup.string().required("Description is required"),
//   //   date: Yup.string().required("Date is required"),
//   //   imageCover: Yup.string().required("imageCover is required"),
//   // });

//   //   const token = localStorage.getItem("token");
//   //   const config = {
//   //     headers: {
//   //       Authorization: `Bearer ${token}`,
//   //       "Content-Type": "multipart/form-data",
//   //     },
//   //   };

//   const initialValues = {
//     name: "",
//     category: "",
//     // price: "",
//     // quantity: "",
//     // description: "",
//     // date: "",
//     // imageCover: "",
//   };

//   //   // console.log(allCategories);
//   //   // console.log(category);

//   //   const handleSubmit = async (values, { resetForm }) => {
//   //     try {
//   //       // console.log(initialValues);
//   //       console.log("ello");
//   //       // console.log(values);
//   //       await axios.post(
//   //         "https://furnival.onrender.com/products",
//   //         values,
//   //         config
//   //       );
//   //       console.log(data);
//   //       resetForm();
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   };

//   const handleChange = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleSubmit = async (values, { resetForm }) => {
//     // try {
//     //   // console.log(initialValues);
//     //   console.log("ello");
//     //   // console.log(values);
//     //   await axios.post(
//     //     "https://furnival.onrender.com/products",
//     //     values,
//     //     config
//     //   );
//     //   console.log(data);
//     //   resetForm();
//     // } catch (error) {
//     //   console.error(error);
//     // }
//     console.log("Hello");
//   };

//   // const handleChange = (event) => {
//   //   setCategory(event.target.value);
//   // };

//   return (
//     <Box>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//           <Box
//             sx={{
//               backgroundColor: "#F8F7F6",
//               display: "flex",
//               alignItems: "center",
//               p: 2,
//               borderRadius: "10px 10px 0 0",
//               width: "800px",
//               height: "90px",
//               marginBottom: "20px",
//             }}
//           >
//             <Box display="flex" mr={9.5}>
//               <Typography
//                 sx={{ ml: 1, mr: 0, fontSize: "18px" }}
//                 htmlFor="name"
//               >
//                 Name
//               </Typography>
//               <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
//             </Box>
//             <Box sx={{ display: "flex", flexDirection: "column" }}>
//               <Field
//                 type="text"
//                 id="name"
//                 name="name"
//                 style={{
//                   width: "580px",
//                   height: "50px",
//                   border: "none",
//                   borderRadius: "10px",
//                   outline: "1px solid lightgrey",
//                   padding: "16px",
//                 }}
//               />
//               <ErrorMessage
//                 name="name"
//                 component="div"
//                 style={{ color: "red", fontSize: "16px" }}
//               />
//             </Box>
//           </Box>
//           {/* <Box sx={{ display: "flex", flexDirection: "column" }}>
//             <FormControl
//               sx={{
//                 // m: 1,
//                 width: "580px",
//                 height: "50px",
//                 // border: "none",
//                 borderRadius: "10px",
//                 background: "white",
//                 // outline: "1px solid lightgrey",
//               }}
//             >
//               <Select
//                 // value={category}
//                 onChange={handleChange}
//                 id="category"
//                 name="category"
//                 value={category}
//                 inputProps={{ "aria-label": "Without label" }}
//                 sx={{
//                   borderRadius: "10px",
//                   height: "50px",
//                   "&:hover": { outline: "none" },
//                 }}
//               >
//                 {allCategories.map((category) => (
//                   <MenuItem value={category._id} key={category._id}>
//                     {category.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <ErrorMessage
//               name="category"
//               component="div"
//               style={{ color: "red", fontSize: "16px" }}
//             />
//           </Box> */}

//           {/* <Box
//             sx={{
//               backgroundColor: "#F8F7F6",
//               display: "flex",
//               alignItems: "center",
//               p: 2,
//               width: "800px",
//               height: "90px",
//               marginBottom: "20px",
//             }}
//           >
//             <Box display="flex" mr={6.5}>
//               <Typography
//                 sx={{ ml: 1, mr: 0, fontSize: "18px" }}
//                 htmlFor="category"
//               >
//                 Category
//               </Typography>
//               <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
//             </Box>
//             <Box sx={{ display: "flex", flexDirection: "column" }}>
//               <FormControl
//                 sx={{
//                   // m: 1,
//                   width: "580px",
//                   height: "50px",
//                   // border: "none",
//                   borderRadius: "10px",
//                   background: "white",
//                   // outline: "1px solid lightgrey",
//                 }}
//               >
//                 <Select
//                   // value={category}
//                   onChange={handleChange}
//                   id="category"
//                   name="category"
//                   value={category}
//                   inputProps={{ "aria-label": "Without label" }}
//                   sx={{
//                     borderRadius: "10px",
//                     height: "50px",
//                     "&:hover": { outline: "none" },
//                   }}
//                 >
//                   {allCategories.map((category) => (
//                     <MenuItem value={category._id} key={category._id}>
//                       {category.name}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//               <ErrorMessage
//                 name="category"
//                 component="div"
//                 style={{ color: "red", fontSize: "16px" }}
//               />
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               backgroundColor: "#F8F7F6",
//               display: "flex",
//               alignItems: "center",
//               p: 2,
//               width: "800px",
//               height: "90px",
//               marginBottom: "20px",
//             }}
//           >
//             <Box display="flex" mr={10.2}>
//               <Typography
//                 sx={{ ml: 1, mr: 0, fontSize: "18px" }}
//                 htmlFor="price"
//               >
//                 price
//               </Typography>
//               <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
//             </Box>
//             <Box sx={{ display: "flex", flexDirection: "column" }}>
//               <Field
//                 type="text"
//                 id="price"
//                 name="price"
//                 style={{
//                   width: "580px",
//                   height: "50px",
//                   border: "none",
//                   borderRadius: "10px",
//                   outline: "1px solid lightgrey",
//                   padding: "16px",
//                 }}
//               />
//               <ErrorMessage
//                 name="price"
//                 component="div"
//                 style={{ color: "red", fontSize: "16px" }}
//               />
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               backgroundColor: "#F8F7F6",
//               display: "flex",
//               alignItems: "center",
//               p: 2,
//               width: "800px",
//               height: "90px",
//               marginBottom: "20px",
//             }}
//           >
//             <Box display="flex" mr={7.2}>
//               <Typography
//                 sx={{ ml: 1, mr: 0, fontSize: "18px" }}
//                 htmlFor="quantity"
//               >
//                 quantity
//               </Typography>
//               <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
//             </Box>
//             <Box sx={{ display: "flex", flexDirection: "column" }}>
//               <Field
//                 type="text"
//                 id="quantity"
//                 name="quantity"
//                 style={{
//                   width: "580px",
//                   height: "50px",
//                   border: "none",
//                   borderRadius: "10px",
//                   outline: "1px solid lightgrey",
//                   padding: "16px",
//                 }}
//               />
//               <ErrorMessage
//                 name="quantity"
//                 component="div"
//                 style={{ color: "red", fontSize: "16px" }}
//               />
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               backgroundColor: "#F8F7F6",
//               display: "flex",
//               p: 2,
//               marginBottom: "20px",
//               width: "800px",
//               height: "90px",
//             }}
//           >
//             <Box display="flex" mr={10.2}>
//               <Typography
//                 sx={{ ml: 1, mr: 0, fontSize: "18px" }}
//                 htmlFor="date"
//               >
//                 Date
//               </Typography>
//               <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
//             </Box>
//             <Box sx={{ display: "flex", flexDirection: "column" }}>
//               <Field
//                 type="text"
//                 id="date"
//                 name="date"
//                 style={{
//                   width: "580px",
//                   height: "50px",
//                   border: "none",
//                   borderRadius: "10px",
//                   outline: "1px solid lightgrey",
//                   padding: "16px",
//                 }}
//               />
//               <ErrorMessage
//                 name="date"
//                 component="div"
//                 style={{ color: "red", fontSize: "16px" }}
//               />
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               backgroundColor: "#F8F7F6",
//               display: "flex",
//               p: 2,
//               marginBottom: "20px",
//               width: "800px",
//               height: "90px",
//             }}
//           >
//             <Box display="flex" mr={8}>
//               <Typography
//                 sx={{ ml: 1, mr: 0, fontSize: "18px" }}
//                 htmlFor="imageCover"
//               >
//                 imageCover
//               </Typography>
//               <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
//             </Box>
//             <Box sx={{ display: "flex", flexDirection: "column" }}>
//               <Field
//                 type="file"
//                 id="imageCover"
//                 name="imageCover"
//                 style={{
//                   width: "580px",
//                   height: "50px",
//                   border: "none",
//                   borderRadius: "10px",
//                   outline: "1px solid lightgrey",
//                   padding: "16px",
//                 }}
//               />
//               <ErrorMessage
//                 name="imageCover"
//                 component="div"
//                 style={{ color: "red", fontSize: "16px" }}
//               />
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               backgroundColor: "#F8F7F6",
//               display: "flex",
//               p: 2,
//               borderRadius: "0 0 10px 10px",
//               width: "800px",
//               height: "fit-content",
//             }}
//           >
//             <Box display="flex" mr={3.2}>
//               <Typography
//                 sx={{ ml: 1, mr: 0, fontSize: "18px" }}
//                 htmlFor="description"
//               >
//                 Description
//               </Typography>
//               <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 height: "fit-content",
//               }}
//             >
//               <Field
//                 as="textarea"
//                 id="description"
//                 name="description"
//                 style={{
//                   width: "580px",
//                   minHeight: "130px",
//                   border: "none",
//                   borderRadius: "10px",
//                   outline: "1px solid lightgrey",
//                   padding: "16px",
//                 }}
//               />
//               <ErrorMessage
//                 name="description"
//                 component="div"
//                 style={{ color: "red", fontSize: "16px" }}
//               />
//             </Box>
//           </Box> */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               margin: " 0 0 30px 220px",
//             }}
//           >
//             <Button
//               variant="contained"
//               type="submit"
//               sx={{
//                 width: "150px",
//                 fontSize: "16px",
//                 textTransform: "capitalize",
//                 marginTop: "30px",
//                 background: "#133A5E",
//                 "&:hover": { backgroundColor: "#FF9934" },
//               }}
//             >
//               Save
//             </Button>
//           </Box>
//         </Form>
//       </Formik>
//     </Box>
//   );
// }

// export default AddProduct;
