import useProducts from "../../hooks/useProducts";
import { Box, CardMedia, Typography } from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import GeographyChart from "../../components/shapes/GeographyChart";

function TopProducts() {
  const { topProducts } = useProducts();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const TAX_RATE = 0.07;

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function priceRow(qty, unit) {
    return qty * unit;
  }

  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }

  const rows = [createRow("Paperclips (Box)"), createRow("Paper (Case)")];

  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "20px",
      }}
    >
      <Typography
        variant="h1"
        fontSize="24px"
        fontWeight="600"
        margin="0 0 40px 20px"
      >
        Top Selling Products
      </Typography>
      <Box
        sx={{
          display: "flex",
          //   justifyContent: "center",
          marginLeft: "10px",
          //   gap: "25px",
        }}
      >
        {topProducts.map((product) => (
          <Box key={product.id}>
            <CardMedia
              component="img"
              src={product.img}
              sx={{
                width: "280px",
                height: "200px",
              }}
            />
          </Box>
        ))}
      </Box>
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
                      Sold Products
                    </Typography>
                    <Typography>your guide for products</Typography>
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
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topProducts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((product) => {
                    return (
                      <TableRow hover tabIndex={-1} key={product.id}>
                        <TableCell align="center">
                          {product.productName}
                        </TableCell>
                        <TableCell align="center">{product.status}</TableCell>
                        <TableCell align="center">{product.amount}</TableCell>
                        <TableCell align="center">{product.price}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10]}
            component="div"
            count={topProducts.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <TableContainer component={Paper} sx={{ width: "30%" }}>
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
              {/* <TableRow> */}
              {/* <PieChart /> */}
              {/* </TableRow> */}
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">hi</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default TopProducts;
