import React from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  CardMedia,
  useTheme,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import StatBox from "../../components/shapes/StatBox";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import axios from "axios";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import useUsers from "../../hooks/useUsers";
import Topbar from "../../components/global/Topbar";
import Side from "../../components/global/Sidebar";
import { tokens } from "../../utils/Theme";
import CircularProgress from "@mui/material/CircularProgress";

function AllUsers() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { users, setUsers } = useUsers();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function handleDelete(userId) {
    axios
      .delete(`https://furnival.onrender.com/users/${userId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const updatedBlogPosts = users.filter((user) => user._id !== userId);
        setUsers(updatedBlogPosts);
      });
  }
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: "10px",
          // gap:"20px"
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
                Users
              </Typography>
            </Breadcrumbs>
            <Box
              display="grid"
              gridTemplateColumns="repeat(12, 1fr)"
              gridAutoRows="90px"
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
                  backgroundColor={colors.primary[400]}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="20vw"
                  height="150px"
                  marginTop="15px"
                  border="1px solid lightgrey"
                >
                  <StatBox
                    title="PRODUCTS"
                    subtitle="New Clients"
                    progress="0.30"
                    increase="+5%"
                    icon={
                      <FilterFramesIcon
                        sx={{ fontSize: "26px" }}
                        color={colors.greenAccent[900]}
                      />
                    }
                  />
                </Box>
                <Box
                  gridColumn="span 3"
                  gridRow="span 1"
                  backgroundColor={colors.primary[400]}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="20vw"
                  height="150px"
                  marginTop="15px"
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
                        sx={{ fontSize: "26px" }}
                        color={colors.greenAccent[900]}
                      />
                    }
                  />
                </Box>
                <Box
                  gridColumn="span 3"
                  gridRow="span 1"
                  backgroundColor={colors.primary[400]}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="20vw"
                  height="150px"
                  marginTop="15px"
                  border="1px solid lightgrey"
                >
                  <StatBox
                    title="USERS"
                    subtitle="Emails Sent"
                    progress="0.75"
                    increase="+14%"
                    icon={
                      <PersonAddIcon
                        sx={{ fontSize: "26px" }}
                        color={colors.greenAccent[900]}
                      />
                    }
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  gridColumn: "span 12",
                  gridRow: "span 5",
                  marginTop: "10px",
                }}
              >
                {users.length == 0 ? (
                  <CircularProgress sx={{ margin: "100px 0 0 370px" }} />
                ) : (
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
                              User
                            </TableCell>
                            <TableCell
                              align="center"
                              sx={{
                                fontSize: "16px",
                                fontWeight: 550,
                              }}
                              color={colors.primary[400]}
                            >
                              Email
                            </TableCell>
                            {/* <TableCell
                            align="center"
                            sx={{
                              fontSize: "16px",
                              fontWeight: 550,
                            }}
                            color={colors.primary[400]}
                          >
                            Location
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              fontSize: "16px",
                              fontWeight: 550,
                            }}
                            color={colors.primary[400]}
                          >
                            Phone
                          </TableCell> */}
                            <TableCell align="center"></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {users

                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            )
                            .map((user, index) => {
                              return (
                                <TableRow hover tabIndex={-1} key={user._id}>
                                  <TableCell
                                    align="center"
                                    style={{
                                      fontWeight: 500,
                                      fontSize: "14px",
                                    }}
                                  >
                                    #{index + 1}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={{
                                      fontWeight: 500,
                                      fontSize: "14px",
                                    }}
                                  >
                                    <CardMedia
                                      component="img"
                                      src={user.profileImg}
                                      sx={{
                                        width: "60px",
                                        height: "60px",
                                        margin: "0 auto",
                                      }}
                                    />
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={{
                                      fontWeight: 500,
                                      fontSize: "14px",
                                    }}
                                  >
                                    {user.name}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={{
                                      fontWeight: 500,
                                      fontSize: "14px",
                                    }}
                                  >
                                    {user.email}
                                  </TableCell>
                                  {/* <TableCell
                                  align="center"
                                  style={{ fontWeight: 500, fontSize: "14px" }}
                                >
                                  {user.addresses}
                                </TableCell>
                                <TableCell
                                  align="center"
                                  style={{ fontWeight: 500, fontSize: "14px" }}
                                >
                                  {user.phone}
                                </TableCell> */}
                                  <TableCell>
                                    <Link to={`/users/${user._id}`}>
                                      <RemoveRedEyeIcon
                                        sx={{
                                          color: "#8FC83D",
                                          marginRight: "15px",
                                        }}
                                      />
                                    </Link>
                                    <DeleteForeverIcon
                                      sx={{
                                        color: "#DA2121",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => handleDelete(user._id)}
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
                      count={users.length}
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
        </Box>
      </Box>
    </Box>
  );
}

export default AllUsers;
