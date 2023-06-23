import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  CardMedia,
  Pagination,
  Button,
} from "@mui/material";
import axios from "axios";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import Side from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";

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
      .get("https://furnival.onrender.com/categories")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h1"
              fontSize="24px"
              fontWeight="600"
              marginBottom="20px"
            >
              All Categories
            </Typography>
            <Link to="/addCategory">
              <Button
                variant="contained"
                sx={{
                  margin: "0 375px 15px 0",
                  backgroundColor: "#133A5E",
                  "&:hover": {
                    backgroundColor: "#FF9934",
                  },
                }}
              >
                Add Category
              </Button>
            </Link>
          </Box>
          <Grid container margin="0 auto" width="1000px">
            {paginatedPosts.map((item) => (
              <Grid key={item._id} sx={{ xs: 4 }} marginBottom="60px">
                <CardMedia
                  component="img"
                  src={item.image}
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
      </Box>
    </Box>
  );
}

export default AllCategories;
