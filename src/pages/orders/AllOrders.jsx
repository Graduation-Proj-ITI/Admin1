import React from "react";
import { Box, Typography, Breadcrumbs } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import StatBox from "../../components/shapes/StatBox";
import GeographyChart from "../../components/shapes/GeographyChart";
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
import axios from "axios";
import { Link } from "react-router-dom";
import useOrders from "../../hooks/useOrders";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

function AllOrders() {
  const { allOrders, setAllOrders } = useOrders();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // function handleDelete(productId) {
  //   axios.delete(`http://localhost:3000/orders/${productId}`).then((res) => {
  //     const updatedBlogPosts = allOrders.filter(
  //       (product) => product.id !== productId
  //     );
  //     setAllOrders(updatedBlogPosts);
  //   });
  // }

  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb" sx={{ margin: "0 0 0 20px" }}>
        <Typography>Home</Typography>
        <Typography color="#FF9934" aria-current="page">
          Orders
        </Typography>
      </Breadcrumbs>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        // gap="20px"
        marginLeft="20px"
      >
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridColumn="span 9"
          gridRow="span 2"
          gap="20px"
        >
          <Box
            gridColumn="span 3"
            gridRow="span 1"
            // backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="18vw"
            height="150px"
            marginTop="40px"
            border="1px solid lightgrey"
          >
            <StatBox
              title="PRODUCTS"
              subtitle="New Clients"
              progress="0.30"
              increase="+5%"
              icon={
                <FilterFramesIcon sx={{ fontSize: "26px", color: "#133A5E" }} />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            gridRow="span 1"
            // backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="18vw"
            height="150px"
            marginTop="40px"
            border="1px solid lightgrey"
            // boxShadow="10px 10px 20px 0px #B9B9B9"
          >
            <StatBox
              title="ORDERS"
              subtitle="Traffic Received"
              progress="0.80"
              increase="+43%"
              icon={
                <LocalShippingIcon
                  sx={{ fontSize: "26px", color: "#133A5E" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            gridRow="span 1"
            // backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="18vw"
            height="150px"
            marginTop="40px"
            border="1px solid lightgrey"
          >
            <StatBox
              title="USERS"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={
                <PersonAddIcon sx={{ fontSize: "26px", color: "#133A5E" }} />
              }
            />
          </Box>
          <Box
            // display="flex"
            gridColumn="span 9"
            gridRow="span 1"
            // backgroundColor={colors.primary[400]}
            position="relative"
          >
            <SearchIcon
              sx={{
                // color: colors.greenAccent[600],
                p: 1,
                fontSize: "40px",
                // ml: 1,
                position: "absolute",
                top: "6px",
                right: "100px",
                zIndex: 2,
                color: "#133A5E",
                marginRight: "30px",
              }}
            />
            <InputBase
              sx={{
                flex: 1,
                width: "750px",
                p: 1.2,
                border: "1px solid lightgrey",
                backgroundColor: "#F5F5F5",
                borderRadius: "10px",
              }}
              placeholder="Search here..."
            />
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          marginRight="30px"
          gridRow="span 2"
          // backgroundColor={colors.primary[400]}
          backgroundColor="#F5F5F5"
          padding="15px"
          width="20vw"
          marginTop="5px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Sales by Locations
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          sx={{ gridColumn: "span 12", gridRow: "span 5", marginTop: "40px" }}
        >
          <Paper
            sx={{ width: "80%", overflow: "hidden", marginBottom: "30px" }}
          >
            <TableContainer sx={{ maxHeight: 640, overflow: "hidden" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Id</TableCell>
                    <TableCell align="center">User</TableCell>
                    <TableCell align="center">Product</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Total</TableCell>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allOrders
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((product, index) => {
                      return (
                        <TableRow hover tabIndex={-1} key={product._id}>
                          <TableCell align="center">#{index + 1}</TableCell>
                          <TableCell align="center">{product.user}</TableCell>
                          <TableCell align="center">
                            {product.product}
                          </TableCell>
                          <TableCell align="center">
                            {product.quantity}
                          </TableCell>
                          <TableCell align="center">
                            {product.totalOrderPrice}
                          </TableCell>
                          <TableCell align="center">{product.date}</TableCell>
                          <TableCell align="center">{product.status}</TableCell>
                          <TableCell sx={{ display: "flex", gap: "20px" }}>
                            <RemoveRedEyeIcon sx={{ color: "#8FC83D" }} />
                            <Link to={`/products/${product.id}`}>
                              <EditIcon sx={{ color: "#336CDA" }} />
                            </Link>
                            {/* <DeleteForeverIcon
                              sx={{ color: "#DA2121" }}
                              onClick={() => handleDelete(product.id)}
                            /> */}
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
              count={allOrders.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default AllOrders;
