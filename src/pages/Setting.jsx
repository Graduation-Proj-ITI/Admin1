import { Typography, InputBase, Box, Button } from "@mui/material";

function Setting() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "20px",
      }}
    >
      <Typography
        component="h1"
        sx={{ fontSize: "22px", fontWeight: 600, marginBottom: "30px" }}
      >
        Update information
      </Typography>
      <Box
        backgroundColor="#F8F7F6"
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
        <Box backgroundColor="#F8F7F6" sx={{ borderRadius: "12px", ml: 3 }}>
          <InputBase
            sx={{
              width: "500px",
              height: "45px",
              ml: 2,
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "16px",
            }}
            value="Brian"
          />
        </Box>
      </Box>
      <Box
        backgroundColor="#F8F7F6"
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "15px",
          width: "750px",
        }}
        p={3}
      >
        <Typography sx={{ ml: 2, mr: 9, fontSize: "16px" }}>Email </Typography>
        <Box backgroundColor="#F8F7F6" sx={{ ml: 1, borderRadius: "12px" }}>
          <InputBase
            sx={{
              width: "500px",
              height: "45px",
              ml: 2,
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "16px",
            }}
            value="brian@gmail.com"
          />
        </Box>
      </Box>
      <Box
        backgroundColor="#F8F7F6"
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
        <Box backgroundColor="#F8F7F6" sx={{ ml: 3, borderRadius: "12px" }}>
          <InputBase
            sx={{
              width: "500px",
              height: "45px",
              ml: 2,
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "16px",
            }}
            value="Egypt"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "130px",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "120px",
            fontSize: "16px",
            textTransform: "capitalize",
            background: "#133A5E",
            "&:hover": { backgroundColor: "#FF9934" },
          }}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
}

export default Setting;
