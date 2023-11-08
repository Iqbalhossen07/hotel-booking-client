

import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import SocialIcons from "../SocialICons/SocialICons";



const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
    const {signUser} = useContext(AuthContext)

    const handleLoginPage = e=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        
        
        signUser(email,password)
       
        .then(result=>{
          toast.success("Login Successfully!")
          navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
          toast.error("Email Or Password do not match")
                
                
        })
      

        
    }
    return (
        <section>
        <div className="hero md:mt-10 lg:20 ">
          <div className="hero-content flex-col ">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-[#54e2d2]">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-xl ">
              <form onSubmit={handleLoginPage} className="w-80 md:w-96">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input name="email" type="text" placeholder="Email" className=" input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input name="password" type="Password" placeholder="Password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6 mb-3">
                  <button className="btn bg-[#54e2d2] hover:bg-[#54e2d2] text-white">Login</button>
                </div>
              </form>
              <ToastContainer />
        
            <NavLink to="/register">
            <p className="flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
              Don't have an account?
              <button
                href=""
                className="ml-1 block font-sans text-sm font-bold leading-normal text-[#54e2d2] antialiased"
              >
                Register
              </button>
            </p>
            </NavLink>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-20 mt-5">
                    <SocialIcons></SocialIcons>
                  </div>
        </section>
    );
};

export default Login;