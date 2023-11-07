

import { HiOutlineMail } from "react-icons/hi";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
// import { useEffect } from "react";
// import Aos from "aos";
// import 'aos/dist/aos.css'

const ContactAddress = () => {

    // useEffect(()=>{
    //     Aos.init({
    //       duration: 1000, 
    //       easing: 'ease-in-out', 
    //       offset: 100, 
    //     })
    //   },[])
    return (
       <section>
        <h2 className="text-center text-3xl md:text-4xl font-medium text-[#3ED39A] mb-10" data-aos = "flip-down">Contact With Us</h2>
         <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-3 lg:gap-8 mb-10">
            <div data-aos = "fade-right" className="card  bg-[#042C3E] shadow-xl">
           
            <div className="card-body h-52  items-center text-center">
                <h2 className="card-title text-white text-5xl"><HiOutlineMail></HiOutlineMail></h2>
                {/* <p className="text-white text-3xl font-medium">Fast Delivery</p> */}
                <p className="text-white ">iqbalhossen0711@gmail.com</p>
                
            </div>
            </div>
            <div data-aos = "fade-down" className="card  bg-[#042C3E] shadow-xl">
           
            <div className="card-body h-52  items-center text-center">
                <h2 className="card-title text-white text-5xl"><AiTwotoneHome></AiTwotoneHome></h2>
                {/* <p className="text-white text-3xl font-medium">Free Shipping</p> */}
                <p className="text-white">Farmgate,Tejgaon,Dhaka</p>
                
            </div>
            </div>
            <div data-aos = "fade-left" className="card  bg-[#042C3E] shadow-xl">
           
            <div  className="card-body h-52  items-center text-center">
                <h2 className="card-title text-white text-4xl"><BsFillTelephoneOutboundFill></BsFillTelephoneOutboundFill></h2>
                {/* <p className="text-white text-3xl font-medium">24/7 Services</p> */}
                <p className="text-white">01781834638</p>
                
            </div>
            </div>
           
        </div>
       </section>
    );
};

export default ContactAddress;