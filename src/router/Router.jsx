import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../ui/pages/home/Home";
import Header from "../ui/components/Header/Header";
import Products from "../ui/pages/product/Product";
import About from "../ui/pages/about/About";
import Contact from "../ui/pages/contact/Contact";
import Dashboard from "../ui/adminPages/dashboard/Dashboard";
import AdminProducts from "../ui/adminPages/adminProducts/AdminProducts";
import Order from "../ui/adminPages/order/Order";
import User from "../ui/adminPages/user/User";
import Profile from "../ui/pages/profile/Profile";
import AdminProfile from "../ui/adminPages/adminProfile/AdminProfile";
import { useSelector } from "react-redux";
import AuthRouter from "./AuthRouter";
import Error from "../ui/pages/error/Error";
import AdminProductDetailPage from "../ui/adminPages/adminProductDetailPage/adminProductDetailPage";
import PublicProductDetailPage from "../ui/pages/product/publicProductDetaildPage/PublicProductDetailPage";
export default function Router() {
  const userData = useSelector((state) => state.logRegSlice);
  const productsRef = useRef();
  let [modal, setModal] = useState(false);
  let [logReg, setLogReg] = useState(false);
  let toggle = () => {
    setModal(!modal);
    setLogReg(true);
  };
  return (
    <>
      <Header
        toggle={toggle}
        modal={modal}
        logReg={logReg}
        setLogReg={setLogReg}
      />
      <Routes>
        {userData?.user?.userType == "admin" ? (
          <Route path="/" element={<AuthRouter Component={Dashboard} />} />
        ) : (
          <Route path="/" element={<Home toggle={toggle} />} />
        )}
        <Route
          path="/products"
          element={<Products productsRef={productsRef} toggle={toggle} />}
        />
        <Route
          path="/products/:publicProductId"
          element={<PublicProductDetailPage />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<AuthRouter Component={Profile} />} />
        <Route
          path="/adminproducts"
          element={<AuthRouter Component={AdminProducts} />}
        />
        <Route path="/user" element={<AuthRouter Component={User} />} />
        <Route path="/order" element={<AuthRouter Component={Order} />} />
        <Route
          path="/adminProfile"
          element={<AuthRouter Component={AdminProfile} />}
        />
        <Route
          path="/adminproducts/:adminProductId"
          element={<AdminProductDetailPage />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}
