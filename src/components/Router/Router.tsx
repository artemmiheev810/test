import { routes } from "config/routes/routes";
import React from "react";
import { Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      {routes.map(({ path, elem: Element }, index) => (
        <Route key={index} path={path} element={<Element />} />
      ))}
    </Routes>
  );
};
