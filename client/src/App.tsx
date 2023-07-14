import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Products from "./scenes/products";
import Custumers from "./scenes/custumers";
import Transactions from "./scenes/transactions";

export default function App() {
  const mode = useSelector((state: any) => state.global.mode);

  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to={"/dashboard"} replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/custumers" element={<Custumers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Dashboard />} />
              <Route path="/overview" element={<Dashboard />} />
              <Route path="/daily" element={<Dashboard />} />
              <Route path="/montly" element={<Dashboard />} />
              <Route path="/breackdown" element={<Dashboard />} />
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/performance" element={<Dashboard />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}