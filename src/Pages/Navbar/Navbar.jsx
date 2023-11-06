import { NavLink } from "react-router-dom";
import './navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import auth from "../../Firebase/Firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

  

  const {stateChanged,logOut } = useContext(AuthContext)
  
 

  const logOutButton = ()=>{


    logOut(auth)
    .then(()=>{
       
      toast.info("Logout Successfully");

    })
    .catch(error=>{
      
      toast.error(error.message);
    })
  }
    const links =  
  <div className="flex gap-2 text-base flex-col  lg:flex-row ">
  <NavLink to="/"><li>Home</li></NavLink>
  <NavLink to="/rooms">Rooms<li></li></NavLink>
  <NavLink to="/myBookings"><li>My Bookings</li></NavLink>


  



  </div>
   
    return (
        <div className="navbar bg-[#54e2d2]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-[#54e2d2] rounded-box w-52">
      {links}
      </ul>
    </div>
   {/* <img className="w-28" src="https://i.ibb.co/PT0cjt1/logo.png" alt="" /> */}
   {/* <p className="font-medium">booking</p> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end ">
 <div className="dropdown dropdown-end">
 <div className="flex items-center">
 
  {
    
    stateChanged && stateChanged?.photoURL ? (
    <>
      <p>{stateChanged?.displayName}</p>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={stateChanged.photoURL} alt="User Avatar" />
        </div>
      </label>
    </>
  ) : (
    <p></p>
    
  )}
 
</div>


      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <NavLink to="/login">
        <li>
        Login
        </li>
        </NavLink>
        <NavLink to="/register">
        <li>Register</li>
        </NavLink>
        <li onClick={logOutButton}>Logout</li>
        
      </ul>
 </div>
 <ToastContainer />
 {
  stateChanged ? <button onClick={logOutButton} className="hidden md:btn md:btn-error">Logout</button> :
  <NavLink to="/login">
    <button  className="btn btn-outline  ">Login</button>
    
  </NavLink>
 }
 
  </div>
</div>
    );
};

export default Navbar;