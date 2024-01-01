import React from "react";
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
export default function Router() {
  const userData = useSelector((state) => state.logRegSlice);
  return (
    <>
      <Header />
      <Routes>
        {userData?.user?.userType == "admin" ? (
          <Route path="/" element={<Dashboard />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:publicProductId"
          element={<PublicProductDetailPage />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/adminproducts" element={<AdminProducts />} />
        <Route path="/user" element={<User />} />
        <Route path="/order" element={<Order />} />
        <Route path="/adminProfile" element={<AdminProfile />} />
        <Route
          path="/adminproducts/:adminProductId"
          element={<ProductDetailPage />}
        />
      </Routes>
    </>
  );
}
