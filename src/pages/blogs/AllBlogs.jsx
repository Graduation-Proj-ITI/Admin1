import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  CardMedia,
  Typography,
  Pagination,
  Breadcrumbs,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import useBlogs from "../../hooks/useBlogs";

const AllBlogs = () => {
  const { posts, setPosts } = useBlogs();
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const paginatedPosts = posts.slice(startIndex, endIndex);

  const handlePageChange = (e, page) => {
    setCurrentPage(page);
  };

  function handleDelete(postId) {
    axios.delete(`http://localhost:3000/posts/${postId}`).then((res) => {
      const updatedBlogPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedBlogPosts);
    });
  }

  return (
    <Box margin="0 0 20px 20px">
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "10px" }}>
        <Link sx={{ textDecoration: "none" }}>Home</Link>
        <Link sx={{ textDecoration: "none" }}>Categories</Link>
        <Link
          // underline="hover"
          sx={{ textDecoration: "none" }}
          color="#FF9934"
          // href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          All blogs
        </Link>
      </Breadcrumbs>
      <Typography
        variant="h1"
        fontSize="24px"
        fontWeight="600"
        marginBottom="20px"
      >
        All Blogs
      </Typography>
      {posts.length == 0 ? <h1>There is no posts yet</h1> : ""}

      {paginatedPosts.map((post) => (
        <Box
          key={post.id}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            width: "800px",
            margin: "0 auto",
            marginBottom: "40px",
            border: "1px solid lightgrey",
          }}
        >
          <Box>
            <CardMedia
              component="img"
              src={post.img}
              sx={{ width: "300px", height: "220px" }}
            />
          </Box>
          <Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h4"
                sx={{ fontSize: "22px", fontWeight: 600, marginBottom: "20px" }}
              >
                {post.title}
              </Typography>
              <Link to={`/blogs/${post.id}`}>
                <EditIcon
                  sx={{ color: "blue", margin: "0 10px" }}
                  // onClick={() => edit(post.id)}
                />
              </Link>
              <DeleteForeverIcon
                sx={{ color: "red", marginRight: "10px" }}
                onClick={() => handleDelete(post.id)}
              />
            </Box>
            <Typography
              variant="body"
              sx={{ fontSize: "16px", fontWeight: 200 }}
            >
              {post.description}
            </Typography>
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
              backgroundColor: "#133A5E",
              color: "white",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default AllBlogs;
