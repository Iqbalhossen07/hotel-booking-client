
// const UserTestimonials = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default UserTestimonials;

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
// import slider1 from '../../assets/slider4.jpg'
// import slider2 from '../../assets/slider1.jpg'
// import slider3 from '../../assets/slider3.jpg'
// import Aos from 'aos';
// import 'aos/dist/aos.css'
import slider1 from '../../assets/testimonial-edward.png'

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
const UserTestimonials = () => {

//   useEffect(()=>{
//         Aos.init({
//           duration: 1000, 
//           easing: 'ease-in-out', 
//           offset: 100, 
//         })
//       },[])


    return (
        <>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
  
<SwiperSlide>
  <div
    slot="container-start"
    className="parallax-bg"
    style={{
      'background-image': `url('<img src="https://i.ibb.co/5rgfr5z/vivo13.jpg" />')`,
    }}
    data-swiper-parallax="-23%"
  ></div>
  <div className="title text-white" data-swiper-parallax="-300" data-aos = "fade-down">
  Buy any product with 20% discount. 
  </div>
  <div className="subtitle" data-swiper-parallax="-200">
  
  </div>
  <div className="text text-white" data-swiper-parallax="-100" data-aos = "fade-up">
  This offer will be allocated for a certain period, but why delay, come now to your desired shop.
  </div>
</SwiperSlide>
<SwiperSlide>
  <div
    slot="container-start"
    className="parallax-bg"
    style={{
      'background-image': `url('<img src="https://i.ibb.co/5rgfr5z/vivo13.jpg" />')`,
    }}
    data-swiper-parallax="-23%"
  ></div>
  <div className="title" data-swiper-parallax="-300" data-aos = "fade-down">
 
  </div>
  <div className="subtitle" data-swiper-parallax="-200">
  <div className="avatar">
  <div className="w-96 rounded-full "
   style={{
    'background-image': `url(${slider1})`,
  }}
  >
 
    {/* <img src="https://i.ibb.co/5rgfr5z/vivo13.jpg" /> */}
  </div>
</div>
   
  </div>
  <div className="text" data-swiper-parallax="-100" data-aos = "fade-up">
  {/* This offer will be allocated for a certain period, but why delay, come now to your desired shop.
   */}
   <img src="https://i.ibb.co/5rgfr5z/vivo13.jpg" alt="" />
  </div>
</SwiperSlide>
<SwiperSlide>
  <div
    slot="container-start"
    className="parallax-bg"
    style={{
      'background-image': `url(https://i.ibb.co/5rgfr5z/vivo13.jpg)`,
    }}
    data-swiper-parallax="-23%"
  ></div>
  <div className="title" data-swiper-parallax="-300" data-aos = "fade-down">
  Buy any product with 20% discount. 
  </div>
  <div className="subtitle" data-swiper-parallax="-200">
  
  </div>
  <div className="text" data-swiper-parallax="-100" data-aos = "fade-up">
  This offer will be allocated for a certain period, but why delay, come now to your desired shop.
    {/* Your content for Slide 3 */}
  </div>
</SwiperSlide>

        </Swiper>
      </>
    );
};

export default UserTestimonials;