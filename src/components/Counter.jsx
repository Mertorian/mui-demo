import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import { useState } from "react";

export function Counter({ onSubmit }) {
  const [counter, setCounter] = useState(0);
  const [displayAlert, setDisplayAlert] = useState(false);

  function increment() {
    setCounter((prev) => {
      if (prev < 10) {
        return prev + 1;
      }
      setDisplayAlert(true);
      setTimeout(() => {
        setDisplayAlert(false);
      }, 3_000);
      return prev;
    });
  }

  function decrement() {
    setCounter((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      setDisplayAlert(true);
      setTimeout(() => {
        setDisplayAlert(false);
      }, 3_000);
      return prev;
    });
  }

  return (
    <div style={{ marginTop: 50 }}>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <Fab
          color="primary"
          aria-label="add"
          style={{ width: 50, height: 50 }}
          onClick={() => increment()}
        >
          <AddIcon />
        </Fab>
        <p>{counter}</p>
        <Fab
          color="primary"
          aria-label="remove"
          style={{ width: 50, height: 50 }}
          onClick={() => decrement()}
        >
          <RemoveIcon />
        </Fab>
      </div>
      <Button
        variant="contained"
        color="success"
        style={{ marginTop: 10, marginBottom: 10 }}
        onClick={() => onSubmit(counter)}
      >
        Submit
      </Button>
      <div style={{ height: 100 }}>
        {displayAlert && (
          <Alert severity="error">This is an error alert — check it out!</Alert>
        )}
      </div>
    </div>
  );
}
