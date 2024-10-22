import React from "react";
import Banner from "./Banner/Banner";
import HomeCetagory from "./Home/HomeCetagory";
import CetagoryShowCase from "./Home/CetagoryShowCase";
import Register from "./Home/Register";
import Question from "./Home/Question";
import AboutUs from "./Home/AboutUs";
// import Location from "./Location";

const Home = () => {
  return (
    <div className="font-poppins">
      <Banner />
      <HomeCetagory />
      <CetagoryShowCase />
      <Register/>
   
      <Question/>
      {/* <Location/> */}
      <AboutUs/>
    </div>
  );
};

export default Home;
