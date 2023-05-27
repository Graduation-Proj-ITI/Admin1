import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import PieChart from "../../components/shapes/PieChart";
import CardMedia from "@mui/material/CardMedia";

function TopSelling() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        const data = response.data;
        const firstThree = data.slice(0, 3);
        setItems(firstThree);
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box>
      {items.map((el) => {
        <Box key={el.id}>
          <CardMedia
            component="img"
            src={el.img}
            sx={{
              width: "300px",
              height: "200px",
            }}
          />
        </Box>;
      })}
      {/* <Box>
        <Typography
          variant="h1"
          fontSize="24px"
          fontWeight="600"
          margin="0 0 40px 20px"
        >
          Top Selling Categories
        </Typography>
        <TableContainer component={Paper} style={{ width: 480 }}>
          <Table sx={{ border: 1, height: 320 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "center" }}>Product</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Status</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ textAlign: "center" }}>{row.name}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {row.status}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {row.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box> */}
    </Box>
  );
}

export default TopSelling;
