import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";
import { Box, Button, Typography, Breadcrumbs, Link  } from "@mui/material";
import { Formik, Form, Field } from "formik";

function EditPost() {
  const { posts } = useBlogs();
  const { id } = useParams();

  const navigate = useNavigate(); 

  const [form, setForm] = useState({
    title: "",
    description: "",
    // img: "",
  });

  useEffect(() => {
    async function fetchPostById() {
      const { data } = await axios.get(`http://localhost:3000/posts/${id}`);
      setForm({
        title: data.title,
        description: data.description,
        // img: data.img,
      });
    }
    fetchPostById();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEditPost = () => {
    {
      posts.map((post) => (post.id === post.id ? { ...post } : post));
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const { data } = await axios.put(`http://localhost:3000/posts/${id}`, {
      title: form.title,
      description: form.description,
      // img: form.img,
    });
    handleEditPost(data);
  };

  return (
    <>
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
                htmlFor="title"
              >
                Title
              </Typography>
              <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
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
            <Box display="flex" mr={3.2}>
              <Typography
                sx={{ ml: 1, mr: 0, fontSize: "18px" }}
                htmlFor="description"
              >
                Description
              </Typography>
              <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
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
                id="description"
                name="description"
                value={form.description}
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
            <Box display="flex" mr={8}>
              <Typography
                sx={{ ml: 1, mr: 0, fontSize: "18px" }}
                htmlFor="image"
              >
                Image
              </Typography>
              <Typography sx={{ fontSize: "24px", color: "red" }}>*</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Field
                type="file"
                id="image"
                name="image"
                value={form.img}
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
    </>
  );
}

export default EditPost;
