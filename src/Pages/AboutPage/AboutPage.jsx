import { useEffect } from "react";
import Footer from "../../Footer/Footer";
import About from "../About/About";
import AboutTeam from "../AbutTeam/AboutTeam";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




const AboutPage = () => {

  useEffect(()=>{
    Aos.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      offset: 100, 
    })
  },[])
    return (
//         <section >
//            <Helmet>
//                 <title>
//                     Hotel || About
//                 </title>
//             </Helmet>
//             {/* first section */}
//             <div>
//             <About></About>
//         </div>
//         {/* second section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" data-aos="zoom-in">
//             {/* first card */}
//             <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
//   <div className="p-6">
//     <h5 className="block mb-2 font-sans text-xl md:text-2xl lg:text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-[#26917C]">
//     Our History
//     </h5>
//     <p className="block text-[#706F6F] font-sans text-justify  text-base antialiased font-light leading-relaxed text-inherit">
//     Since our establishment in 1990, we have been committed to providing exceptional service and creating an atmosphere of warmth and elegance. Marshal Luxury was born out of a vision to offer guests a home away from home. Our journey began with a small bed and breakfast, and over the years, we have grown into a renowned luxury hotel that caters to discerning travelers from around the world.
//     </p>
//   </div>
//   <div className="p-6 pt-0">
  
//   </div>
// </div>
//             {/* second card */}
//             <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
//   <div className="p-6">
//     <h5 className="block mb-2 font-sans text-xl md:text-2xl lg:text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-[#26917C]">
//     Our Mission
//     </h5>
//     <p className="block font-sans text-justify  text-base antialiased font-light leading-relaxed text-inherit text-[#706F6F]">
//     At Marshal Luxury, our mission is to exceed the expectations of our guests by providing unparalleled hospitality, creating unforgettable memories, and ensuring the utmost in comfort and relaxation. We believe in the power of personal connections and the magic that a genuinely warm welcome can bring.
//     We believe in the power of personal connections and the magic that a genuinely .
//     </p>
//   </div>
 
// </div>
//             {/* third card */}
//             <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
//   <div className="p-6">
//     <h5 className="block mb-2 font-sans text-xl md:text-2xl lg:text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-[#26917C]">
//     Our Values
//     </h5>
//     <p className="block font-sans text-justify text-base antialiased font-light leading-relaxed text-inherit text-[#706F6F]">
//      We are dedicated to delivering the highest level of service with a personal touch, ensuring that each guest feels valued and cherished.

//     We believe in the art of hospitality, making every guest feel like an honored friend from the moment they step through our doors.We are actively involved in the local community, supporting local businesses and contributing to a sustainable future.




//     </p>
//   </div>
  
// </div>
//         </div>

//       <div>
//        <AboutTeam></AboutTeam>
//       </div>
//       <div>
//         <Footer></Footer>
//       </div>
//         </section>

<section>
<Helmet>
  <title>Hotel || About</title>
</Helmet>
{/* first section */}
<div>
  <About></About>
</div>

<Tabs>
  <TabList>
    <Tab>Our History</Tab>
    <Tab>Our Mission</Tab>
    <Tab>Our Values</Tab>
  </TabList>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" data-aos="zoom-in">
    <div>
    <TabPanel>
      {/* Content for the "Our History" tab */}
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl md:text-2xl lg:text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-[#26917C]">
            Our History
          </h5>
          <p className="block text-[#706F6F] font-sans text-justify  text-base antialiased font-light leading-relaxed text-inherit">
            Since our establishment in 1990, we have been committed to providing exceptional service and creating an atmosphere of warmth and elegance. Marshal Luxury was born out of a vision to offer guests a home away from home. Our journey began with a small bed and breakfast, and over the years, we have grown into a renowned luxury hotel that caters to discerning travelers from around the world.
          </p>
        </div>
        <div className="p-6 pt-0"></div>
      </div>
    </TabPanel>

    <TabPanel>
      {/* Content for the "Our Mission" tab */}
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl md:text-2xl lg:text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-[#26917C]">
            Our Mission
          </h5>
          <p className="block font-sans text-justify  text-base antialiased font-light leading-relaxed text-inherit text-[#706F6F]">
            At Marshal Luxury, our mission is to exceed the expectations of our guests by providing unparalleled hospitality, creating unforgettable memories, and ensuring the utmost in comfort and relaxation. We believe in the power of personal connections and the magic that a genuinely warm welcome can bring.
            We believe in the power of personal connections and the magic that a genuinely .
          </p>
        </div>
      </div>
    </TabPanel>

    <TabPanel>
      {/* Content for the "Our Values" tab */}
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl md:text-2xl lg:text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-[#26917C]">
            Our Values
          </h5>
          <p className="block font-sans text-justify text-base antialiased font-light leading-relaxed text-inherit text-[#706F6F]">
            We are dedicated to delivering the highest level of service with a personal touch, ensuring that each guest feels valued and cherished.
            We believe in the art of hospitality, making every guest feel like an honored friend from the moment they step through our doors. We are actively involved in the local community, supporting local businesses and contributing to a sustainable future.
          </p>
        </div>
      </div>
    </TabPanel>
    </div>
    <div>
    
    </div>
  </div>
</Tabs>

<div>
  <AboutTeam></AboutTeam>
</div>
<div>
  <Footer></Footer>
</div>
</section>
    );
};

export default AboutPage;