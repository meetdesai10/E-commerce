import React, { useRef, useState } from "react";
import "./Contact.css";
import { Button, FormGroup, Input, Label } from "reactstrap";
import Footer from "../../components/footer/Footer";
export default function Contact() {
  let [Data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    mobile: "",
    messege: "",
  });

  return (
    <div>
      <div className="contactForm">
        <div className="contactFeilds">
          <h1 className="text-center mb-3">Conatct Us</h1>
          <FormGroup>
            <Input
              placeholder="Enter Name"
              type="text"
              name="user_name"
              onChange={(e) => setData({ ...Data, name: e?.target?.value })}
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Enter Mail Address"
              type="text"
              name="user_email"
              onChange={(e) => setData({ ...Data, email: e?.target?.value })}
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Enter Mobile Number"
              type="text"
              name="user_mobile"
              onChange={(e) => setData({ ...Data, mobile: e?.target?.value })}
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Subject"
              type="text"
              name="user_subject"
              onChange={(e) => setData({ ...Data, subject: e?.target?.value })}
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Type Your Text Here"
              type="text"
              name="message"
              onChange={(e) => setData({ ...Data, message: e?.target?.value })}
            />
          </FormGroup>
          <Button className="loginBtn bg-white border-1 border-black text-black fw-medium ps-4 pe-4 w-100 pt-2 pb-2 fs-6 cursor-pointer">
            Send Mail
          </Button>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119053.16902063858!2d72.65991379726562!3d21.1758048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e7330edf65d%3A0x40801ae1e0bf571c!2sTitan%20World!5e0!3m2!1sen!2sin!4v1704619941273!5m2!1sen!2sin"
        style={{ border: "0", width: "100%", height: "70vh" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </div>
  );
}
