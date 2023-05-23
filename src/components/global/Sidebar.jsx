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
      <Sidebar backgroundColor={colors.primary[400]}>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "red",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <MenuItem component={<Link to="/" />}>Overview</MenuItem>
          <SubMenu label="Products">
            <MenuItem component={<Link to="/message" />}>All products</MenuItem>
            <MenuItem> Add Order </MenuItem>
          </SubMenu>
          <SubMenu label="Orders">
            <MenuItem component={<Link to="/message" />}>All products</MenuItem>
            <MenuItem> Add Order </MenuItem>
          </SubMenu>
          <SubMenu label="Categories">
            <MenuItem component={<Link to="/message" />}>
              All categories
            </MenuItem>
            <MenuItem> Add category </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="/setting" />}> Users</MenuItem>
          <MenuItem component={<Link to="/message" />}> Messages</MenuItem>
          <SubMenu label="Blogs">
            <MenuItem component={<Link to="/message" />}>All blogs</MenuItem>
            <MenuItem> Add blog </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to="/setting" />}> Report</MenuItem>
          <MenuItem component={<Link to="/setting" />}> Setting</MenuItem>
        </Menu>
        <Box sx={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
          <LogoutIcon />
          <Typography>Logout</Typography>
        </Box>
      </Sidebar>
    </Box>
  );
}

export default Side;
