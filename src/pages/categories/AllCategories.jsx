import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, CardMedia, Pagination } from "@mui/material";
import axios from "axios";
import { Link, Breadcrumbs } from "@mui/material";

function AllCategories() {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;
  const totalPages = Math.ceil(categories.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const paginatedPosts = categories.slice(startIndex, endIndex);

  const handlePageChange = (e, page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          All categories
        </Link>
      </Breadcrumbs>
      <Typography
        variant="h1"
        fontSize="24px"
        fontWeight="600"
        marginBottom="20px"
      >
        All Categories
      </Typography>
      <Grid container margin="0 auto" width="1000px">
        {paginatedPosts.map((item) => (
          <Grid key={item.id} sx={{ xs: 4 }} marginBottom="60px">
            <CardMedia
              component="img"
              src={item.img}
              sx={{
                width: "300px",
                height: "200px",
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            "& .Mui-selected": {
              backgroundColor: "#133A5E",
              color: "white", // Change this to the desired color
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default AllCategories;
