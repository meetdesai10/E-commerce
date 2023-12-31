import {
  Call,
  Email,
  Facebook,
  Instagram,
  LocationOn,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import "./Footer.css";
import visa from "../../../../public/paymentFooterCard/visa.png";
import master from "../../../../public/paymentFooterCard/master.jfif";
import paypal from "../../../../public/paymentFooterCard/paypal.jfif";
import rupay from "../../../../public/paymentFooterCard/rupay.jfif";
export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="leftSide">
        <div className="Title">TITAN</div>
        <div className="leftDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quae aut
          reprehenderit voluptates ex numquam porro officia aliquid omnis vel
          odio delectus magni at veniam dolores ipsam magnam, alias deleniti!
        </div>
        <div className="icons">
          <div
            className="icon"
            style={{
              backgroundColor: "#3B5999",
              padding: "7px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Facebook style={{ color: "white" }} />
          </div>
          <div
            className="icon"
            style={{
              backgroundColor: "#E4405F",
              padding: "7px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Instagram style={{ color: "white" }} />
          </div>
          <div
            className="icon"
            style={{
              backgroundColor: "#55ACEE",
              padding: "7px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Twitter style={{ color: "white" }} />
          </div>
          <div
            className="icon"
            style={{
              backgroundColor: "#E60023",
              padding: "7px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pinterest style={{ color: "white" }} />
          </div>
        </div>
      </div>
      <div className="centerSide">
        <div className="Title">Useful Links</div>
        <div className="centerLinks">
          <ul className="links">
            <li>Home</li>
            <li>Man Fashion</li>
            <li>Accessories</li>
            <li>Order Tracking</li>
            <li>Whishlist</li>
          </ul>
          <ul className="links">
            <li>Cart</li>
            <li>Woman Fashion</li>
            <li>My Account</li>
            <li>Whishlist</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="rightSide">
        <div className="Title">Contact</div>
        <div className="location">
          <LocationOn style={{ fontSize: "30px" }} />
          <div className="address">
            77, Akshardham Soc, Katargam Surat 395004
          </div>
        </div>
        <div className="moNo">
          <Call style={{ fontSize: "30px", color: "black" }} />
          <div className="number">+91 7486917928</div>
        </div>
        <div className="emailContainer">
          <Email style={{ fontSize: "30px" }} />
          <div className="emailAddress">dmeet1008@gmail.com</div>
        </div>
        <div className="paymentsMethods">
          <img src={master} alt="" />
          <img src={paypal} alt="" />
          <img src={rupay} alt="" />
          <img src={visa} alt="" />
        </div>
      </div>
    </div>
  );
}
