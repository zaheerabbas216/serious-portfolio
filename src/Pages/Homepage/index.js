import React from "react";
import Navbar from "../Navbar";
import "./styles.scss";
import CodeImage from "../../assets/images/coderimagehomepage.jpg";
import BannerImage from "../../assets/images/bannerimage.jpg";
import TechStack from "../TechStack";
import RecentsWorks from "../RecentWorks";

const Homepage = () => {
  return (
    <>
      <Navbar />

      <div className="mainhomepagecomponent">
        <HomepageInfo />
      </div>

      <div>
        <BannerComponent />
      </div>

      <div>
        <TechStack />
      </div>

      <div>
        <RecentsWorks />
      </div>
    </>
  );
};

export default Homepage;

const HomepageInfo = () => {
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="mainheading">Designer and Fullstack developer.</h1>
        <p className="mainsubheading">
          Desgin and work on it. sometimes I travel.
        </p>

        <div className="mainimagediv">
          <img
            src={CodeImage}
            alt=""
            className="maincodeimage"
            style={{ height: "250px", width: "250px" }}
          />
        </div>
      </div>
    </>
  );
};

const BannerComponent = () => {
  return (
    <>
      <div className="bannerimage">
        <img
          src={BannerImage}
          alt=""
          className="bannerimagestyle"
          style={{ height: "400px", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="bannerinfo">
        <h1 className="mainheading" style={{ color: "#fff", fontSize: "2rem" }}>
          Hi, Iam Zaheer Abbas. Nice to meet you.
        </h1>

        <div className="container p-5">
          <p>
            🚀 Passionate about coding and creating innovative applications, I
            am a seasoned full-stack developer with three years of hands-on
            experience. My journey into the world of technology began at BITM
            College Bellary, where I honed my skills and earned a solid
            foundation in computer science.
          </p>
          <p>
            💡 Throughout my career, I've cultivated a deep love for
            problem-solving and translating ideas into robust, user-centric
            applications. My expertise spans both the front-end and back-end of
            development, allowing me to seamlessly bridge the gap between design
            and functionality.
          </p>
        </div>
      </div>
    </>
  );
};
