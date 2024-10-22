import React, { useRef } from "react";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from "../../assets/images/clients/01.jpg";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slider from "./Slider";

 const img1 = 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D'
 const img2 = 'https://images.unsplash.com/photo-1558499932-9609acb6f443?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D'
 const img3 = 'https://images.unsplash.com/photo-1586351012965-861624544334?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8'
 const img4 = 'https://plus.unsplash.com/premium_photo-1684953583758-3d7feada0a75?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8'
 const img5 = 'https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 const img6 = 'https://images.unsplash.com/photo-1596245195341-b33a7f275fdb?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
 const img7 = 'https://images.unsplash.com/photo-1721746670620-30b167bcce95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'

//  



const Testimonial = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="bg-slate-200">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider img={img1} title={' Help us improve our productivity'} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider img={img2} title={' The best  improve our product'}/>
        </SwiperSlide>
        <SwiperSlide>
          <Slider img={img3} title={' Emagin product our productivity'}/>
        </SwiperSlide>
        <SwiperSlide>
          <Slider img={img4} title={' life best product here productivity'}/>
        </SwiperSlide>
        <SwiperSlide>
          <Slider img={img5} title={' most popular our productivity'}/>
        </SwiperSlide>
        <SwiperSlide>
          <Slider img={img6} title={' Help us improve our productivity'}/>
        </SwiperSlide>
        <SwiperSlide>
          <Slider img={img7} title={' Help us improve our productivity'}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
