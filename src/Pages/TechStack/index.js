import React, { useEffect } from "react";
import Data from "./techdata.json";
import "./styles.scss";
import DesignerIcon from "../../assets/images/layers.png";
import FrontendIcon from "../../assets/images/terminal.png";
import DataIcon from "../../assets/images/database.png";

const TechStack = () => {
  const tech_stack_data = Data;

  return (
    <>
      <div className="container techstackcard">
        <div className="row">
          {tech_stack_data.map((item) => {
            return (
              <>
                <div className="col-md-4" key={item?.id}>
                  <div
                    className="card p-2 text-center my-2"
                    style={{
                      height: "500px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.techstackname === "Designer" && (
                      <>
                        <div className="d-flex align-items-center justify-content-center my-2">
                          <img
                            src={DesignerIcon}
                            alt=""
                            className="iconclass"
                          />
                        </div>
                      </>
                    )}
                    {item.techstackname === "Frontend Developer" && (
                      <>
                        <div className="d-flex align-items-center justify-content-center my-2">
                          <img
                            src={FrontendIcon}
                            alt=""
                            className="iconclass"
                          />
                        </div>
                      </>
                    )}
                    {item.techstackname === "Backend Developer" && (
                      <>
                        <div className="d-flex align-items-center justify-content-center my-2">
                          <img src={DataIcon} alt="" className="iconclass" />
                        </div>
                      </>
                    )}

                    <div style={{ height: "150px" }}>
                      <h2 className="itemcardheading">{item?.techstackname}</h2>

                      <p>{item?.description}</p>
                    </div>

                    <div className="my-4">
                      <h4 className="itemcardheading">Things I do : </h4>
                      {item?.thinsgIdo && item.thinsgIdo.join(", ")}
                    </div>

                    <div className="my-4">
                      <h4 className="itemcardheading">Design Tools : </h4>
                      {item?.tools && item.tools.join(", ")}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TechStack;
