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
          <button className="btn btn-primary sayhellobutton">Say Hello!</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
