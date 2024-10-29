import React from "react";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay } from "swiper/modules";
import { div } from "framer-motion/client";

const Sponsore = () => {
  const sponsorList = [
    {
      imgUrl: "/src/assets/images/sponsor/01.png",
    },
    {
      imgUrl: "/src/assets/images/sponsor/02.png",
    },
    {
      imgUrl: "/src/assets/images/sponsor/03.png",
    },
    {
      imgUrl: "/src/assets/images/sponsor/04.png",
    },
    {
      imgUrl: "/src/assets/images/sponsor/05.png",
    },
    {
      imgUrl: "/src/assets/images/sponsor/06.png",
    },
  ];

  return (
    <div className="py-20 px-3 bg-slate-50">
  <div className="max-w-screen-xl mx-auto">
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper flex justify-between items-center"
    >
      {sponsorList.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="w-full md:w-52 flex justify-center">
            <img className="w-full h-auto max-w-xs" src={item.imgUrl} alt={`Sponsor ${i + 1}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

  );
};

export default Sponsore;
