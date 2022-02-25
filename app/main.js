import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TestCard, NavBar, ProjectList, Layout } from "./components";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TestCard />} />
        <Route path="projects" element={<ProjectList />} />
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("app")
);
