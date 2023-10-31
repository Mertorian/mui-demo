import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  return (
    <div>
      <Counter
        onSubmit={(newItem) => {
          setSelectedNumbers((prev) => {
            return [...prev, { number: newItem, square: newItem * newItem }];
          });
        }}
      />
      <hr />
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Selected Numbers</TableCell>
                <TableCell>Squared</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedNumbers.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.number}
                  </TableCell>
                  <TableCell>{row.square}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <hr />
      <div>
        {selectedNumbers.map((item, index) => {
          return <div key={index}>{item.number}</div>;
        })}
      </div>
      <hr />

      <pre>{JSON.stringify(selectedNumbers, null, 2)}</pre>
    </div>
  );
}

export default App;
