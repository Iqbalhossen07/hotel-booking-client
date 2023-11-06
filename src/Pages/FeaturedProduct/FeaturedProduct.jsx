import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
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

const FeaturedProduct = () => {
  
  return (
   <section className='' >
    <div className='md:flex items-center gap-6'>
    <div className=' md:w-1/3 space-y-3' data-aos = "fade-right">
        <div className='flex justify-center'>
        <h2 className='text-3xl md:text-3xl lg:text-4xl font-medium text-[#3ED39A] '> Featured Products</h2>
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
          <img src="https://i.ibb.co/5rgfr5z/vivo13.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/KFFyK3h/apple-i-Pnone-13-pro.webp" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://i.ibb.co/5rgfr5z/vivo13.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/KFFyK3h/apple-i-Pnone-13-pro.webp" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://i.ibb.co/5rgfr5z/vivo13.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/KFFyK3h/apple-i-Pnone-13-pro.webp" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://i.ibb.co/5rgfr5z/vivo13.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/KFFyK3h/apple-i-Pnone-13-pro.webp" />
        </SwiperSlide>
        
       
      </Swiper>
    </div>
    </div>
   

   
   </section>
  );
};

export default FeaturedProduct;


