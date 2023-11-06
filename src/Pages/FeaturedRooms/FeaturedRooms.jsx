import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const FeaturedRooms = () => {
    return (
        <div>
             <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="https://i.ibb.co/ZmWMC8G/pexels-pixabay-164595.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/7pYJFgw/pexels-vii-wolves-11234468.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/0yg4vND/pexels-pixabay-237371.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/n0g2w3g/pexels-furkan-tumer-8417307.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/Ny9RwWW/pexels-ushindi-namegabe-10024090.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/Y3MF18W/pexels-curtis-adams-18038053.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/kqdLkjb/pexels-luis-martinez-4078613.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/pZxqtzn/pexels-curtis-adams-6035359.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/TvZNgVn/pexels-thiha-soe-5883738.jpg" alt="" /> </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default FeaturedRooms;