import React, { useEffect } from "react";
import "./styles.scss";
// import Data from "./recentwork.json";
import boxchampimage from "../../assets/images/Screenshot 2023-11-30 at 9.19.32 AM.png";

const Data = {
  data: [
    {
      title: "BOX Champ",
      image: boxchampimage,
      description:
        "Just a  design for a web page. it's not a log, but just a poc for the figma.",
      link: "https://www.figma.com/proto/2fB2NNWyYg902BODeEOv8E/BOXCHAMP_01?node-id=1-2",
    },
  ],
};

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
                        <a className="btn btn-primary" href={item?.link}>
                          Click Here
                        </a>
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
