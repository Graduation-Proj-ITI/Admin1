import { Typography, InputBase, Box, useTheme, Button } from "@mui/material";
import { tokens } from "../utils/Theme";

function Setting() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "50px",
      }}
    >
      <Typography
        component="h1"
        sx={{ fontSize: "22px", fontWeight: 600, marginBottom: "30px" }}
      >
        Update information
      </Typography>
      <Box
        backgroundColor={colors.primary[400]}
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "14px 14px 0 0",
          marginBottom: "15px",
          width: "750px",
        }}
        p={3}
      >
        <Typography sx={{ ml: 1, mr: 3, fontSize: "16px" }}>
          User name
        </Typography>
        <Box
          backgroundColor={colors.grey[900]}
          sx={{ borderRadius: "12px", ml: 3 }}
        >
          <InputBase
            sx={{ width: "500px", height: "45px", ml: 2 }}
            placeholder="Brian"
          />
        </Box>
      </Box>
      <Box
        backgroundColor={colors.primary[400]}
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "15px",
          width: "750px",
        }}
        p={3}
      >
        <Typography sx={{ ml: 2, mr: 9, fontSize: "16px" }}>Email </Typography>
        <Box
          backgroundColor={colors.grey[900]}
          sx={{ ml: 1, borderRadius: "12px" }}
        >
          <InputBase
            sx={{ width: "500px", height: "45px", ml: 2 }}
            placeholder="brian@gmail.com"
          />
        </Box>
      </Box>
      <Box
        backgroundColor={colors.primary[400]}
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "15px",
          borderRadius: "0 0 12px 12px",
          width: "750px",
        }}
        p={3}
      >
        <Typography sx={{ ml: 2, mr: 5, fontSize: "16px" }}>Address</Typography>
        <Box
          backgroundColor={colors.grey[900]}
          sx={{ ml: 3, borderRadius: "12px" }}
        >
          <InputBase
            sx={{ width: "500px", height: "45px", ml: 2 }}
            placeholder="Egypt"
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{ width: "120px", fontSize: "16px", textTransform: "capitalize" }}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
}

export default Setting;
