import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/google-login"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
