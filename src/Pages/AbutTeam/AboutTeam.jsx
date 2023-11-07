
// const AboutTeam = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default AboutTeam;







import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';
// import featured1 from '../../assets/feutured1.jpg'
// import featured2 from '../../assets/featured2.jpg'
// import featured3 from '../../assets/featured3.jpg'
// import featured6 from '../../assets/featured6.jpg'
// import featured8 from '../../assets/featured8.jpg'
// import featured9 from '../../assets/featured9.jpg'
// import featured10 from '../../assets/featured10.jpg'
// import featured11 from '../../assets/featured11.jpg'
// import featured12 from '../../assets/featured12.webp'
// import featured13 from '../../assets/featured13.webp'
// import featured14 from '../../assets/featured14.png'


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const AboutTeam = () => {
  
  return (
   <section className='' >
    <div className='md:flex items-center gap-6'>
    <div className=' md:w-1/3 space-y-3' data-aos = "fade-right">
        <div className='flex justify-center'>
        <h2 className='text-3xl md:text-3xl lg:text-4xl font-medium text-[#26917C] '> Meet Our Team</h2>
        </div>
        <div className='flex justify-center'>
        <img src="" alt="" />
        </div>
       <div className='text-justify'>
       <p  className='text-[#706F6F] text-center'>Connect with us, your satisfaction starts here.</p>
       </div>
    
        
           
       

    </div>
  
  
   <div className='md:w-2/3' data-aos = "fade-left">
   
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/2ggtY0h/pexels-mikhail-nilov-7681297.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/8gCB4zT/pexels-kampus-production-5920775.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/vz02mGg/pexels-georgios-tsatas-15791539.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/jJsPHtM/pexels-omer-havivi-17071640.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/8PQDhpj/pexels-cottonbro-studio-5378708.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/G9F47V5/pexels-cottonbro-studio-6474537.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/8d4YMx6/pexels-tima-miroshnichenko-6170398.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/jDCJ7SV/pexels-cottonbro-studio-4100481.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/M5Fs0ss/pexels-andrea-piacquadio-3770106.jpg" />
        </SwiperSlide>
        
      </Swiper>
    </div>
    </div>
   

   
   </section>
  );
};

export default AboutTeam;


