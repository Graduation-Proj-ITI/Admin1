import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CardMedia from "@mui/material/CardMedia";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import axios from "axios";
import useProducts from "../../hooks/useProducts";
import Topbar from "../../components/global/Topbar";
import Side from "../../components/global/Sidebar";
import { tokens } from "../../utils/Theme";
import CircularProgress from "@mui/material/CircularProgress";

export default function AllProducts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { allProducts, setAllProducts } = useProducts();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  function handleDelete(productId) {
    try {
      axios
        .delete(`https://furnival.onrender.com/products/${productId}`, config)
        .then((res) => {
          const updatedBlogPosts = allProducts.filter(
            (product) => product._id !== productId
          );
          setAllProducts(updatedBlogPosts);
        });
    } catch (error) {
      console.log(error);
    }
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
      <Box sx={{ display: "flex", flexDirection: "column", width: "82vw" }}>
        <Topbar />
        <Box sx={{ marginLeft: "20px" }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "10px" }}>
            <Typography>Home</Typography>
            <Typography color="#FF9934" aria-current="page">
              All products
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
              All Products
            </Typography>
            <Link to="/addProduct">
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
                Add Product
              </Button>
            </Link>
          </Box>
          {allProducts.length == 0 ? (
            <CircularProgress sx={{ margin: "100px 0 0 370px" }} />
          ) : (
            <Paper
              sx={{ width: "70%", overflow: "hidden", marginBottom: "30px" }}
            >
              <TableContainer sx={{ maxHeight: 640, overflow: "hidden" }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: "16px",
                          fontWeight: 550,
                        }}
                        color={colors.primary[400]}
                      >
                        Product
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: "16px",
                          fontWeight: 550,
                        }}
                        color={colors.primary[400]}
                      >
                        Image
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: "16px",
                          fontWeight: 550,
                        }}
                        color={colors.primary[400]}
                      >
                        Price
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: "16px",
                          fontWeight: 550,
                        }}
                        color={colors.primary[400]}
                      >
                        Status
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: "16px",
                          fontWeight: 550,
                        }}
                        color={colors.primary[400]}
                      >
                        Edit
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: "16px",
                          fontWeight: 550,
                        }}
                        color={colors.primary[400]}
                      >
                        Delete
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {allProducts
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((product) => {
                        return (
                          <TableRow hover tabIndex={-1} key={product._id}>
                            <TableCell
                              align="center"
                              style={{ fontWeight: 500, fontSize: "14px" }}
                            >
                              {product.title}
                            </TableCell>
                            <TableCell>
                              <CardMedia
                                component="img"
                                align="center"
                                src={product.imageCover}
                                sx={{
                                  width: "62px",
                                  height: "62px",
                                  borderRadius: "10px",
                                  margin: "0 auto",
                                }}
                              />
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ fontWeight: 500, fontSize: "14px" }}
                            >
                              {product.price}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ fontWeight: 500, fontSize: "14px" }}
                            >
                              {product.amount === 0 ? "Sold" : "In stock"}
                            </TableCell>
                            <TableCell align="center">
                              <Link to={`/products/${product._id}`}>
                                <EditIcon
                                  sx={{
                                    color: "white",
                                    backgroundColor: "#133a5e",
                                    borderRadius: "4px",
                                    padding: "2px",
                                  }}
                                />
                              </Link>
                            </TableCell>
                            <TableCell align="center">
                              <DeleteForeverIcon
                                sx={{
                                  color: "white",
                                  backgroundColor: "#DA2121",
                                  borderRadius: "4px",
                                }}
                                onClick={() => handleDelete(product._id)}
                              />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[2, 4]}
                component="div"
                count={allProducts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          )}
        </Box>
      </Box>
    </Box>
  );
}
