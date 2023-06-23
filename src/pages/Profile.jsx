import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  CardMedia,
  Divider,
  Typography,
  Breadcrumbs,
  Link,
} from "@mui/material";
import Topbar from "../components/global/Topbar";
import Side from "../components/global/Sidebar";

function Profile() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/setting");
  };
  return (
    <>
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
              <Link
                sx={{ textDecoration: "none" }}
                color="#FF9934"
                // href="/material-ui/react-breadcrumbs/"
                aria-current="page"
              >
                Profile
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
                  src={localStorage.getItem("profileImg")}
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
                  Hello, I am {localStorage.getItem("name")}
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
                  <Typography sx={{ fontSize: "16px" }}>
                    {localStorage.getItem("name")}
                  </Typography>
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
                    {localStorage.getItem("email")}
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
