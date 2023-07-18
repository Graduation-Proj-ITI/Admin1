import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";
import { Box, Button, Typography, Breadcrumbs, useTheme } from "@mui/material";
import { Formik, Form, Field } from "formik";
import Side from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { tokens } from "../../utils/Theme";

function EditPost() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [loading, setLoading] = useState(false);
  const [blogContent, setBlogContent] = useState(false);
  const [isEditBlog, setIsEditBlog] = useState(false);
  const { posts } = useBlogs();
  const { blogId } = useParams();

  const [form, setForm] = useState({
    title: "",
    content: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleAdding = () => setIsEditBlog((show) => !show);
  const handleLoading = () => setLoading((show) => !show);

  useEffect(() => {
    async function fetchPostById() {
      const { data } = await axios.get(
        `https://furnival.onrender.com/blogs/${blogId}`
      );
      setForm({
        title: data.data.title,
        content: data.data.content,
        image: data.data.image,
      });
    }
    fetchPostById();
  }, [blogId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEditPost = () => {
    {
      posts.map((post) => (post._id === post.id ? { ...post } : post));
    }
  };

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `https://furnival.onrender.com/blogs/${blogId}`,
        {
          title: form.title,
          content: form.content,
          image: form.image,
        },
        config
      );
      handleEditPost(data);
      setLoading(false);
      setBlogContent(true);

      if (setBlogContent) {
        setTimeout(() => {
          navigate("/allBlogs");
        }, 1800);
      }
    } catch (error) {
      if (!isEditBlog) {
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
      }}
    >
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <Side />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "80vw" }}>
        <Topbar />
        <Box sx={{ marginLeft: "20px" }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "10px" }}>
            <Typography sx={{ textDecoration: "none" }}>Home</Typography>
            <Typography sx={{ textDecoration: "none" }}>Blogs</Typography>
            <Typography
              sx={{ textDecoration: "none" }}
              color="#FF9934"
              aria-current="page"
            >
              Edit blog
            </Typography>
          </Breadcrumbs>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Box>
              {blogContent && (
                <Alert
                  severity="success"
                  sx={{ width: "20vw", fontSize: "16px" }}
                >
                  Blog updated successfully!
                </Alert>
              )}
            </Box>
          </Box>
          <Formik>
            <Form onSubmit={handleEdit}>
              <Box
                sx={{
                  backgroundColor: colors.primary[400],
                  display: "flex",
                  alignItems: "center",
                  p: 2,
                  borderRadius: "10px 10px 0 0",
                  width: "800px",
                  height: "90px",
                  marginBottom: "20px",
                }}
              >
                <Box display="flex" mr={8}>
                  <Typography
                    sx={{ ml: 2.6, mr: 0, fontSize: "18px" }}
                    htmlFor="name"
                  >
                    Title
                  </Typography>
                  <Typography sx={{ fontSize: "24px", color: "red" }}>
                    *
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
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
                  backgroundColor: colors.primary[400],
                  display: "flex",
                  p: 2,
                  borderRadius: "0 0 10px 10px",
                  width: "800px",
                  height: "fit-content",
                  marginBottom: "20px",
                }}
              >
                <Box display="flex" mr={6}>
                  <Typography
                    sx={{ ml: 1, mr: 0, fontSize: "18px" }}
                    htmlFor="content"
                  >
                    Content
                  </Typography>
                  <Typography sx={{ fontSize: "24px", color: "red" }}>
                    *
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "fit-content",
                  }}
                >
                  <Field
                    as="textarea"
                    id="content"
                    name="content"
                    value={form.content}
                    onChange={handleChange}
                    style={{
                      width: "580px",
                      minHeight: "130px",
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
                  backgroundColor: colors.primary[400],
                  display: "flex",
                  p: 2,
                  marginBottom: "20px",
                  width: "800px",
                  height: "90px",
                }}
              >
                <Box display="flex" mr={7.6}>
                  <Typography
                    sx={{ ml: 1, mr: 0, fontSize: "18px" }}
                    htmlFor="images"
                  >
                    Image
                  </Typography>
                  <Typography sx={{ fontSize: "24px", color: "red" }}>
                    *
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Field
                    type="file"
                    id="image"
                    name="image"
                    // value={form.image}
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
              <Box>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    width: "150px",
                    fontSize: "16px",
                    textTransform: "capitalize",
                    marginTop: "30px",
                    background: "#133A5E",
                    "&:hover": { backgroundColor: "#FF9934" },
                  }}
                  onClick={(e) => {
                    handleLoading();
                  }}
                >
                  {loading ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    "Save changes"
                  )}
                </Button>
              </Box>
            </Form>
          </Formik>
        </Box>
      </Box>
    </Box>
  );
}

export default EditPost;
