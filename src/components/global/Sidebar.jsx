import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../utils/Theme";
import LogoutIcon from "@mui/icons-material/Logout";

function Side() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Sidebar
        backgroundColor={colors.primary[400]}
        style={{
          height: "100vh",
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Menu
        // menuItemStyles={{
        //   button: {
        //     [`&.active`]: {
        //       backgroundColor: "red",
        //       color: "#b6c8d9",
        //     },
        //   },
        // }}
        >
          <Box>
            <MenuItem component={<Link to="/" />}>Overview</MenuItem>
            <SubMenu label="Products">
              <MenuItem component={<Link to="/message" />}>
                All products
              </MenuItem>
              <MenuItem component={<Link to="/addProduct" />}>
                Add product
              </MenuItem>
            </SubMenu>
            <SubMenu label="Orders">
              <MenuItem component={<Link to="/message" />}>All orders</MenuItem>
              <MenuItem> Add Order </MenuItem>
            </SubMenu>
            <SubMenu label="Categories">
              <MenuItem
                component={<Link to="/topCategories" />}
                style={{
                  "&:active": {
                    backgroundColor: "#FF9934",
                    color: "white", // Change this to the desired color
                  },
                }}
              >
                Top categories
              </MenuItem>
              <MenuItem component={<Link to="/allCategories" />}>
                All categories
              </MenuItem>
              <MenuItem component={<Link to="/addCategory" />}>
                Add category
              </MenuItem>
            </SubMenu>
            <MenuItem component={<Link to="/setting" />}> Users</MenuItem>
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
