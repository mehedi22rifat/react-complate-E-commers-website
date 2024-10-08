import React from "react";
import Banner from "./Banner/Banner";
import HomeCetagory from "./Home/HomeCetagory";
import CetagoryShowCase from "./Home/CetagoryShowCase";

const Home = () => {
  return (
    <div className="font-poppins">
      <Banner />
      <HomeCetagory />
      <CetagoryShowCase />
    </div>
  );
};

export default Home;
