import { useState, useEffect } from "react";
import { Typography, InputBase, Box, Button } from "@mui/material";
import Side from "../components/global/Sidebar";
import Topbar from "../components/global/Topbar";
import { Formik, Form, Field } from "formik";

function Setting() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  useEffect(() => {
    async function EditProfile() {
      setForm({
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
      });
    }
    EditProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEditProduct = () => {
    {
      products.map((product) =>
        product._Id === product.id ? { ...product } : product
      );
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    await axios.put(
      {
        name: form.name,
        email: form.email,
      },
      config
    );
    handleEditProduct();
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
          <Formik>
            <Form onSubmit={handleEdit}>
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
              {/* <Box
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
            <Typography sx={{ ml: 2, mr: 5, fontSize: "16px" }}>
              Address
            </Typography>
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
          </Box> */}
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
            </Form>
          </Formik>
        </Box>
      </Box>
    </Box>
  );
}

export default Setting;
