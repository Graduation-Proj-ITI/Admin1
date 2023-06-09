import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
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
        // menuItemStyles={{
        //   [`&.active`]: {
        //     backgroundColor: "red",
        //     color: "#b6c8d9",
        //   },
        // }}
        >
          <Box>
            <MenuItem
              component={<Link to="/" />}
              style={{
                [`&.hover`]: {
                  backgroundColor: "red",
                  color: "#b6c8d9",
                },
              }}
            >
              Overview
            </MenuItem>
            <SubMenu label="Products">
              <MenuItem component={<Link to="/allProducts" />}>
                All products
              </MenuItem>
              <MenuItem component={<Link to="/topProducts" />}>
                Top products
              </MenuItem>
              <MenuItem component={<Link to="/addProduct" />}>
                Add product
              </MenuItem>
            </SubMenu>
            <MenuItem component={<Link to="/allOrders" />}>Orders</MenuItem>
            <SubMenu label="Categories">
              <MenuItem component={<Link to="/allCategories" />}>
                All categories
              </MenuItem>
              <MenuItem
                component={<Link to="/topCategories" />}
                style={{
                  ["&.hover"]: {
                    backgroundColor: "#FF9934",
                    color: "white",
                  },
                  // [`&.focus`]: {
                  //   backgroundColor: "red",
                  //   color: "#b6c8d9",
                  // },
                }}
              >
                Top categories
              </MenuItem>
              <MenuItem component={<Link to="/addCategory" />}>
                Add category
              </MenuItem>
            </SubMenu>
            <MenuItem component={<Link to="/users" />}> Users</MenuItem>

            <MenuItem component={<Link to="/message" />}> Messages</MenuItem>
            <SubMenu label="Blogs">
              <MenuItem component={<Link to="/allBlogs" />}>All blogs</MenuItem>
              <MenuItem component={<Link to="/addBlog" />}> Add blog </MenuItem>
            </SubMenu>
            <MenuItem component={<Link to="/report" />}> Report</MenuItem>
            <MenuItem component={<Link to="/setting" />}> Setting</MenuItem>
          </Box>
        </Menu>
        <Box sx={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <LogoutIcon />
          <Typography>Logout</Typography>
        </Box>
      </Sidebar>
    </Box>
  );
}

export default Side;
