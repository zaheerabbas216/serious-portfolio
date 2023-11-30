import React from "react";
import "./styles.scss";

const ContactMe = () => {
  return (
    <>
      <div className="my-5 container">
        <div className="w-100 text-center">
          <h2 className="headingcontact">Feel free to ping me.</h2>
          <p>
            I’m always open to discussing product design work or partnership
            opportunities.
          </p>
        </div>
        <div className="mt-3 w-100 text-center d-flex align-items-center justify-content-center">
          <a
            className="btn btn-primary btncontact d-flex align-items-center justify-content-center"
            href="mailto:abbaszaheer216@gmail.com"
          >
            Say Hello!
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
