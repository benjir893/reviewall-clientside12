import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from '../../../assets/slide1.jpg';
import slide2 from '../../../assets/slide2.jpg';
import slide3 from '../../../assets/slide3.jpg';
import slide4 from '../../../assets/slide4.jpg';
import slide5 from '../../../assets/slide5.jpg';

const Categories = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h1 className="text-xl font-semibold font-parkinsans text-base-300 uppercase text-center -mt-10">salad</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h1 className="text-xl font-semibold font-parkinsans text-base-300 uppercase text-center -mt-10">pizza</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h1 className="text-xl font-semibold font-parkinsans text-base-300 uppercase text-center -mt-10">soup</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h1 className="text-xl font-semibold font-parkinsans text-base-300 uppercase text-center -mt-10">desert</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h1 className="text-xl font-semibold font-parkinsans text-base-300 uppercase text-center -mt-10">salad</h1>
      </SwiperSlide>
      
    </Swiper>
  );
};

export default Categories;
