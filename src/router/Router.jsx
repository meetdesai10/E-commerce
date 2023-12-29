import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../ui/pages/home/Home";
import Header from "../ui/components/Header/Header";

export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
