import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { tokens } from "../utils/Theme";

function Login() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [AlertContent, setAlertContent] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleLogin = () => setIsLogin((show) => !show);

  const handleLoading = () => setLoading((show) => !show);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://furnival.onrender.com/auth/login",
        login
      );
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.data.name);
      localStorage.setItem("email", data.data.email);
      localStorage.setItem("profileImg", data.data.profileImg);
      // console.log(data.data);

      navigate("/dashboard", { replace: true });
    } catch (e) {
      if (!isLogin) {
        handleLogin();
      }
      handleLoading();

      if (typeof e.response.data.message !== "object")
        setAlertContent(e.response.data.message);
      else setAlertContent(e.response.data.message[0]);
      //   console.log(e.response.data.message);
    }
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#133A5E",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#133A5E",
          borderRadius: "15px",
          width: "42vw",
          height: "58vh",
          boxShadow: "0px 10px 15px 0px #052440",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "30px",
          }}
        >
          <CardMedia
            component="img"
            src="../src/assets/logoo.png"
            sx={{ width: "35px" }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: "35px",
              fontWeight: 550,
              color: "white",
            }}
          >
            Furnival
          </Typography>
        </Box>
        <Typography
          variant="body"
          sx={{ fontSize: "14px", marginTop: "3px", color: "white" }}
        >
          Make Your Dream Home True
        </Typography>
        <Box sx={{ marginTop: "40px" }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "22px",
              }}
            >
              {isLogin ? (
                <Alert severity="error" color="error">
                  {AlertContent}
                </Alert>
              ) : (
                ""
              )}
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="standard"
                color="secondary"
                value={login.email}
                onChange={handleChange}
                sx={{ width: "18vw" }}
              />
              <FormControl variant="standard" className="mt-3">
                <InputLabel color="secondary">Password</InputLabel>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  sx={{ width: "18vw" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff
                            sx={{ fontSize: "18px", marginRight: "8px" }}
                          />
                        ) : (
                          <Visibility
                            sx={{ fontSize: "18px", marginRight: "8px" }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  color="secondary"
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                />
              </FormControl>

              <Button
                variant="contained"
                type="submit"
                sx={{
                  color: "#133A5E",
                  width: "18vw",
                  fontSize: "18px",
                  fontWeight: 550,
                  textTransform: "capitalize",
                  margin: "25px 0 20px",
                  background: "#FF9934",
                  "&:hover": { backgroundColor: "#F88E25" },
                }}
                onClick={(e) => {
                  handleLoading();
                  handleSubmit(e);
                }}
              >
                {loading ? <CircularProgress color="inherit" /> : "Sign in"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
