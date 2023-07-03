import useUsers from "../../hooks/useUsers";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  Typography,
  Breadcrumbs,
  Link,
} from "@mui/material";
import Topbar from "../../components/global/Topbar";
import Side from "../../components/global/Sidebar";
import { tokens } from "../../utils/Theme";

function UserDetails() {
  const { userId } = useParams();
  const [form, setForm] = useState({
    image: "",
    name: "",
    email: "",
    location: "",
    phone: "",
    status: "",
    profileImg: "",
    active: "",
  });

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/users");
  };

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    async function fetchPostById() {
      const { data } = await axios.get(
        `https://furnival.onrender.com/users/${userId}`,
        config
      );
      // console.log(data);
      setForm({
        image: data.data.image,
        name: data.data.name,
        email: data.data.email,
        phone: data.data.phone,
        location: data.data.location,
        status: data.data.status,
        profileImg: data.data.profileImg,
        active: data.data.active,
      });
    }
    fetchPostById();
  }, [userId]);

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
            <Link sx={{ textDecoration: "none" }}>Users</Link>
            <Link
              // underline="hover"
              sx={{ textDecoration: "none" }}
              color="#FF9934"
              // href="/material-ui/react-breadcrumbs/"
              aria-current="page"
            >
              User Details
            </Link>
          </Breadcrumbs>
          <Box
            sx={{
              width: "650px",
              height: "330px",
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
                src={form.profileImg}
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
                {form.name}
              </Typography>
              <Divider sx={{ margin: "10px 0 20px" }} />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "80px",
                  marginBottom: "10px",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>email:</Typography>
                <Typography sx={{ fontSize: "16px" }}>{form.email}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "80px",
                  marginBottom: "10px",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>phone:</Typography>
                <Typography sx={{ fontSize: "16px" }}>{form.phone}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "10px",
                  gap: "80px",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>address:</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {form.location}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "80px",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>status:</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {form.active === "true" ? "Active" : "InActive"}
                </Typography>
              </Box>
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
        </Box>
      </Box>
    </Box>
  );
}

export default UserDetails;
