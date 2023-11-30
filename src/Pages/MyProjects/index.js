import React, { useEffect } from "react";
import "./styles.scss";
import Data from "./myprojects.json";

const MyProjects = () => {
  return (
    <>
      <div className="maincontainer my-5">
        <div className="container my-3 d-flex align-items-center justify-content-center subchildcontainer">
          <div className="w-100 text-center">
            <h2 className="projectsheading">My Projects</h2>
            <p>
              I'm a bit of a digital product junky. Over the years, I've used
              hundreds of web and mobile apps in different industries and
              verticals.
            </p>
          </div>
        </div>

        <div className="projectslist container">
          <div className="row">
            {Data?.map((item) => {
              return (
                <>
                  <div className="col-md-4 my-2">
                    <div className="card p-2 desc-card">
                      <div className="d-flex align-items-center justify-content-center flex-column">
                        <div className="d-flex align-items-center p-2">
                          {/* <img
                            src={item?.logoUrl}
                            alt=""
                            style={{ height: "40px", width: "40px" }}
                          /> */}
                          <h4 className="ml-2">{item?.companyName}</h4>
                        </div>

                        <div className="p-2 text-description">
                          <p>{item?.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
