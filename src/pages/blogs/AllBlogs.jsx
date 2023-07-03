import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  CardMedia,
  Typography,
  Pagination,
  Breadcrumbs,
  Button,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import useBlogs from "../../hooks/useBlogs";
import Side from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";
import CircularProgress from "@mui/material/CircularProgress";

const AllBlogs = () => {
  const { posts, setPosts } = useBlogs();
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 2;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const paginatedPosts = posts.slice(startIndex, endIndex);

  const handlePageChange = (e, page) => {
    setCurrentPage(page);
  };

  function handleDelete(postId) {
    axios
      .delete(`https://furnival.onrender.com/blogs/${postId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const updatedBlogPosts = posts.filter((post) => post._id !== postId);
        setPosts(updatedBlogPosts);
      });
  }

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
        <Box margin="0 0 20px 20px">
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "10px" }}>
            <Typography sx={{ textDecoration: "none" }}>Home</Typography>
            <Typography
              sx={{ textDecoration: "none" }}
              color="#FF9934"
              aria-current="page"
            >
              All blogs
            </Typography>
          </Breadcrumbs>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="h1"
              sx={{ fontSize: "22px", fontWeight: 600, marginBottom: "20px" }}
            >
              All Blogs
            </Typography>
            <Link to="/addBlog">
              <Button
                variant="contained"
                sx={{
                  margin: "0 410px 15px 0",
                  backgroundColor: "#133A5E",
                  "&:hover": {
                    backgroundColor: "#FF9934",
                  },
                }}
              >
                Add Blog
              </Button>
            </Link>
          </Box>
          {posts.length === 0 ? (
            <CircularProgress sx={{ margin: "100px 0 0 370px" }} />
          ) : (
            <Box>
              {" "}
              {paginatedPosts.map((post) => (
                <Box
                  key={post._id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    width: "800px",
                    // margin: "0 auto",
                    marginBottom: "40px",
                    border: "1px solid lightgrey",
                  }}
                >
                  <Box>
                    <CardMedia
                      component="img"
                      src={post.image}
                      sx={{ width: "300px", height: "220px" }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: "22px",
                          fontWeight: 600,
                          marginBottom: "5px",
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Link to={`/blogs/${post._id}`}>
                        <EditIcon
                          sx={{ color: "#336CDA", margin: "0 10px" }}
                          // onClick={() => edit(post.id)}
                        />
                      </Link>
                      <DeleteForeverIcon
                        sx={{ color: "red", marginRight: "10px" }}
                        onClick={() => handleDelete(post._id)}
                      />
                    </Box>
                    <Box>
                      <Typography marginBottom="15px">
                        {post.createdAt.slice(0, 10)}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="body"
                        sx={{ fontSize: "16px", fontWeight: 200 }}
                      >
                        {post.content}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  sx={{
                    "& .Mui-selected": {
                      backgroundColor: "#FF9934",
                      color: "white",
                    },
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AllBlogs;
