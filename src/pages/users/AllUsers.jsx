import React from "react";
import { Box, Typography, Breadcrumbs, CardMedia } from "@mui/material";
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
import axios from "axios";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import useUsers from "../../hooks/useUsers";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Topbar from "../../components/global/Topbar";
import Side from "../../components/global/Sidebar";

function AllUsers() {
  const { users, setUsers } = useUsers();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // console.log(users);
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
          gridAutoRows: "45px",
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
                      <FilterFramesIcon
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
                      <PersonAddIcon
                        sx={{ fontSize: "26px", color: "#133A5E" }}
                      />
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
              {/* <Box
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
        </Box> */}
              <Box
                sx={{
                  gridColumn: "span 12",
                  gridRow: "span 5",
                  marginTop: "40px",
                }}
              >
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
                          <TableCell align="center">Id</TableCell>
                          <TableCell align="center">Image</TableCell>
                          <TableCell align="center">User</TableCell>
                          <TableCell align="center">Email</TableCell>
                          <TableCell align="center">Location</TableCell>
                          <TableCell align="center">Phone</TableCell>
                          <TableCell align="center">Status</TableCell>
                          <TableCell align="center"></TableCell>
                          {/* <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell> */}
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
                                <TableCell align="center">
                                  #{index + 1}
                                </TableCell>
                                <TableCell align="center">
                                  <CardMedia
                                    component="img"
                                    src={user.profileImg}
                                    sx={{ width: "60px" }}
                                  />
                                </TableCell>
                                <TableCell align="center">
                                  {user.name}
                                </TableCell>
                                <TableCell align="center">
                                  {user.email}
                                </TableCell>
                                <TableCell align="center">
                                  {user.addresses.details}
                                </TableCell>
                                <TableCell align="center">
                                  {user.phone}
                                </TableCell>
                                <TableCell align="center">
                                  {user.status}
                                </TableCell>
                                <TableCell>
                                  <Link to={`/users/${user._id}`}>
                                    <RemoveRedEyeIcon
                                      sx={{
                                        color: "#8FC83D",
                                        marginRight: "25px",
                                      }}
                                    />
                                  </Link>
                                  {/* <Link to={`/users/${user.id}`}>
                              <EditIcon
                                sx={{ color: "#336CDA", margin: "0 15px" }}
                              />
                            </Link> */}
                                  <DeleteForeverIcon
                                    sx={{ color: "#DA2121" }}
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
                    rowsPerPageOptions={[5, 10]}
                    component="div"
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AllUsers;
