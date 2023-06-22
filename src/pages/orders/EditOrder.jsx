// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import useCategory from "../../hooks/useCategory";
// import axios from "axios";
// import { Box, FormControl, Button, Select, MenuItem } from "@mui/material";

// function EditOrder() {
//   const [selectedValue, setSelectedValue] = useState("");
//   const { allCategories } = useCategory();
//   const { orderId } = useParams();
//   const [form, setForm] = useState({
//     status: "",
//   });

//   const token = localStorage.getItem("token");
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//   };

//   // console.log(Orders);

//   useEffect(() => {
//     async function fetchPostById() {
//       const { data } = await axios.get(
//         `https://furnival.onrender.com/orders/${orderId}`,
//         config
//       );
//       // console.log(data);
//       setForm({
//         status: data.data.status,
//       });
//     }
//     fetchPostById();
//   }, [orderId]);

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   return (
//     <Box>
//       {/* <p>{orderId}</p>
//       <h1>{form.status}</h1>
//       <Input
//         type="text"
//         id="status"
//         name="status"
//         value={form.status}
//         // onChange={handleChange}
//         style={{
//           width: "580px",
//           height: "50px",
//           border: "none",
//           borderRadius: "10px",
//           outline: "1px solid lightgrey",
//           padding: "16px",
//         }}
//       /> */}
//       {/* <FormControl
//         sx={{
//           // m: 1,
//           width: "580px",
//           height: "50px",
//           // border: "none",
//           borderRadius: "10px",
//           background: "white",
//           // outline: "1px solid lightgrey",
//         }}
//       >
//         <Select
//           value={selectedValue}
//           onChange={handleChange}
//           id="selectedValue"
//           name="selectedValue"
//           // value={form.status}
//           inputProps={{ "aria-label": "Without label" }}
//           sx={{
//             borderRadius: "10px",
//             height: "50px",
//             "&:hover": { outline: "none" },
//           }}
//         >
//           <MenuItem>Pending</MenuItem>
//           <MenuItem>Delivered</MenuItem>
//         </Select>
//       </FormControl> */}
//       <Button>{orderId}</Button>
//     </Box>
//   );
// }

// export default EditOrder;

function EditOrder() {
  <h1>Hi</h1>;
}

export default EditOrder;
