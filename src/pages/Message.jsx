import * as React from "react";
import { tokens } from "../utils/Theme";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Divider, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";

const messages = [
  {
    id: 1,
    primary: "User name",
    secondary: "I'll be in the neighbourhood this week...",
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 2,
    primary: "User name",
    secondary: `Do you have a suggestion for a good...`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 3,
    primary: "User name",
    secondary: "I am try out this new BBQ recipe, I think...",
    person: "/static/images/avatar/2.jpg",
  },
  {
    id: 4,
    primary: "User name",
    secondary: "I have the tickets to the ReactConf for...",
    person: "/static/images/avatar/3.jpg",
  },
  {
    id: 5,
    primary: "User name",
    secondary: "My appointment with her was delayed...",
    person: "/static/images/avatar/4.jpg",
  },
  {
    id: 6,
    primary: "User name",
    secondary: `Menus that are generated by the bottom...`,
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 7,
    primary: "User name",
    secondary: `Who wants to have a cookout this week...`,
    person: "/static/images/avatar/1.jpg",
  },
];

export default function BottomAppBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
      }}
    >
      <React.Fragment>
        <CssBaseline />

        <Paper
          square
          sx={{ pb: "50px", height: "540px", marginBottom: "10px" }}
        >
          <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
            margin="0 auto"
            marginTop="20px"
            width="280px"
          >
            <SearchIcon
              sx={{
                color: colors.greenAccent[600],
                p: 1,
                fontSize: "40px",
                ml: 1,
              }}
            />
            <InputBase sx={{ ml: 1.5, flex: 1 }} placeholder="Search here..." />
          </Box>
          <List sx={{ mb: 2, width: "300px" }}>
            {messages.map(({ id, primary, secondary }) => (
              <React.Fragment key={id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={messages.person} />
                  </ListItemAvatar>
                  <ListItemText primary={primary} secondary={secondary} />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper>
        <Paper
          square
          sx={{
            width: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "540px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Avatar
                  alt="Profile Picture"
                  src={messages.person}
                  sx={{ marginLeft: "40px" }}
                />
                <Typography>User name</Typography>
              </Box>

              <Box>
                <CloseIcon sx={{ marginRight: "40px" }} />
              </Box>
            </Box>
            <Divider variant="middle" sx={{ marginTop: "20px" }} />
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "1px solid",
                padding: "8px",
                borderRadius: "0 14px 14px 14px",
                width: "160px",
                margin: "30px 0 10px",
                marginLeft: "20px",
                borderColor: colors.greenAccent[600],
              }}
            >
              Message from user
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "1px solid",
                padding: "8px",
                borderRadius: "14px 0 14px 14px",
                width: "160px",
                marginLeft: "320px",
                borderColor: colors.greenAccent[600],
                backgroundColor: colors.greenAccent[600],
                color: "white",
              }}
            >
              Message from admin
            </Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            backgroundColor={colors.primary[400]}
            borderRadius="10px"
            width="460px"
            height="45px"
            margin="0 auto"
            marginBottom="20px"
          >
            <InputBase
              sx={{ ml: 1.5, flex: 1 }}
              placeholder="Write your message..."
            />
            <SendIcon
              sx={{
                color: colors.greenAccent[600],
                fontSize: "24px",
                mr: 1,
                cursor: "pointer",
              }}
            />
          </Box>
        </Paper>
      </React.Fragment>
    </Box>
  );
}
