import React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import axios from "axios";
import useProducts from "../../hooks/useProducts";

export default function AllProducts() {
  const { allProducts, setAllProducts } = useProducts();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function handleDelete(productId) {
    axios.delete(`http://localhost:3000/products/${productId}`).then((res) => {
      const updatedBlogPosts = allProducts.filter(
        (product) => product.id !== productId
      );
      setAllProducts(updatedBlogPosts);
    });
  }

  return (
    <Box sx={{ marginLeft: "30px" }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "10px" }}>
        <Typography>Home</Typography>
        <Typography>Products</Typography>
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
              margin: "0 250px 15px 0",
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
      <Paper sx={{ width: "80%", overflow: "hidden", marginBottom: "30px" }}>
        <TableContainer sx={{ maxHeight: 640, overflow: "hidden" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allProducts
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product) => {
                  return (
                    <TableRow hover tabIndex={-1} key={product.id}>
                      <TableCell align="center">
                        {product.productName}
                      </TableCell>
                      <TableCell align="center">{product.price}</TableCell>
                      <TableCell align="center">{product.status}</TableCell>
                      <TableCell align="center">
                        <Link to={`/products/${product.id}`}>
                          <EditIcon sx={{ color: "#336CDA" }} />
                        </Link>
                      </TableCell>
                      <TableCell align="center">
                        <DeleteForeverIcon
                          sx={{ color: "#DA2121" }}
                          onClick={() => handleDelete(product.id)}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={allProducts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}