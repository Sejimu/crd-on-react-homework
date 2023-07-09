import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductForm from "../components/ProductForm";

function MainRout() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/add_product" element={<ProductForm />} />
      </Route>
    </Routes>
  );
}

export default MainRout;
