import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, NavLink } from "react-router-dom";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../utils/Theme";
import LogoutIcon from "@mui/icons-material/Logout";

function Side() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box height="100vh">
      <Sidebar
        // backgroundColor="#EEEEEE"
        backgroundColor={colors.primary[400]}
        style={{
          height: "100%",
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
            <MenuItem
              component={<Link to="/dashboard" />}
              // style={{
              //   [`&.hover`]: {
              //     backgroundColor: "red",
              //     color: "#b6c8d9",
              //   },
              // }}
            >
              Overview
            </MenuItem>
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
              <MenuItem component={<NavLink to="/addProduct"></NavLink>}>
                Add product
              </MenuItem>
            </SubMenu>
            <MenuItem component={<Link to="/allOrders" />}>Orders</MenuItem>
            <SubMenu label="Categories">
              <MenuItem component={<NavLink to="/allCategories"></NavLink>}>
                All categories
              </MenuItem>
              <MenuItem component={<NavLink to="/topCategories"></NavLink>}>
                Top categories
              </MenuItem>
              <MenuItem component={<NavLink to="/addCategory"></NavLink>}>
                Add category
              </MenuItem>
            </SubMenu>
            <MenuItem component={<Link to="/users" />}> Users</MenuItem>

            <MenuItem component={<Link to="/message" />}> Messages</MenuItem>
            <SubMenu label="Blogs">
              <MenuItem component={<NavLink to="/allBlogs"></NavLink>}>
                All blogs
              </MenuItem>
              <MenuItem component={<NavLink to="/addBlog"></NavLink>}>
                Add blog
              </MenuItem>
            </SubMenu>
            <MenuItem
              component={<Link to="/report" />}
              style={{ "&:hover": { color: "blue" } }}
            >
              Report
            </MenuItem>
            <MenuItem component={<Link to="/setting" />}> Setting</MenuItem>
          </Box>
        </Menu>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            margin: "240px 0 20px",
            cursor: "pointer",
          }}
        >
          <LogoutIcon sx={{ marginLeft: "25px", color: "#DA2121" }} />
          <Typography
            variant="h5"
            fontSize="20px"
            fontWeight="450"
            sx={{ color: "#DA2121" }}
          >
            Logout
          </Typography>
        </Box>
      </Sidebar>
    </Box>
  );
}

export default Side;
