import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'


const About = () => {

  useEffect(()=>{
    Aos.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      offset: 100, 
    })
  },[])
    return (
        <section>
      

<div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row" data-aos = "zoom-in">
          <div className='lg:w-1/2 relative' data-aos = "fade-right">
            <img src="https://i.ibb.co/bz5D54P/about1.jpg" className="w-full  rounded-lg shadow-2xl" />   
          
          </div>
          <div className='lg:w-1/2' data-aos = "fade-left">
            <h1 className="text-base md:text-3xl lg:text-4xl font-semibold text-[#26917C]">About Us</h1>
            <p className="py-6 text-justify text-[#706F6F]">
            Our hotel provides the best service here, due to which we are popular among all. Those of us who come here once, come again later. We try our best to provide the best service to a client. <br /> <br />

            In a glass-and-brick building in a residential neighbourhood,
            Understated rooms provide smart TVs, air conditioners and minibars, as well as tea and coffeemaking facilities. <br /> <br />

            Dining options include a cafe and an international restaurant. Parking, Wi-Fi and airport transfers are available.
</p>
            <Link to='/rooms'>
            <button className="btn btn-primary bg-[#26917C] hover:bg-[#26917C] border-none">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
      
        </section>
    );
};

export default About;