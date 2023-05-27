import React from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import LineChart from "../components/shapes/LineChart";
import GeographyChart from "../components/shapes/GeographyChart";
import StatBox from "../components/shapes/StatBox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

class Overview extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        const data = response.data;
        const firstThreeCategories = data.slice(0, 4);
        this.setState({ categories: firstThreeCategories });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const { categories } = this.state;

    return (
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          // backgroundColor={colors.primary[400]}
          overflow="hidden"
          width="35vw"
          height="300px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            // borderBottom={`1px solid ${colors.primary[500]}`}
            // colors={colors.grey[100]}
            p="15px"
          >
            <Typography
              // color={colors.grey[100]}
              variant="h5"
              fontWeight="600"
            >
              Top Products
            </Typography>
          </Box>
          <TableContainer
            component={Paper}
            style={{
              width: "35vw",
              backgroundColor: "transparent",
              border: "1px solid lightgrey",
            }}
          >
            <Table
              sx={{
                width: 528,
                height: 50,
                // backgroundColor: colors.primary[400],
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell># </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: 500, fontSize: "14px" }}
                  >
                    Popularity
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: 500, fontSize: "14px" }}
                  >
                    Sales
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.map((category) => (
                  <TableRow
                    key={category.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {category.id}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: 500, fontSize: "12px" }}
                    >
                      {category.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: 500, fontSize: "12px" }}
                    >
                      <BorderLinearProgress variant="determinate" value={75} />
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: 500, fontSize: "12px" }}
                    >
                      {category.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          gridColumn="span 3"
          // backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth="20vw"
          height="130px"
          marginTop="52px"
          border="1px solid lightgrey"
        >
          <StatBox
            title="EARNINGS"
            subtitle="$852.00"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon sx={{ fontSize: "26px", color: "#133A5E" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          // backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth="20vw"
          height="130px"
          marginTop="52px"
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
          // backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth="20vw"
          height="130px"
          marginTop="52px"
          border="1px solid lightgrey"
          // boxShadow="10px 10px 20px 0px #B9B9B9"
        >
          <StatBox
            title="ORDERS"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <LocalShippingIcon sx={{ fontSize: "26px", color: "#133A5E" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          // backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth="20vw"
          height="130px"
          marginTop="52px"
          border="1px solid lightgrey"
        >
          <StatBox
            title="USERS"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={<PersonAddIcon sx={{ fontSize: "26px", color: "#133A5E" }} />}
          />
        </Box>
        {/* ROW 2 */}
        <Box
          gridColumn="span 7"
          gridRow="span 2"
          // backgroundColor={colors.primary[400]}
          maxWidth="60vw"
          marginTop="30px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                // color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                // color={colors.greenAccent[500]}
              ></Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 3"
          gridRow="span 2"
          // backgroundColor={colors.primary[400]}
          padding="30px"
          maxWidth="20vw"
          marginTop="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Overview;
