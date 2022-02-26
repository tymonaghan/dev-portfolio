import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import { Home, NavBar, ProjectList, Layout } from "./components";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<ProjectList />} />
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("app")
);
