import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  Typography,
  Box,
  Button,
  Breadcrumbs,
  Link,
  Modal,
} from "@mui/material";
import Topbar from "../../components/global/Topbar";
import Side from "../../components/global/Sidebar";

// const AddBlog = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const validationSchema = Yup.object().shape({
//     title: Yup.string().required("Title is required"),
//     content: Yup.string().required("content is required"),
//     images: Yup.string().required("Image is required"),
//   });

//   const initialValues = {
//     title: "",
//     content: "",
//     images: [],
//   };

//   // const [userImage,setUserImage] = useState(null);

//   const token = localStorage.getItem("token");
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "multipart/form-data",
//     },
//   };

//   const handleSubmit = async (values, { resetForm }) => {
//     try {
//       await axios.post("https://furnival.onrender.com/blogs", values, config);
//       resetForm();
//       console.log(values);
//       // console.log(e.target.files[0]);
//       setSelectedImage(values);
//     } catch (error) {
//       console.error(error);
//     }

//     const userImg = {
//       images: [selectedImage.images],
//     };
//     console.log(userImg);
//     const formData = new FormData();
//     formData.append("images", userImg.images[0]);
//   };

//   // if (selectedImage != null) {
//   //   // setChecked(true);
//   // }
//   const handleFetchImg = (e) => {
//     e.preventDefault();
//     const userImg = {
//       images: [selectedImage.images],
//     };
//     // console.log(userImg);
//     const formData = new FormData();
//     formData.append("images", userImg.images[0]);
//     // setLoading(true);
//     // axios
//     //   .put("https://furnival.onrender.com/blogs", formData, config)
//     //   .then((res) => {
//     //     setLoading(false);
//     //     setUserImage(res?.data.data.images);
//     //     setChecked(false);
//     //     toast.success("Your Picture updated successfully!", {
//     //       position: "bottom-right",
//     //       autoClose: 5000,
//     //       hideProgressBar: false,
//     //       closeOnClick: true,
//     //       pauseOnHover: true,
//     //     });
//     //     // console.log('post image',res.data);
//     //   })
//     // .catch((err) => {
//     //   setLoading(false);
//     //   setChecked(false);
//     //   toast.error("there is an error please,try again!", {
//     //     position: "bottom-right",
//     //     autoClose: 5000,
//     //     hideProgressBar: false,
//     //     closeOnClick: true,
//     //     pauseOnHover: true,
//     //   });
//     //   // console.log(err);
//     // });
//   };

//   // const [user,setUser]=useState(null);
//   // useEffect(() => {
//   //   setLoading(true)
//   //   axios
//   //   .get("https://furnival.onrender.com/users/getMe", {
//   //     headers: { Authorization: Bearer ${localStorage.getItem('token')} },
//   //   })
//   //   .then((res) => {
//   //     setLoading(false)
//   //     setUserImage(res?.data.data.images);
//   //     setUser(res?.data.data);
//   //     // console.log('get data',res.data);
//   //   })
//   //   .catch((err) => {
//   //     setLoading(false)
//   //     // console.log(err.response.data.message);
//   //   });
//   // }, [userImage]);

