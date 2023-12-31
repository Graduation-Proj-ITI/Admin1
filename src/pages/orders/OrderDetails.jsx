import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  CardMedia,
  Typography,
  Breadcrumbs,
  useTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Topbar from "../../components/global/Topbar";
import Side from "../../components/global/Sidebar";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { tokens } from "../../utils/Theme";

function OrderDetails() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { orderDetailsId } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState([]);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(false);
  const [selectedValue, setSelectedValue] = useState([
    { id: 1, status: "Pending" },
    { id: 3, status: "Delivered" },
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
      // console.log(data);
      setCartItems(data.data.cartItems[0].product.imageCover);
      setCartItemsCount(data.data.cartItems.length);
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
    fetchPostById();
  }, [orderDetailsId]);
  const initialValues = {
    status: "",
  };

  const handleSubmit = async (values) => {
    try {
      const res = await axios.put(
        `https://furnival.onrender.com/orders/${orderDetailsId}/deliver`,
        {
          values,
        },
        config
      );
      setLoading(false);
      setContent(true);
      if (setContent) {
        setTimeout(() => {
          navigate("/orders");
        }, 1800);
      }
    } catch (error) {
      console.log(error);
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
        <Box sx={{ marginLeft: "20px" }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "10px" }}>
            <Typography sx={{ textDecoration: "none" }}>Home</Typography>
            <Typography sx={{ textDecoration: "none" }}>Orders</Typography>
            <Typography
              sx={{ textDecoration: "none", color: "#FF9934" }}
              aria-current="page"
            >
              Order Details
            </Typography>
          </Breadcrumbs>
          <Box>
            {content && (
              <Alert
                severity="success"
                sx={{ width: "20vw", fontSize: "16px" }}
              >
                Status added successfully!
              </Alert>
            )}
          </Box>
          <Box
            sx={{
              width: "650px",
              height: "300px",
              // backgroundColor: "#f2f0f0",
              backgroundColor: colors.primary[400],
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
                src={cartItems}
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
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontSize: "22px", fontWeight: 600 }}
              >
                {form.product}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "55px",
                  marginBottom: "10px",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>quantity:</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {cartItemsCount}
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "70px",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>status:</Typography>
                {form.status === "delivered" ? (
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <Typography sx={{ fontSize: "16px", color: "green" }}>
                      delivered
                    </Typography>
                    <TaskAltIcon sx={{ fontSize: "16px", color: "green" }} />
                  </Box>
                ) : form.status === "canceled" ? (
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                  >
                    <Typography sx={{ fontSize: "16px", color: "red" }}>
                      canceled
                    </Typography>
                    <CancelIcon sx={{ fontSize: "16px", color: "red" }} />
                  </Box>
                ) : (
                  <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form>
                      <select
                        name={selectedValue.status}
                        id={selectedValue.status}
                        style={{
                          width: "120px",
                          height: "35px",
                          border: "none",
                        }}
                      >
                        {selectedValue.map((val) => (
                          <option value={val.status} key={val.id}>
                            {val.status}
                          </option>
                        ))}
                      </select>
                      <Button
                        variant="outlined"
                        type="submit"
                        sx={{
                          width: "5px",
                          // marginTop: "30px",
                          marginLeft: "20px",
                          color: colors.greenAccent[900],
                          // "&:hover": { backgroundColor: "#FF9934" },
                        }}
                      >
                        {loading ? (
                          <CircularProgress color="inherit" />
                        ) : (
                          <EditIcon />
                        )}
                      </Button>
                    </Form>
                  </Formik>
                )}
              </Box>
              <Button
                onClick={goBack}
                sx={{
                  background: "#ff9934",
                  width: "110px",
                  height: "28px",
                  borderRadius: "5px",
                  padding: "16px 0",
                  marginTop: "20px",
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
        </Box>
      </Box>
    </Box>
  );
}

export default OrderDetails;
