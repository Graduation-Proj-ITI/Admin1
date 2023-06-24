import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";
import { Box, Button, Typography, Breadcrumbs, Link } from "@mui/material";
import { Formik, Form, Field } from "formik";
import Side from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";

function EditPost() {
  const { posts } = useBlogs();
  const { blogId } = useParams();

  const [form, setForm] = useState({
    title: "",
    content: "",
    images: [],
  });

  useEffect(() => {
    async function fetchPostById() {
      const { data } = await axios.get(
        `https://furnival.onrender.com/blogs/${blogId}`
      );
      console.log(data);
      setForm({
        title: data.data.title,
        content: data.data.content,
        images: data.data.images,
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
    const { data } = await axios.put(
      `https://furnival.onrender.com/blogs/${blogId}`,
      {
        title: form.title,
        content: form.content,
        images: form.images,
      },
      config
    );
    handleEditPost(data);
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
        <Box sx={{ marginLeft: "20px" }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "10px" }}>
            <Link sx={{ textDecoration: "none" }}>Home</Link>
            <Link sx={{ textDecoration: "none" }}>Blogs</Link>
            <Link
              // underline="hover"
              sx={{ textDecoration: "none" }}
              color="#FF9934"
              // href="/material-ui/react-breadcrumbs/"
              aria-current="page"
            >
              Edit blog
            </Link>
          </Breadcrumbs>
          <Formik>
            <Form onSubmit={handleEdit}>
              <Box
                sx={{
                  backgroundColor: "#F8F7F6",
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
                  backgroundColor: "#F8F7F6",
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
                  backgroundColor: "#F8F7F6",
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
                    htmlFor="image"
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
                    value={form.images[0]}
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
                >
                  Save changes
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
