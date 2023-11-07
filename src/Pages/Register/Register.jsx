import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import SocialIcons from "../SocialICons/SocialICons";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    // console.log(createUser) 


    const handleRegisterPage = e=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const picture = e.target.image.value;
        const password = e.target.password.value;
        // console.log(name,email,picture,password)

        if (!/(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{6,}/.test(password)) {
            // return alert("Password must have at least one uppercase letter, one special character, and a minimum length of 6 characters.")
            return toast.error("Password must have at least one uppercase letter, one special character, and a minimum length of 6 characters.")
            
        }
       

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            // swal("Good job!", "create successfully!", "success");
       
          toast.success("Create Successfully")
          updateProfile(result.user,{
            displayName:name,
            photoURL: picture,
          }
          )
          .then(()=>{
            window.location.reload()
          })
        
            
        })
        .catch(error=>{
            console.error(error)
            // swal("Good job!", "something wrong!", "error");
          toast.error(error.message)
           
           
        })
        


    }
    return (
        <section>
        <div className="hero md:mt-10 lg:20 ">
         <div className="hero-content flex-col ">
           <div className="text-center">
             <h1 className="text-4xl font-bold text-[#54e2d2]">Register now!</h1>
           </div>
           <div className="card flex-shrink-0 w-full max-w-sm ">
             <form onSubmit={handleRegisterPage} className="w-80 md:w-96">
               <div className="form-control">
                 <label className="label">
                 <span className="label-text">Name</span>
                 </label>
                 <input  name="name" type="text" placeholder="Enter Your Name" className="input input-bordered " required />
               </div>
               <div className="form-control">
                 <label className="label">
                 <span className="label-text">Email</span>
                 </label>
                 <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" required />
               </div>
               <div className="form-control">
                 <label className="label">
                 <span className="label-text">Photo</span>
                 </label>
                 <input name="image" type="text" placeholder="Enter Your PhotoURL" className="input input-bordered" required />
               </div>
               <div className="form-control">
                 <label className="label">
                 <span className="label-text">Password</span>
                 </label>
                 <input name="password" type="password" placeholder="Enter Your Password" className="input input-bordered" required />
               </div>
               <div className="form-control mt-6 mb-3">
                 <button className="btn bg-[#54e2d2] hover:bg-[#54e2d2] text-white">Register</button>
               </div>
             </form>
             <ToastContainer />
      
 
         <NavLink to="/login">
         <p className=" block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
             Already have an account?
             <button
                 className="font-medium text-[#54e2d2] transition-colors hover:text-[#54e2d2]"
                 href=""
             >
                 Login
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

export default Register;