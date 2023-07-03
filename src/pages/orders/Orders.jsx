import React from "react";
import { Box, Typography, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import useOrders from "../../hooks/useOrders";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material";
import { tokens } from "../../utils/Theme";
import Side from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";
import CircularProgress from "@mui/material/CircularProgress";

function Orders() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { Orders, setOrders } = useOrders();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // console.log(Orders);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridAutoRows: "45px",
      }}
    >
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <Side />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "80vw" }}>
        <Topbar />
        <Box>
          <Breadcrumbs aria-label="breadcrumb" sx={{ margin: "0 0 0 20px" }}>
            <Typography>Home</Typography>
            <Typography color="#FF9934" aria-current="page">
              Orders
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
              sx={{ fontSize: "22px", fontWeight: 600, margin: "10px 0 20px 20px" }}
            >
              All Orders
            </Typography>
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="10px"
            marginLeft="20px"
          >
            {Orders.length === 0 ? (
              <CircularProgress sx={{ margin: "100px 0 0 370px" }} />
            ) : (
              <Box sx={{ gridColumn: "span 12", gridRow: "span 5" }}>
                <Paper
                  sx={{
                    width: "80%",
                    overflow: "hidden",
                    marginBottom: "30px",
                  }}
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
                              // color: "#133a5e",
                            }}
                            color={colors.primary[400]}
                          >
                            Id
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontSize: "16px",
                              fontWeight: 550,
                              // color: "#133a5e",
                            }}
                            color={colors.primary[400]}
                          >
                            User
                          </TableCell>
                          {/* <TableCell
                          align="center"
                          sx={{
                            fontSize: "16px",
                            fontWeight: 550,
                            // color: "#133a5e",
                          }}
                          color={colors.primary[400]}
                        >
                          Product
                        </TableCell> */}
                          <TableCell
                            align="center"
                            sx={{
                              fontSize: "16px",
                              fontWeight: 550,
                              // color: "#133a5e",
                            }}
                            color={colors.primary[400]}
                          >
                            Payment
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontSize: "16px",
                              fontWeight: 550,
                              // color: "#133a5e",
                            }}
                            color={colors.primary[400]}
                          >
                            Total
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontSize: "16px",
                              fontWeight: 550,
                              // color: "#133a5e",
                            }}
                            color={colors.primary[400]}
                          >
                            Date
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontSize: "16px",
                              fontWeight: 550,
                              // color: "#133a5e",
                            }}
                            color={colors.primary[400]}
                          >
                            Status
                          </TableCell>
                          <TableCell align="center"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Orders.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        ).map((order, index) => {
                          return (
                            <TableRow hover tabIndex={-1} key={order._id}>
                              <TableCell
                                align="center"
                                style={{ fontWeight: 500, fontSize: "14px" }}
                              >
                                #{index + 1}
                              </TableCell>
                              <TableCell
                                align="center"
                                style={{ fontWeight: 500, fontSize: "14px" }}
                              >
                                {order.user}
                              </TableCell>
                              {/* <TableCell
                              align="center"
                              style={{ fontWeight: 500, fontSize: "14px" }}
                            >
                              {order.product}
                            </TableCell> */}
                              <TableCell
                                align="center"
                                style={{ fontWeight: 500, fontSize: "14px" }}
                              >
                                {order.paymentMethodType}
                              </TableCell>
                              <TableCell
                                align="center"
                                style={{ fontWeight: 500, fontSize: "14px" }}
                              >
                                {order.totalOrderPrice}
                              </TableCell>
                              <TableCell
                                align="center"
                                style={{ fontWeight: 500, fontSize: "14px" }}
                              >
                                {order.createdAt.slice(0, 10)}
                              </TableCell>
                              <TableCell
                                align="center"
                                style={{ fontWeight: 500, fontSize: "14px" }}
                              >
                                {order.status}
                              </TableCell>
                              <TableCell sx={{ display: "flex", gap: "20px" }}>
                                <Link to={`/orders/${order._id}`}>
                                  <RemoveRedEyeIcon sx={{ color: "#8FC83D" }} />
                                </Link>

                                {/* {order.status === "pending" ? (
                            <Link to={`/orders/${order._id}`}>
                              <EditIcon sx={{ color: "#336CDA" }} />
                            </Link>
                          ) : (
                            ""
                          )} */}

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
                    rowsPerPageOptions={[2, 4]}
                    component="div"
                    count={Orders.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Orders;
