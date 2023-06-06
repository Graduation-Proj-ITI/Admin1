import React from "react";
import {
  Box,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { mockTransactions } from "../utils/data/mockData";
import LineChart from "../components/shapes/LineChart";
import GeographyChart from "../components/shapes/GeographyChart";
import PieChart from "../components/shapes/PieChart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { tokens } from "../utils/Theme";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import useCategory from "../hooks/useCategory";

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

function Report() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { categories } = useCategory();

  return (
    <Box sx={{ marginLeft: "20px" }}>
      {/* GRID & CHARTS */}

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="60px 30px"
        margin="0 auto"
      >
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          // backgroundColor={colors.primary[400]}
          overflow="hidden"
          width="35vw"
          height="300px"
          marginLeft="50px"
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
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          width="20vw"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            // borderBottom={`1px solid #133A5E`}
            // colors={colors.grey[100]}
            // p="15px"
          >
            <Typography
              // color={colors.grey[100]}
              variant="h5"
              fontWeight="600"
            >
              Top Products
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              // borderBottom={`1px solid #133A5E`}
              p="15px"
            >
              <Box>
                <Typography
                  // color={colors.#133A5EAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                {/* <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography> */}
              </Box>
              <Box color="#133A5E">{transaction.date}</Box>
              <Box p="5px 10px" borderRadius="4px">
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* ROW 1 */}

        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          //   overflow="auto"
          // backgroundColor="#F2F2F2"
          // marginLeft="100px"
          height="220px"
          minWidth="25vw"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            marginBottom="20px"
            // borderBottom={`1px solid #133A5E`}
            // colors={colors.grey[100]}
            // p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Categories
            </Typography>
            <Typography
              color={colors.grey[100]}
              variant="body"
              fontWeight="400"
            >
              Most loved categories
            </Typography>
          </Box>
          {/* <Box sx={{ marginBottom: "40px" }}> */}
          <PieChart />
          {/* </Box> */}
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          // overflow="auto"
          minWidth="25vw"
          display="flex"
          alignItems="center"
          flexDirection="column"
          height="220px"
          // backgroundColor="#F2F2F2"
        >
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            marginBottom="20px"
            // justifyContent="space-between"
            // borderBottom={`1px solid #133A5E`}
            // colors={colors.grey[100]}
            // p="15px"
          >
            <Typography
              color={colors.grey[100]}
              variant="h5"
              fontWeight="600"
            >
              Product brands
            </Typography>

            <Typography
              color={colors.grey[100]}
              variant="body"
              fontWeight="400"
            >
              percentage of product selling
            </Typography>
          </Box>
          <PieChart />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          // marginTop="100px"
          backgroundColor={colors.primary[400]}
          maxWidth="60vw"
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
                Order status
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                // color={colors.#133A5EAccent[500]}
              ></Typography>
            </Box>
            {/* <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: "#133A5E" }}
                />
              </IconButton>
            </Box> */}
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
          // marginTop="100px"
          maxWidth="20vw"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Sales by location
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
// }

export default Report;
