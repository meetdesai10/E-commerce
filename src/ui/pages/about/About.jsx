import React from "react";
import "./about.css";
import mainImage from "../../../../public/aboutUs/mainImage.jpg";
import manImage from "../../../../public/aboutUs/manImage.jpg";
import lastImage from "../../../../public/aboutUs/lastImage.jpg";
import finalLast from "../../../../public/aboutUs/finalLast.jpg";
import finalLast2 from "../../../../public/aboutUs/finalImage2.jpg";
import w1 from "../../../../public/aboutUs/w1.webp";
import w2 from "../../../../public/aboutUs/w2.webp";
import w3 from "../../../../public/aboutUs/w3.webp";
import w4 from "../../../../public/aboutUs/w4.webp";
import last from "../../../../public/aboutUs/last.png";
import { Button } from "reactstrap";
import {
  Email,
  Facebook,
  Google,
  Home,
  Instagram,
  Phone,
  Twitter,
} from "@mui/icons-material";
import Footer from "../../components/footer/Footer";
export default function About({ aboutUsRef }) {
  return (
    <div ref={aboutUsRef} className="aboutUsContainer">
      <div className="w-100  " style={{ height: "80vh" }}>
        <img
          src={mainImage}
          className="mainImage"
          style={{ objectFit: "cover" }}
          alt=""
        />
        <div className="imageContent">
          <p className="p1">SWISS EAGLE COLLECTION</p>
          <p className="p2">
            A WATCH DEFINES YOUR CHARACTER WHICH DEFINES YOUR ATTITUDE
          </p>
          <p className="p3">
            This is the latest styles in watches from the luxury brand Swiss
            Eagle that is making history. Take a look at it quick. Time is
            running out!
          </p>
        </div>
      </div>
      <div className="exploreSection">
        <div className="exploreDetails">
          <p className="e1">EXPLORE NOW</p>
          <p className="e2">MADE BY THE BEST HANDS WITH RICH HERITAGE</p>
          <p className="e3">
            This is the best in class elegant watches from the luxury brand
            Swiss Eagle Watches. Take a peek look at it. Making History!
          </p>
          <Button className="loginBtn bg-white border-3 border-black text-black fw-medium w-50 ps-4 pe-4 pt-2 pb-2 fs-6 cursor-pointer">
            VIEW FULL STORY
          </Button>
        </div>
        <div className="exploreImage">
          <img src={manImage} className="eImage" alt="" />
        </div>
      </div>
      <div className="lastSection">
        <img src={lastImage} alt="" className="lImage" />
        <div className="lastImageDetails">
          <div className="lastHeader">Excellence is a way of life</div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for ‘lorem ipsum’ will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>
      <div className="finalLastSection">
        <div className="finalLastDetails">
          <p className="e1">WE PROUDLY PRESENT YOU</p>
          <p className="e2">
            SWISS EAGLE <span className="watchFinal"> WATCHES</span>
          </p>
          <p className="e3">
            This is the best in class effective watches from the luxury brand
            Swiss Eagle.
          </p>
          <Button className="loginBtn bg-white border-3 border-black text-black fw-medium w-50 ps-4 pe-4 pt-2 pb-2 fs-6 cursor-pointer">
            VIEW LUXURY's
          </Button>
        </div>
        <div className="finalLastImage">
          <img src={finalLast} className="eImage" alt="" />
          <img src={finalLast2} className="eImage2" alt="" />
          <div className="lastImageDetailsSection ">
            <div className="d-flex align-items-center gap-3 ">
              <img src={w1} alt="" />
              <div className="lastImageDetailsSectionMini">
                <span style={{ fontSize: "20px" }}>45mm inner dial</span>
                <br />
                This is the best in class effective watches from the luxury
                brand watch.co and gizmo
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 ">
              <img src={w2} alt="" />
              <div className="lastImageDetailsSectionMini">
                <span style={{ fontSize: "20px" }}>
                  Dual Coated Sapphire Crystal
                </span>
                <br />
                This is the best in class effective watches from the luxury
                brand watch.co and gizmo
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 ">
              <img src={w3} alt="" />
              <div className="lastImageDetailsSectionMini">
                <span style={{ fontSize: "20px" }}>
                  Exclusive Leather Strap
                </span>
                <br />
                This is the best in class effective watches from the luxury
                brand watch.co and gizmo
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 ">
              <img src={w4} alt="" />
              <div className="lastImageDetailsSectionMini">
                <span style={{ fontSize: "20px" }}>
                  Date Perpetual Calender
                </span>
                <br />
                This is the best in class effective watches from the luxury
                brand watch.co and gizmo
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last">
        <div className="d-flex justify-content-center align-items-center pb-5">
          <img src={last} alt="" />
        </div>
        <div>
          <div className="lastDetails">
            <div className="lastDetailsMini">
              <p style={{ color: "#cbba9c" }}>CONTACT US</p>
              <div className="d-flex   text-center">
                <Home />
                <p className="pdd">
                  77,akshardham society, katargam-surat,395004
                </p>
              </div>
              <div className="d-flex  gap-2">
                <Phone />
                <p className="pdd">+91 7486917928</p>
              </div>
              <div className="d-flex  gap-2">
                <Email />
                <p className="pdd">dmeet1008@gmail.com</p>
              </div>
            </div>
            <div className="lastDetailsMini">
              <p style={{ color: "#cbba9c" }}>SHARE WITH US</p>
              <div className="d-flex  gap-2">
                <div className="p-3 ">
                  <Facebook />
                </div>
                <div className="p-3 ">
                  <Google />
                </div>
                <div className="p-3 ">
                  <Instagram />
                </div>
                <div className="p-3 ">
                  <Twitter />
                </div>
              </div>
            </div>
            <div className="lastDetailsMini">
              <p style={{ color: "#cbba9c" }}>NEWSLETTTER</p>
              <div className="mt-3">
                <p className="pdd">Subscribe our newsletter</p>
              </div>
            </div>
            <div className="lastDetailsMini">
              <p style={{ color: "#cbba9c" }}>#INSTAGRAM </p>
              <div className="mt-3">
                <p className="pdd">Our instagram gallery</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center pt-5">
          <p
            className="w-75 text-center"
            style={{ fontSize: "14px", color: "gray" }}
          >
            Life is made up of two things Time and Love.Time is free but it is
            priceless. You can’t own it but you can use it. You can’t keep it
            but you can spend it. Once you have lost it you can never get it
            back. Love multiplies when you give it!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
