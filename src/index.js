import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import TextField from "@material-ui/core/TextField";
import { Grid, Button } from "@material-ui/core";

function reducer(state, action) {
  switch (action.type) {
    case "erase":
      return { term1: 0, term2: 0, op: "" };
    case "clear":
      return { ...state, term1: 0 };
    case "backspace":
      return { ...state, term1: (state.term1 - (state.term1 % 10)) / 10 };
    case "concat":
      return { ...state, term1: state.term1 * 10 + action.value };
    case "sum":
      return { term1: 0, term2: state.term1, op: "sum" };
    case "sub":
      return { term1: 0, term2: state.term1, op: "sub" };
    case "div":
      return { term1: 0, term2: state.term1, op: "div" };
    case "mult":
      return { term1: 0, term2: state.term1, op: "mult" };
    case "equals":
      if (state.op === "sum") {
        return { term1: state.term2 + state.term1, term2: 0, op: "" };
      }
      if (state.op === "dub") {
        return { term1: state.term2 - state.term1, term2: 0, op: "" };
      }
      if (state.op === "div") {
        return {
          term1: (state.term2 - (state.term2 % state.term1)) / state.term1,
          term2: 0,
          op: ""
        };
      }
      if (state.op === "mult") {
        return { term1: state.term2 * state.term1, term2: 0, op: "" };
      }
      return state;
    default:
      return state;
  }
}
function App() {
  const [operations, dispatch] = useReducer(reducer, {
    term1: 0,
    term2: 0,
    op: ""
  });

  return (
    <div className="App">
      <Grid container>
        <Grid xs={12}>
          <TextField
            id="standard-basic"
            label="Standard"
            value={operations.term1}
          />
        </Grid>
        <Grid xs={3} />
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "erase" });
            }}
          >
            CE
          </Button>
        </Grid>
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "clear" });
            }}
          >
            C
          </Button>
        </Grid>
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "backspace" });
            }}
          >
            bk
          </Button>
        </Grid>

        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "concat", value: 7 });
            }}
          >
            7
          </Button>
        </Grid>
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "concat", value: 8 });
            }}
          >
            8
          </Button>
        </Grid>
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "concat", value: 9 });
            }}
          >
            9
          </Button>
        </Grid>
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "sum" });
            }}
          >
            +
          </Button>
        </Grid>
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "concat", value: 4 });
            }}
          >
            4
          </Button>
        </Grid>
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "concat", value: 5 });
            }}
          >
            5
          </Button>
        </Grid>
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "concat", value: 6 });
            }}
          >
            6
          </Button>
        </Grid>
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "sub" });
            }}
          >
            -
          </Button>
        </Grid>
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "concat", value: 1 });
            }}
          >
            1
          </Button>
        </Grid>
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "concat", value: 2 });
            }}
          >
            2
          </Button>
        </Grid>
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "concat", value: 3 });
            }}
          >
            3
          </Button>
        </Grid>
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "div" });
            }}
          >
            /
          </Button>
        </Grid>
        <Grid xs={3}>
          <Button>.</Button>
        </Grid>
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "concat", value: 0 });
            }}
          >
            0
          </Button>
        </Grid>
        <Grid xs={3}>
          <Button>+/-</Button>
        </Grid>
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "mult" });
            }}
          >
            *
          </Button>
        </Grid>
        <Grid xs={9} />
        <Grid xs={3}>
          <Button
            onClick={() => {
              dispatch({ type: "equals" });
            }}
          >
            =
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
