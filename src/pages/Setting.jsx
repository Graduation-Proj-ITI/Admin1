import { useState, useEffect } from "react";
import { Typography, Breadcrumbs, Box, Button, Alert } from "@mui/material";
import Side from "../components/global/Sidebar";
import Topbar from "../components/global/Topbar";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

function Setting() {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(false);
  const [isEditInfo, setIsEditInfo] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    profileImg: null,
  });

  const navigate = useNavigate();

  const handleAdding = () => setIsEditInfo((show) => !show);
  const handleLoading = () => setLoading((show) => !show);

  const [admin, setAdmin] = useState({});

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  useEffect(() => {
    const getUser = () => {
      axios
        .get("https://furnival.onrender.com/users/getMe", config)
        .then((response) => {
          setAdmin(response.data.data);
          setForm({
            name: response.data.data.name,
            email: response.data.data.email,
            profileImg: response.data.data.profileImg,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUser();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = async (e) => {
    let formData = {};
    if (form.email.trim() == admin.email.trim()) {
      formData = {
        name: form.name,
      };
    } else {
      formData = {
        name: form.name,
        email: form.email,
        profileImg: form.profileImg,
      };
    }
    try {
      axios
        .put("https://furnival.onrender.com/users/updateMe", formData, config)
        .then((response) => {
          setAdmin(response.data.data);
          setLoading(false);
          setContent(true);
          if (setContent) {
            setTimeout(() => {
              navigate("/profile");
            }, 2500);
          }
        });
    } catch (error) {
      if (!isEditInfo) {
        handleAdding();
      }
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridAutoRows: "45px",
        // gap:"20px"
      }}
    >
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <Side />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "80vw" }}>
        <Topbar />
        <Breadcrumbs aria-label="breadcrumb" sx={{ margin: "0 0 10px 20px" }}>
          <Typography sx={{ textDecoration: "none" }}>Home</Typography>
          <Typography
            sx={{
              textDecoration: "none",
              color: "#FF9934",
              ariaCurrent: "page",
            }}
          >
            Setting
          </Typography>
        </Breadcrumbs>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="h1"
              sx={{ fontSize: "22px", fontWeight: 600, marginBottom: "30px" }}
            >
              Update information
            </Typography>
            <Box>
              {content && (
                <Alert
                  severity="success"
                  sx={{
                    width: "20vw",
                    fontSize: "18px",
                  }}
                >
                  Your info updated successfully
                </Alert>
              )}
            </Box>
          </Box>
          <Formik>
            <Form>
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
                  Name
                </Typography>
                <Box
                  backgroundColor="#F8F7F6"
                  sx={{ borderRadius: "12px", ml: 1 }}
                >
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    style={{
                      width: "580px",
                      height: "50px",
                      border: "none",
                      borderRadius: "10px",
                      outline: "1px solid lightgrey",
                      padding: "16px",
                    }}
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
                <Typography sx={{ ml: 1, mr: 3, fontSize: "16px" }}>
                  Email
                </Typography>
                <Box
                  backgroundColor="#F8F7F6"
                  sx={{ ml: 1, borderRadius: "12px" }}
                >
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    style={{
                      width: "580px",
                      height: "50px",
                      border: "none",
                      borderRadius: "10px",
                      outline: "1px solid lightgrey",
                      padding: "16px",
                    }}
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
                  onClick={(e) => {
                    handleEdit(e);
                    handleLoading();
                  }}
                >
                  {loading ? <CircularProgress color="inherit" /> : "Update"}
                </Button>
              </Box>
            </Form>
          </Formik>
        </Box>
      </Box>
    </Box>
  );
}

export default Setting;
