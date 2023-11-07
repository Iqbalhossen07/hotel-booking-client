import Banner from "../Banner/Banner";
// import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import SignUp from "../SignUp/SignUp";
// import UserTestimonials from "../UserTestimonials/UserTestimonials";

const Home = () => {
    return (
        <section>
           <div>
           <Banner></Banner>
           </div>
            <div>
            <FeaturedRooms></FeaturedRooms>
            </div>
            {/* <FeaturedProduct></FeaturedProduct> */}
            {/* <UserTestimonials></UserTestimonials> */}
            <div className="mt-20 mb-20">
                <SignUp></SignUp>
            </div>
        </section>
    );
};

export default Home;