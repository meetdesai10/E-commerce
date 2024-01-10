import React, { useRef } from "react";
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
import Cart from "../ui/pages/cart/Cart";
import { useSelector } from "react-redux";
import ProductDetailPage from "../ui/adminPages/productDetailPage/ProductDetailPage";
import PublicProductDetailPage from "../ui/pages/product/publicProductDetaildPage/publicProductDetailPage";
import Footer from "../ui/components/footer/Footer";
import AuthRouter from "./AuthRouter";
import Error from "../ui/pages/error/Error";
export default function Router() {
  const userData = useSelector((state) => state.logRegSlice);
  const productsRef = useRef();
  return (
    <>
      <Header />
      <Routes>
        {userData?.user?.userType == "admin" ? (
          <Route path="/" element={<AuthRouter Component={Dashboard} />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route
          path="/products"
          element={<Products productsRef={productsRef} />}
        />
        <Route
          path="/products/:publicProductId"
          element={<PublicProductDetailPage />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<AuthRouter Component={Profile} />} />
        <Route path="/cart" element={<AuthRouter Component={Cart} />} />
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
          element={<ProductDetailPage />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}
