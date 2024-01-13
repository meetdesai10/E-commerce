import React from "react";
import "./Home.css";
import { Button } from "reactstrap";
import HomePageCard from "../../components/cards/homePageCard/HomePageCard";
import HomeFeature from "../../components/home/homeFeature/HomeFeature";
import homePageCardData from "../../../data/homePageCardData";
import WatchesShowUppage from "../../components/home/watchesShowUpPage.jsx/WatchesShowUppage";
import HomeBlogpage from "../../components/home/homeBlogPage/HomeBlogpage";
import Footer from "../../components/footer/Footer";
export default function Home({ toggle }) {
  return (
    <>
      <div className="homePageContainer">
        <div className="backGroungImageHome"></div>
        <div className="homePageDetails">
          <div
            style={{
              paddingLeft: "25px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <p>EMPIRE COLLECTION</p>
            <h1>The Watch Everyone Desires!</h1>
            <p className="w-75">
              the best in class elegant watches from the luxury brand swiss
              eagle high-quality watches into which a lot of care has gone in.
            </p>
            <Button className="homeBtn border-2 border-white">BUY NOW</Button>
          </div>
        </div>
      </div>
      <div className=" d-flex">
        {homePageCardData?.map((ele, index) => {
          return <HomePageCard key={index} ele={ele} />;
        })}
      </div>
      <HomeFeature toggle={toggle} />
      <WatchesShowUppage />
      <HomeBlogpage />
      <Footer />
    </>
  );
}
