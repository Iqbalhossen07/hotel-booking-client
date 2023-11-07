import { Link } from "react-router-dom";

const About = () => {
    return (
        <section>
      

<div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2 relative'>
            <img src="https://i.ibb.co/bz5D54P/about1.jpg" className="w-full  rounded-lg shadow-2xl" />   
          
          </div>
          <div className='lg:w-1/2'>
            <h1 className="text-4xl font-semibold">About Us</h1>
            <p className="py-6 text-justify">
            Our hotel provides the best service here, due to which we are popular among all. Those of us who come here once, come again later. We try our best to provide the best service to a client. <br /> <br />

            In a glass-and-brick building in a residential neighbourhood,
            Understated rooms provide smart TVs, air conditioners and minibars, as well as tea and coffeemaking facilities. <br /> <br />

            Dining options include a cafe and an international restaurant. Parking, Wi-Fi and airport transfers are available.
</p>
            <Link to='/rooms'>
            <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
        </section>
    );
};

export default About;