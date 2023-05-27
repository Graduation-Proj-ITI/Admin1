import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import { tokens } from "../../utils/Theme";
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

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData(
    1,
    "Sofa",
    <BorderLinearProgress variant="determinate" value={75} />,
    "75%"
  ),
  createData(
    2,
    "Table",
    <BorderLinearProgress variant="determinate" value={45} />,
    "45%"
  ),
  createData(
    3,
    "Lamp",
    <BorderLinearProgress variant="determinate" value={35} />,
    "35%"
  ),
  createData(
    4,
    "Chair",
    <BorderLinearProgress variant="determinate" value={25} />,
    "25%"
  ),
];

export default function BasicTable() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: 528, height: 50, backgroundColor: colors.primary[400] }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell># </TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Popularity</TableCell>
            <TableCell align="right">Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
