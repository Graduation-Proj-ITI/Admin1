import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CardMedia from "@mui/material/CardMedia";
import useCategory from "../../hooks/useCategory";

function TopCategories() {
  const { topCategories } = useCategory();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const items = [
    { id: 1, name: "kitchen", price: "$254", time: "daily" },
    { id: 2, name: "Bed", price: "$175", time: "daily" },
    { id: 3, name: "Sofa", price: "$884", time: "daily" },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/categories")
  //     .then((response) => {
  //       const data = response.data;
  //       const firstThree = data.slice(0, 3);
  //       setItems(firstThree);
  //       setCategories(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "20px 0 0 20px",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "10px" }}>
        <Link sx={{ textDecoration: "none" }}>Home</Link>
        <Link sx={{ textDecoration: "none" }}>Categories</Link>
      </Breadcrumbs>
      <Typography
        variant="h1"
        fontSize="24px"
        fontWeight="600"
        margin="0 0 40px 0"
      >
        Top Selling Categories
      </Typography>
      <Box sx={{ display: "flex", gap: "25px" }}>
        {topCategories.map((category) => (
          <Box key={category.id}>
            <CardMedia
              component="img"
              src={category.img}
              sx={{
                width: "280px",
                height: "200px",
              }}
            />
          </Box>
        ))}
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: "60px",
            marginTop: "50px",
            height: "370px",
          }}
        >
          <Paper sx={{ width: "50%", marginLeft: "20px" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" colSpan={8}>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        Categories
                      </Typography>
                      <Typography>your guide for categories</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" sx={{ fontWeight: 600 }}>
                      Product
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: 600 }}>
                      Status
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: 600 }}>
                      ِAmount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {topCategories
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((product) => {
                      return (
                        <TableRow hover tabIndex={-1} key={product.id}>
                          <TableCell align="center">{product.name}</TableCell>
                          <TableCell align="center">{product.status}</TableCell>
                          <TableCell align="center">{product.amount}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              component="div"
              count={topCategories.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          {/* <TableContainer component={Paper} sx={{ width: "30%" }}>
            <Table aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" colSpan={4}>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      Product Brands
                    </Typography>
                    <Typography>percentage of product selling</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <PieChart />
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    Total of all counterparty balances
                  </TableCell>
                  <TableCell align="right"> $1400</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer> */}
          <Box
            sx={{
              backgroundColor: "#F2F2F2",
              height: "380px",
              width: "360px",
            }}
          >
            <Box sx={{ padding: "20px" }}>
              <Typography variant="h5" fontWeight="550">
                Categories
              </Typography>
              <Typography variant="h6" fontWeight="520">
                Most loved categories
              </Typography>
            </Box>
            
            <Box>
              {items.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #5F6D7E",
                    padding: "8px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ marginLeft: "10px", fontWeight: 550 }}
                  >
                    {item.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "15px",
                      marginRight: "10px",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 550 }}>
                      {item.price}
                    </Typography>
                    <Typography
                      sx={{
                        backgroundColor: "#5F6D7E",
                        color: "white",
                        borderRadius: "4px",
                        padding: "0 12px",
                      }}
                    >
                      {item.time}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                height: "80px",
                alignItems: "center",
                border: "1px solid lightgray",
                backgroundColor: "#F8F9FB",
              }}
            >
              <Typography
                variant="h5"
                sx={{ marginLeft: "15px", fontWeight: 550 }}
              >
                Total of all counterparty balances
              </Typography>
              <Typography
                variant="h5"
                sx={{ marginRight: "20px", fontWeight: 550 }}
              >
                $1400
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TopCategories;
