import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../utils/Theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../global/Header";
import { Link } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" flexDirection="column" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" justifyContent="space-between">
        {/* <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="16px"
          padding="6px"
        >
          <SearchIcon
            sx={{
              color: colors.greenAccent[600],
              p: 1,
              fontSize: "40px",
              ml: 1,
            }}
          />
          <InputBase
            sx={{ ml: 1.5, flex: 1, width: "450px" }}
            placeholder="Search here..."
          />
        </Box> */}

        {/* ICONS */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header
            title="Hey there, Brian Ford!"
            subtitle="Welcome back to your all in Dashboard!"
          />
        </Box>
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton>
            {/* <Link  to="/setting" /> */}
            <PersonOutlinedIcon />
            {/* </Link> */}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
