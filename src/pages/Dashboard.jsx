import React from "react";
import { Box, Typography, useTheme, Breadcrumbs } from "@mui/material";
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
import { tokens } from "../utils/Theme";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import useCategory from "../hooks/useCategory";
import Topbar from "../components/global/Topbar";
import Side from "../components/global/Sidebar";

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

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { categories } = useCategory();

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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Topbar />
        <Breadcrumbs aria-label="breadcrumb" sx={{ margin: "0 0 0 20px" }}>
          <Typography>Home</Typography>
          <Typography color="#FF9934" aria-current="page">
            Dashboard
          </Typography>
        </Breadcrumbs>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
          marginLeft="20px"
        >
          {/* ROW 1 */}

          <Box
            gridColumn="span 4"
            gridRow="span 2"
            overflow="hidden"
            width="35vw"
            height="500px"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
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
                  backgroundColor: colors.primary[400],
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        fontWeight: 550,
                        fontSize: "16px",
                      }}
                    >
                      #
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        fontWeight: 550,
                        fontSize: "16px",
                      }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: 550, fontSize: "16px" }}
                    >
                      Popularity
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ fontWeight: 550, fontSize: "16px" }}
                    >
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categories.map((category, index) => (
                    <TableRow
                      key={category._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ fontWeight: 500, fontSize: "12px" }}
                      >
                        #{index + 1}
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
                        {index === 0 ? (
                          <BorderLinearProgress
                            variant="determinate"
                            value={60}
                          />
                        ) : index === 1 ? (
                          <BorderLinearProgress
                            variant="determinate"
                            value={40}
                          />
                        ) : index === 2 ? (
                          <BorderLinearProgress
                            variant="determinate"
                            value={80}
                          />
                        ) : index === 3 ? (
                          <BorderLinearProgress
                            variant="determinate"
                            value={90}
                          />
                        ) : (
                          ""
                        )}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ fontWeight: 500, fontSize: "12px" }}
                      >
                        {category.createdAt.slice(0, 10)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            minWidth="20vw"
            height="120px"
            marginTop="52px"
            border="1px solid lightgrey"
          >
            <StatBox
              title="EARNINGS"
              subtitle="$852.00"
              progress="0.50"
              increase="+21%"
              icon={
                <PointOfSaleIcon
                  sx={{ fontSize: "26px" }}
                  color={colors.greenAccent[900]}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            minWidth="20vw"
            height="120px"
            marginTop="52px"
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
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            minWidth="20vw"
            height="120px"
            marginTop="25px"
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
                  color={colors.greenAccent[400]}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            minWidth="20vw"
            height="120px"
            marginTop="25px"
            border="1px solid lightgrey"
          >
            <StatBox
              title="USERS"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={
                <PersonAddIcon
                  color={colors.greenAccent[900]}
                  sx={{ fontSize: "26px" }}
                />
              }
            />
          </Box>
          {/* ROW 2 */}
          <Box
            gridColumn="span 7"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            maxWidth="60vw"
            marginTop="5px"
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
                  color={colors.grey[100]}
                >
                  Revenue Generated
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.greenAccent[500]}
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
            backgroundColor={colors.primary[400]}
            padding="30px"
            maxWidth="20vw"
            marginTop="5px"
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
      </Box>
    </Box>
  );
}

export default Dashboard;
