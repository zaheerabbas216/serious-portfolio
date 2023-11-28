import React, { useEffect } from "react";
import "./styles.scss";
import Data from "./recentwork.json";

const RecentsWorks = () => {
  return (
    <>
      <div className="container my-5">
        <div style={{ width: "100%" }} className="my-3">
          <div className="container my-2 recentworksdiv">
            <h2 className="headingh2">My Recent Works</h2>
            <p>Here are the recent designs that I have worked on.</p>
          </div>
        </div>

        <div className="my-2">
          <div className="row">
            {Data?.data?.map((item) => {
              return (
                <div className="col-md-4 my-2">
                  <div className="card p-2">
                    <div className="image-container">
                      <img
                        src={item?.image}
                        alt=""
                        className="worksImage"
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="description-overlay">
                        <h4>{item?.title}</h4>
                        <p>{item?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentsWorks;
