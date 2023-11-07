import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './featured.css';

// import required modules
import { Pagination } from 'swiper/modules';

const FeaturedRooms = () => {
    return (
        <div>
          <div>
            <h2 className='text-center text-4xl font-semibold'>Meet Our Team</h2>
          </div>
             <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="https://i.ibb.co/2ggtY0h/pexels-mikhail-nilov-7681297.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/8gCB4zT/pexels-kampus-production-5920775.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/vz02mGg/pexels-georgios-tsatas-15791539.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/jJsPHtM/pexels-omer-havivi-17071640.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/8PQDhpj/pexels-cottonbro-studio-5378708.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/G9F47V5/pexels-cottonbro-studio-6474537.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/8d4YMx6/pexels-tima-miroshnichenko-6170398.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/jDCJ7SV/pexels-cottonbro-studio-4100481.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/M5Fs0ss/pexels-andrea-piacquadio-3770106.jpg" alt="" /> </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default FeaturedRooms;