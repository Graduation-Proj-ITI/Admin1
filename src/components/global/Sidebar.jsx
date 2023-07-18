import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, useTheme, Typography, CardMedia, Button } from "@mui/material";
import { tokens } from "../../utils/Theme";
import LogoutIcon from "@mui/icons-material/Logout";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CategoryIcon from "@mui/icons-material/Category";
import BookIcon from "@mui/icons-material/Book";

function Side() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <Box mr={32}>
      <Sidebar
        backgroundColor={colors.primary[400]}
        style={{
          height: "100vh",
          // bottom: 0,
          display: "flex",
          flexDirection: "column",
          width: "250px",
          borderRight: "none",
          position: "fixed",
        }}
      >
        <Menu
          menuItemStyles={{
            [`&.active`]: {
              backgroundColor: "red",
              color: "#b6c8d9",
            },
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                margin: "40px 0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  src="../src/assets/logoo.png"
                  sx={{ width: "38px" }}
                />
                <Typography
                  variant="h1"
                  sx={{ fontSize: "25px", fontWeight: 650 }}
                >
                  Furnival
                </Typography>
              </Box>
              <Typography variant="body" sx={{ fontSize: "13px" }}>
                Make Your Dream Home True
              </Typography>
            </Box>
            <Box sx={{ marginLeft: "5px" }}>
              <MenuItem
                component={<NavLink to="/dashboard"></NavLink>}
                // style={{
                //   "&:hover": {
                //     backgroundColor: colors.greenAccent[900],
                //   },
                // }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <GridViewRoundedIcon />
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 500, fontSize: "16px" }}
                  >
                    Overview
                  </Typography>
                </Box>
              </MenuItem>
              <MenuItem
                component={<NavLink to="/allProducts"></NavLink>}
                style={{ fontWeight: 500, fontSize: "16px" }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <LocalMallIcon />
                  <Typography style={{ fontWeight: 500, fontSize: "18px" }}>
                    All Products
                  </Typography>
                </Box>
              </MenuItem>
              <MenuItem component={<NavLink to="/orders"></NavLink>}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <LocalShippingRoundedIcon />
                  <Typography style={{ fontWeight: 500, fontSize: "18px" }}>
                    Orders
                  </Typography>
                </Box>
              </MenuItem>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // gap: "10px",
                }}
              >
                <MenuItem
                  component={<NavLink to="/allCategories"></NavLink>}
                  style={{ fontWeight: 500, fontSize: "18px" }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                  >
                    <CategoryIcon />
                    <Typography style={{ fontWeight: 500, fontSize: "18px" }}>
                      All categories
                    </Typography>
                  </Box>
                </MenuItem>
              </Box>
              <MenuItem component={<NavLink to="/users"></NavLink>}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <PeopleAltRoundedIcon />
                  <Typography style={{ fontWeight: 500, fontSize: "16px" }}>
                    Users
                  </Typography>
                </Box>
              </MenuItem>
              <MenuItem component={<NavLink to="/allBlogs"></NavLink>}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <BookIcon />
                  <Typography style={{ fontWeight: 500, fontSize: "16px" }}>
                    Blogs
                  </Typography>
                </Box>
              </MenuItem>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "20px" }}
              ></Box>
              <MenuItem component={<NavLink to="/setting"></NavLink>}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <SettingsIcon />
                  <Typography style={{ fontWeight: 500, fontSize: "16px" }}>
                    Setting
                  </Typography>
                </Box>
              </MenuItem>
            </Box>
          </Box>
        </Menu>

        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            margin: "0 auto",
            marginTop: "200px",
            "&:hover": { backgroundColor: "none" },
          }}
          onClick={logOut}
        >
          <LogoutIcon
            sx={{
              marginLeft: "0 auto",
              color: "#DA2121",
            }}
          />
          <Typography
            variant="h5"
            fontSize="20px"
            fontWeight="450"
            sx={{ color: "#DA2121" }}
          >
            Logout
          </Typography>
        </Button>
      </Sidebar>
    </Box>
  );
}

export default Side;
