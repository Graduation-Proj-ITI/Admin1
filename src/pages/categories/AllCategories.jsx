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
  const useStyles = {
    card: {
      position: "relative",
      "&:hover $overlay": {
        opacity: 1,
      },
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      opacity: 0,
      transition: "opacity 0.3s ease-in-out",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    overlayText: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
    },
  };

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
                  margin: "0 260px 15px 0",
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
          <Grid container width="1000px">
            {paginatedPosts.map((item) => (
              <Grid
                key={item._id}
                sx={{ xs: 4, width: "300px" }}
                marginBottom="30px"
                marginRight="30px"
                position="relative"
                className="thisGrid"
              >
                <CardMedia
                  component="img"
                  src={item.image}
                  sx={{
                    height: "200px",
                    borderRadius: "10px",
                  }}
                />
                <Box
                  sx={{
                    display: "none",
                    textAlign: "center",
                  }}
                  className="thisEffect"
                >
                  <CardMedia
                    component="img"
                    src={item.icon}
                    sx={{
                      width: "30px",
                      height: "20px",
                      borderRadius: "10px",
                      marginBottom: "20px",
                      position: "absolute",
                      top: "30%",
                      left: "46%",
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 450,
                      color: "white",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "24px",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ ml: 50, mt: 2 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              sx={{
                "& .Mui-selected": {
                  backgroundColor: "#ff9934",
                  color: "white",
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
