import { Link } from 'react-router-dom';
import banner from '../../assets/video.mp4'
const Banner = () => {
    return (
        <section>
            {/* style={{backgroundImage: 'url(https://i.ibb.co/gSNK8Ft/banner.jpg)'}} */}
            <div className="hero min-h-screen" >
          
                        <div className="hero-overlay bg-opacity-40"></div>
                        <video  autoPlay className='object-cover w-full h-full' width="100%" height="auto">
                                <source src={banner} type="video/mp4" />
                            
                            </video>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#26917C]">40% Offers</h1>
                    <p className="mb-5 md:text-xl lg:2xl">40% discount on any room booking. So book your preferred room without delay.</p>
                   <Link to='/rooms'>
                   <button className="btn btn-primary bg-[#26917C] hover:bg-[#26917C] border-none">Book Now</button>
                   </Link>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default Banner;