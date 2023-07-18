import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  CardMedia,
  Divider,
  Typography,
  Breadcrumbs,
  useTheme,
} from "@mui/material";
import Topbar from "../components/global/Topbar";
import Side from "../components/global/Sidebar";
import { tokens } from "../utils/Theme";

function Profile() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    profileImg: null,
  });

  const [admin, setAdmin] = useState({});

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/setting");
  };

  useEffect(() => {
    const getUser = () => {
      axios
        .get("https://furnival.onrender.com/users/getMe", config)
        .then((response) => {
          setAdmin(response.data.data);
          setForm({
            name: response.data.data.name,
            email: response.data.data.email,
            profileImg: response.data.data.profileImg,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUser();
  }, []);
  return (
    <>
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
              <Typography
                sx={{ textDecoration: "none" }}
                color="#FF9934"
                s
                aria-current="page"
              >
                Profile
              </Typography>
            </Breadcrumbs>
            <Box
              sx={{
                width: "650px",
                height: "330px",
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
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontSize: "22px", fontWeight: 600 }}
                >
                  Hello, I am {form.name}
                </Typography>
                <Divider sx={{ margin: "10px 0 20px" }} />
                <Box
                  sx={{
                    display: "flex",
                    marginBottom: "10px",
                    gap: "80px",
                  }}
                >
                  <Typography sx={{ fontSize: "16px" }}>Name:</Typography>
                  <Typography sx={{ fontSize: "16px" }}>{form.name}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    marginBottom: "10px",
                    gap: "80px",
                  }}
                >
                  <Typography sx={{ fontSize: "16px" }}>Email:</Typography>
                  <Typography sx={{ fontSize: "16px" }}>
                    {form.email}
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
                  Edit profile
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Profile;