//   return (
//     <Box
//       sx={{
//         display: "grid",
//         gridTemplateColumns: "repeat(12, 1fr)",
//         gridAutoRows: "45px",
//       }}
//     >
//       <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
//         <Side />
//       </Box>
//       <Box sx={{ display: "flex", flexDirection: "column", width: "80vw" }}>
//         <Topbar />
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             marginLeft: "20px",
//           }}
//         >
//           <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "10px" }}>
//             <Link sx={{ textDecoration: "none" }}>Home</Link>
//             <Link sx={{ textDecoration: "none" }}>Blogs</Link>
//             <Link
//               sx={{ textDecoration: "none" }}
//               color="#FF9934"
//               aria-current="page"
//             >
//               Add blog
//             </Link>
//           </Breadcrumbs>
//           <Typography
//             component="h1"
//             sx={{ fontSize: "22px", fontWeight: 600, marginBottom: "30px" }}
//           >
//             Add blog
//           </Typography>
//           {/* <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           > */}
//           <form>
//             <Box
//               sx={{
//                 backgroundColor: "#F8F7F6",
//                 display: "flex",
//                 alignItems: "center",
//                 p: 2,
//                 borderRadius: "10px 10px 0 0",
//                 width: "800px",
//                 height: "90px",
//                 marginBottom: "20px",
//               }}
//             >
//               <Box display="flex" mr={8}>
//                 <Typography
//                   sx={{ ml: 1, mr: 0, fontSize: "18px" }}
//                   htmlFor="title"
//                 >
//                   Title
//                 </Typography>
//                 <Typography sx={{ fontSize: "24px", color: "red" }}>
//                   *
//                 </Typography>
//               </Box>
//               <Box sx={{ display: "flex", flexDirection: "column" }}>
//                 <input
//                   type="text"
//                   id="title"
//                   name="title"
//                   style={{
//                     width: "580px",
//                     height: "50px",
//                     border: "none",
//                     borderRadius: "10px",
//                     outline: "1px solid lightgrey",
//                     padding: "16px",
//                   }}
//                 />
//                 <ErrorMessage
//                   name="title"
//                   component="div"
//                   style={{ color: "red", fontSize: "16px" }}
//                 />
//               </Box>
//             </Box>

//             <Box
//               sx={{
//                 backgroundColor: "#F8F7F6",
//                 display: "flex",
//                 p: 2,
//                 marginBottom: "20px",
//                 width: "800px",
//                 height: "90px",
//               }}
//             >
//               <Box display="flex" mr={8}>
//                 <Typography
//                   sx={{ ml: 1, mr: 0, fontSize: "18px" }}
//                   htmlFor="image"
//                 >
//                   Image
//                 </Typography>
//                 <Typography sx={{ fontSize: "24px", color: "red" }}>
//                   *
//                 </Typography>
//               </Box>
//               <Box sx={{ display: "flex", flexDirection: "column" }}>
//                 {/* <input
//                   type="file"
//                   id="images"
//                   name="images"
//                   style={{
//                     width: "580px",
//                     height: "50px",
//                     border: "none",
//                     borderRadius: "10px",
//                     outline: "1px solid lightgrey",
//                     padding: "16px",
//                   }}
//                 /> */}
//                 <input
//                   accept="image/*"
//                   multiple
//                   type="file"
//                   // className="absolute z-[20] opacity-0 w-[80%]  rounded-[50%] cursor-pointer"
//                   onChange={(e) => {
//                     const file = e.target.files[0];
//                     setSelectedImage(file);
//                     // setChecked(true)
//                     // console.log(isChecked)
//                     // console.log('image',selectedImage)
//                   }}
//                 />
//                 <input
//                   type="checkbox"
//                   id="my-modal-4"
//                   className="modal-toggle"
//                   // checked={isChecked}
//                   onChange={(e) => {
//                     setChecked(isChecked);
//                   }}
//                 />
//                 <div className="modal">
//                   <div className="modal-box relative z-50">
//                     <label
//                       onClick={() => {
//                         setChecked(false);
//                       }}
//                       htmlFor="my-modal-4"
//                       className="btn text-error px-4 rounded-full  btn-sm  border-error btn-outline btn-circle absolute right-4 top-2 hover:bg-error hover:text-white hover:border-error"
//                     >
//                       ✕
//                     </label>
//                     <h3 className="text-lg font-bold pb-4">
//                       confirm upload image
//                     </h3>

