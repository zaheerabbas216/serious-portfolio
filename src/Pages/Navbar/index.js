import React from "react";
import Logo from "../../assets/images/logo.jpg";
import "./styles.scss";

const Navbar = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between container-fluid px-4">
        <div>
          <img
            src={Logo}
            alt=""
            style={{ height: "100px", width: "100px", objectFit: "contain" }}
          />
        </div>
        <div>
          <a
            className="btn btn-primary sayhellobutton d-flex align-items-center"
            href="mailto:abbaszaheer216@gmail.com"
          >
            Say Hello!
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
