import useUsers from "../../hooks/useUsers";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  Typography,
  Breadcrumbs,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import Topbar from "../../components/global/Topbar";
import Side from "../../components/global/Sidebar";

function OrderDetails() {
  const { orderDetailsId } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [selectedValue, setSelectedValue] = useState([
    { id: 1, status: "pending" },
    { id: 2, status: "canceled" },
    { id: 3, status: "delivered" },
  ]);
  const [form, setForm] = useState({
    image: "",
    name: "",
    email: "",
    location: "",
    phone: "",
    status: "",
    isDelivered: "",
    totalOrderPrice: "",
    createdAt: "",
    // cartItems: [],
  });

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
      accept: "application/json",
    },
  };

  // const changeStatus = () => {
  //   setStatus("delivered");
  //   // setForm({
  //   //   status: data.data.status,
  //   // });
  // };

  const handleSelectChange = async (event) => {
    const selectedValue = event.target.value;
    try {
      await axios.post(`https://furnival.onrender.com/orders/${productId}`, {
        selectedValue,
      }); // Replace with your backend API endpoint and payload structure
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/orders");
  };

  useEffect(() => {
    async function fetchPostById() {
      const { data } = await axios.get(
        `https://furnival.onrender.com/orders/${orderDetailsId}`,
        config
      );
      console.log(data);
      setCartItems(data.data.cartItems);
      setForm({
        user: data.data.user,
        image: data.data.image,
        name: data.data.name,
        email: data.data.email,
        phone: data.data.phone,
        location: data.data.location,
        status: data.data.status,
        totalOrderPrice: data.data.totalOrderPrice,
        createdAt: data.data.createdAt,
      });
    }
    // console.log(data.data.cartItems);
    fetchPostById();
  }, [orderDetailsId]);
  // console.log(cartItems.length);

  // function handleChange(event) {
  //   setSelectedValue(event.target.value);
  //   console.log(selectedValue);
  // }

  // console.log(selectedValue);

  const initialValues = {
    status: "",
  };

  // console.log(allCategories);
  // console.log(category);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // console.log(initialValues);
      console.log("ello");
      // console.log(values);
      await axios.post("https://furnival.onrender.com/orders", values, config);
      // console.log(data);
      resetForm();
    } catch (error) {
      console.error(error);
    }
    console.log(values);
  };

  // useEffect(() => {
  //   async function fetchPostById() {
  //     const { data } = await axios.get(
  //       `https://furnival.onrender.com/orders/${orderDetailsId}`,
  //       config
  //     );
  //     console.log(data);
  //     setForm({
  //       image: data.data.image,
  //       name: data.data.name,
  //       email: data.data.email,
  //       phone: data.data.phone,
  //       location: data.data.location,
  //       status: data.data.status,
  //     });
  //   }
  //   fetchPostById();
  // }, [orderDetailsId]);

  //   const handleEdit = async (e) => {
  //     e.preventDefault();
  //     const { data } = await axios.put(
  //       `https://furnival.onrender.com/orders/${orderDetailsId}/deliver`,
  // {

  // },
  // config
  //       // {
  //         //   status: "delivered",
  //         // },
  //         );
  //         setStatus(data);
  //     console.log(data);
  //   };

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
        <Box sx={{ marginLeft: "20px" }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "10px" }}>
            <Link sx={{ textDecoration: "none" }}>Home</Link>
            <Link sx={{ textDecoration: "none" }}>Orders</Link>
            <Link
              // underline="hover"
              sx={{ textDecoration: "none" }}
              color="#FF9934"
              // href="/material-ui/react-breadcrumbs/"
              aria-current="page"
            >
              Order Details
            </Link>
          </Breadcrumbs>
          {/* {cartItems?.map((order) => { */}
          <Box
            sx={{
              width: "650px",
              height: "360px",
              backgroundColor: "#f2f0f0",
              display: "flex",
              alignItems: "center",
              gap: "40px",
              borderRadius: "10px",
              marginTop: "40px",
            }}
          >
            <Box>
              <CardMedia
                component="img"
                src="../src/assets/lambb.avif"
                sx={{
                  width: "170px",
                  marginLeft: "40px",
                  border: "1px solid lightgrey",
                  padding: "5px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // gap: "30px",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontSize: "22px", fontWeight: 600 }}
              >
                {form.product}
              </Typography>
              <Divider sx={{ margin: "10px 0 20px" }} />

              {/* <Box
              sx={{
                display: "flex",
                gap: "80px",
                marginBottom: "10px",
              }}
            >
              <Typography sx={{ fontSize: "16px" }}>product:</Typography>
              <Typography sx={{ fontSize: "16px" }}>
                {order.product._id}
              </Typography>
            </Box> */}
              <Box
                sx={{
                  display: "flex",
                  gap: "80px",
                  marginBottom: "10px",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>name:</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {cartItems.product}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "80px",
                  marginBottom: "10px",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>quantity:</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {cartItems.length}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "10px",
                  gap: "80px",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>total:</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {form.totalOrderPrice}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "10px",
                  gap: "80px",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>date:</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {form.createdAt.slice(0, 10)}
                </Typography>
              </Box>
              {/* <Box
            sx={{
              display: "flex",
              gap: "80px",
            }}
          >
            <Typography sx={{ fontSize: "16px" }}>status:</Typography>
            {
              form.isDelivered && (
                <Box>
                  <select name={form.status}>
                    <option value={form.status}>Canceled</option>
                    <option value="Pending">Pending</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                  <Typography sx={{ fontSize: "16px" }}>{form.status}</Typography>
                  <Button>
                    <Link to={`/orders/${orderDetailsId}`}>
                      <EditIcon sx={{ color: "#336CDA" }} />
                    </Link>
                  </Button>
                </Box>
              )
              // ?
              //   console.log("Hello")
              // : console.log("Deliered")}
            }
          </Box> */}
              {/* <select
          value={selectedValue}
          onChange={(event) => handleChange(event)}
          >
            {selectedValue.map((val) => (
              <option value={val.status} key={val.id}>
                {val.status}
              </option>
            ))} 
          </select>*/}
              <Formik>
                <Form onSubmit={handleSubmit}>
                  <Field
                    name={selectedValue.status}
                    id={selectedValue.status}
                    as="select"
                  >
                    {selectedValue.map((val) => (
                      <option value={val.status} key={val.id}>
                        {val.status}
                      </option>
                    ))}
                    {/* <option value="accepted">accepted</option>
                <option value="delivered">delivered</option> */}
                  </Field>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      width: "20px",
                      // fontSize: "14px",
                      // textTransform: "capitalize",
                      marginTop: "30px",
                      background: "#133A5E",
                      "&:hover": { backgroundColor: "#FF9934" },
                    }}
                  >
                    change
                    {/* <EditIcon /> */}
                  </Button>
                </Form>
              </Formik>
              {/* {selectedValue.map((valuee) => (
              <option>{valuee.status}</option>
            ))} */}
              <Button
                onClick={goBack}
                sx={{
                  background: "#ff9934",
                  width: "110px",
                  height: "28px",
                  borderRadius: "5px",
                  padding: "16px 0",
                  marginTop: "30px",
                  color: "white",
                  fontSize: "15px",
                  "&:hover": {
                    backgroundColor: "#F88E25",
                  },
                }}
              >
                Go back
              </Button>
            </Box>
          </Box>
          {/* })}} */}
        </Box>
      </Box>
    </Box>
  );
}

export default OrderDetails;
