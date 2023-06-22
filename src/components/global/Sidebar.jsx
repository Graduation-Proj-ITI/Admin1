import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Box, useTheme, Typography, CardMedia, Button } from "@mui/material";
import { tokens } from "../../utils/Theme";
import LogoutIcon from "@mui/icons-material/Logout";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";

function Side() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <Box>
      <Sidebar
        // backgroundColor="#EEEEEE"
        backgroundColor={colors.primary[400]}
        style={{
          height: "100vh",
          // bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "260px",
          borderRight: "none",
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
              <MenuItem component={<Link to="/dashboard" />}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <GridViewRoundedIcon />
                  <Typography>Overview</Typography>
                </Box>
              </MenuItem>
              {/* </Box> */}
              <SubMenu label="Products">
                {/* <NavLink exact to="/allProducts" activeClassName="active">
                  All products
                </NavLink> */}
                {/* </MenuItem> */}
                <MenuItem component={<NavLink to="/allProducts"></NavLink>}>
                  All Products
                </MenuItem>
                <MenuItem component={<NavLink to="/topProducts"></NavLink>}>
                  Top products
                </MenuItem>
                {/* <MenuItem component={<NavLink to="/addProduct"></NavLink>}>
                Add product
              </MenuItem> */}
              </SubMenu>

              <MenuItem component={<Link to="/orders" />}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <LocalShippingRoundedIcon />
                  <Typography>Orders</Typography>
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
                {/* <CategoryRoundedIcon /> */}
                <SubMenu label="Categories">
                  <MenuItem component={<NavLink to="/allCategories"></NavLink>}>
                    All categories
                  </MenuItem>
                  <MenuItem component={<NavLink to="/topCategories"></NavLink>}>
                    Top categories
                  </MenuItem>
                  {/* <MenuItem component={<NavLink to="/addCategory"></NavLink>}>
                Add category
              </MenuItem> */}
                </SubMenu>
              </Box>
              <MenuItem component={<Link to="/users" />}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <PeopleAltRoundedIcon />
                  <Typography>Users</Typography>
                </Box>
              </MenuItem>
              <MenuItem component={<Link to="/message" />}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <MailIcon />
                  <Typography>Messages</Typography>
                </Box>
              </MenuItem>
              <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                {/* <PhotoAlbumIcon /> */}
                <SubMenu label="Blogs">
                  <MenuItem component={<NavLink to="/allBlogs"></NavLink>}>
                    All blogs
                  </MenuItem>
                  <MenuItem component={<NavLink to="/addBlog"></NavLink>}>
                    Add blog
                  </MenuItem>
                </SubMenu>
              </Box>
              <MenuItem component={<Link to="/report" />}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <ShowChartIcon />
                  <Typography>Report</Typography>
                </Box>
              </MenuItem>
              <MenuItem component={<Link to="/setting" />}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <SettingsIcon />
                  <Typography>Setting</Typography>
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
            marginTop: "100px",
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
