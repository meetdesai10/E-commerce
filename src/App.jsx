import React from "react";
import Header from "./ui/components/Header/Header";
import Router from "./router/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export default function App() {
  return (
    <div>
      <Router />
      <ToastContainer/>
    </div>
  );
}