//                     <form
//                       onSubmit={(e) => {
//                         handleFetchImg(e);
//                       }}
//                       className="form flex flex-col gap-4"
//                     >
//                       <button
//                         type="submit"
//                         className="btn btn-primary w-[200px] py-0 mx-auto mt-5  rounded-[8px]"
//                       >
//                         confirm
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//                 <ErrorMessage
//                   name="images"
//                   component="div"
//                   style={{ color: "red", fontSize: "16px" }}
//                 />
//               </Box>
//             </Box>
//             <Box
//               sx={{
//                 backgroundColor: "#F8F7F6",
//                 display: "flex",
//                 p: 2,
//                 borderRadius: "0 0 10px 10px",
//                 width: "800px",
//                 height: "fit-content",
//               }}
//             >
//               <Box display="flex" mr={3.2}>
//                 <Typography
//                   sx={{ ml: 1, mr: 0, fontSize: "18px" }}
//                   htmlFor="content"
//                 >
//                   content
//                 </Typography>
//                 <Typography sx={{ fontSize: "24px", color: "red" }}>
//                   *
//                 </Typography>
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   height: "fit-content",
//                 }}
//               >
//                 <Field
//                   as="textarea"
//                   id="content"
//                   name="content"
//                   style={{
//                     width: "580px",
//                     minHeight: "130px",
//                     border: "none",
//                     borderRadius: "10px",
//                     outline: "1px solid lightgrey",
//                     padding: "16px",
//                   }}
//                 />
//                 <ErrorMessage
//                   name="content"
//                   component="div"
//                   style={{ color: "red", fontSize: "16px" }}
//                 />
//               </Box>
//             </Box>

//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 margin: " 0 0 30px 220px",
//               }}
//             >
//               <Button
//                 variant="contained"
//                 type="submit"
//                 sx={{
//                   width: "150px",
//                   fontSize: "16px",
//                   textTransform: "capitalize",
//                   marginTop: "30px",
//                   background: "#133A5E",
//                   "&:hover": { backgroundColor: "#FF9934" },
//                 }}
//               >
//                 Save
//               </Button>
//             </Box>
//             {/* <input
//               type="checkbox"
//               id="my-modal-4"
//               className="modal-toggle"
//               checked={isChecked}
//               onChange={(e) => {
//                 setChecked(isChecked);
//               }}
//             /> */}
//             {/* <div className="modal">
//               <div className="modal-box relative z-50">
//                 <label
//                   onClick={() => {
//                     setChecked(false);
//                   }}
//                   htmlFor="my-modal-4"
//                   // className="btn text-error px-4 rounded-full  btn-sm  border-error btn-outline btn-circle absolute right-4 top-2 hover:bg-error hover:text-white hover:border-error"
//                 >
//                   ✕
//                 </label>
//                 <h3 className="text-lg font-bold pb-4">confirm upload image</h3>

//                 <form
//                   onSubmit={(e) => {
//                     handleFetchImg(e);
//                   }}
//                   className="form flex flex-col gap-4"
//                 >
//                   <button
//                     type="submit"
//                     // className="btn btn-primary w-[200px] py-0 mx-auto mt-5  rounded-[8px]"
//                   >
//                     confirm
//                   </button>
//                 </form>
//               </div>
//             </div> */}
//             {/* <Button onClick={handleOpen}>Open modal</Button>
//             <Modal
//               open={open}
//               onClose={handleClose}
//               aria-labelledby="modal-modal-title"
//               aria-describedby="modal-modal-description"
//             >
//               <Box sx={style}>
//                 <h3 className="text-lg font-bold pb-4"></h3>

//                 <Typography id="modal-modal-title" variant="h3" component="h3">
//                   confirm upload image
//                 </Typography>
//                 <Box>
//                   <form
//                     onSubmit={(e) => {
//                       handleFetchImg(e);
//                     }}
//                     // className="form flex flex-col gap-4"
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "16px",
//                     }}
//                   >
//                     <button
//                       type="submit"
//                       // className="btn btn-primary w-[200px] py-0 mx-auto mt-5  rounded-[8px]"
//                     >
//                       confirm
//                     </button>
//                   </form>
//                 </Box>
//               </Box>
//             </Modal> */}
//           </form>
//           {/* </Formik> */}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

export function NewBlog() {
  const handleSubmit = (values) => {
    // Handle form submission with image data
    console.log(values.image);
  };

  return (
    <Formik initialValues={{ image: null }} onSubmit={handleSubmit}>
      {({ setFieldValue }) => (
        <Form>
          <Field name="image">
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
                <ErrorMessage name="image" component="div" />
              </div>
            )}
          </Field>
          <button type="submit">Upload</button>
        </Form>
      )}
    </Formik>
  );
}
