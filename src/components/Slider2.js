import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../images/image1.jpg";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-1/2"
      >
        <SwiperSlide>
          <img className="w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={image1} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
