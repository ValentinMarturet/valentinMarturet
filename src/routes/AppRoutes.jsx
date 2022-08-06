import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../views/App";
import Contact from "../views/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
