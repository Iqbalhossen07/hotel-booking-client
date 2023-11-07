

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

            





const SignUp = () => {

  
    const handleSubscribeClick = () => {
    
      toast.success('You have successfully subscribed!', {
        duration: 3000, 
      });
  
    };
  
    return (
      <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/LYQ4jf6/pexels-adriaan-greyling-751268.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-[#26917C]">Please Subscribe</h1>
            <form>
              {/* <header className="footer-title">Newsletter</header> */}
              <fieldset className="form-control w-80">
                <div className="relative">
                  <input type="text"  placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                 <Link to='/'>
                  <button className="btn btn-primary bg-[#26917C] hover:bg-[#26917C] border-none absolute top-0 right-0 rounded-l-none" onClick={handleSubscribeClick}>
                    Subscribe
                  </button>
                 </Link>
                </div>
              </fieldset>
              {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter amount</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="0.01" className="input input-bordered" />
                        <span className="text-red-600">BTC</span>
                        <button>Submit</button>
                    </label>
                    </div> */}
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignUp;
  