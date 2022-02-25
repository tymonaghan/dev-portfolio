import React from "react";
import ReactDOM from "react-dom";
import TestCard from "./TestCard";

ReactDOM.render(
  <div className="w-96 m-20 p-2 bg-green-500 shadow rounded">
    <p>Hi there</p>
    <TestCard />
  </div>,
  document.getElementById("app")
);
