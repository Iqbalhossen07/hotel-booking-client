import { Helmet } from "react-helmet-async";
import Footer from "../../Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
// import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
// import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import SignUp from "../SignUp/SignUp";
import UserTestimonials from "../UserTestimonials/UserTestimonials";

const Home = () => {
    return (
        <section>
            <Helmet>
                <title>
                    Hotel || Home
                </title>
            </Helmet>
           <div>
           <Banner></Banner>

           </div>
           <div>
            <About></About>
           </div>
            {/* <div>
            <FeaturedRooms></FeaturedRooms>
            </div> */}
            {/* <FeaturedProduct></FeaturedProduct> */}
            <div>
           <UserTestimonials></UserTestimonials>
           </div>
          
            <div className="mt-20 mb-20">
                <SignUp></SignUp>
            </div>
            <div>
                <Footer></Footer>
            </div>
          
        </section>
    );
};

export default Home;