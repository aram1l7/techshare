import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Navbar from "components/layout/navbar";
import routes from "./routeMap";
function RoutesContainer() {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route, idx) => {
          return (
            <Route
              key={idx}
              path={route.path}
              element={
                <Suspense fallback={<div></div>}>{route.element}</Suspense>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default RoutesContainer;
