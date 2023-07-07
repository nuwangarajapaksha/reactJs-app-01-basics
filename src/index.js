import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyIndex from "./MyIndex";
import message from "./message";
import Car from "./State";
import DestructingArrays from "./DestructingArrays";
import "bootstrap/dist/css/bootstrap.css";

const myFirstElement = <h1>Hello React!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myFirstElement);
// root.render(<MyIndex />);
// root.render(<DestructingArrays />);
// root.render(message);
root.render(<Car />);
// ReactDOM.render(myFirstElement, document.getElementById("root"));
