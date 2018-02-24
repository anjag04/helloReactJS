import React from "react";
import { render } from "react-dom";
import Test from "./List";

const shopping = [
  'Eggs',
  'Milk',
  'Bread',
  'Coffee',
];

const App = () => (
  <div style={{ textAlign: "left", color: "blue" }}>
    <h1>Hello Heading 1</h1>
    <h5>This works in nested div tags</h5>
    <Test title = "what to buy" />

  </div>
);

render(<App />, document.getElementById("root"));
