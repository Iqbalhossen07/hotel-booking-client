
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
import slider1 from '../../assets/testimonial1.jpg'
import slider2 from '../../assets/testimonial2.jpg'
import slider3 from '../../assets/testimonial3.png'

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
        <div>
          <h2 className='text-center text-4xl font-semibold text-[#26917C]'>Our Client Says</h2>
        </div>
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
      'background-image': `url(https://i.ibb.co/zhTX2Gf/pexels-pok-rie-1746589.jpg)`,
    }}
    data-swiper-parallax="-23%"
  ></div>
  <div className="title " data-swiper-parallax="-300" data-aos = "fade-down">
  Sajid Ahmed
  </div>
  <div className="subtitle" data-swiper-parallax="-200">
  <div className="avatar">
  <div className="w-24 rounded-full "
   style={{
    'background-image': `url(${slider1})`,
  }}
  >
 
   
  </div>
</div>
  
  </div>
  <div className="text" data-swiper-parallax="-100" data-aos = "fade-up">
  This offer will be allocated for a certain period, but why delay, come now to your desired shop.
    {/* Your content for Slide 3 */}
  </div>
</SwiperSlide>
<SwiperSlide>
  <div
    slot="container-start"
    className="parallax-bg"
    style={{
      'background-image': `url(https://i.ibb.co/LYQ4jf6/pexels-adriaan-greyling-751268.jpg)`,
    }}
    data-swiper-parallax="-23%"
  ></div>
  <div className="title" data-swiper-parallax="-300" data-aos = "fade-down">
  Amir Ahmed
  </div>
  <div className="subtitle" data-swiper-parallax="-200">
  <div className="avatar">
  <div className="w-24 rounded-full "
   style={{
    'background-image': `url(${slider2})`,
  }}
  >
 
   
  </div>
</div>
  
  </div>
  <div className="text" data-swiper-parallax="-100" data-aos = "fade-up">
  This offer will be allocated for a certain period, but why delay, come now to your desired shop.
    {/* Your content for Slide 3 */}
  </div>
</SwiperSlide>
<SwiperSlide>
  <div
    slot="container-start"
    className="parallax-bg"
    style={{
      'background-image': `url(https://i.ibb.co/hmfPB3k/pexels-oliver-sj-str-m-1078981.jpg)`,
    }}
    data-swiper-parallax="-23%"
  ></div>
  <div className="title" data-swiper-parallax="-300" data-aos = "fade-down">
  Masum Bhuiya 
  </div>
  <div className="subtitle" data-swiper-parallax="-200">
  <div className="avatar">
  <div className="w-24 rounded-full "
   style={{
    'background-image': `url(${slider3})`,
  }}
  >
 
   
  </div>
</div>
  
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