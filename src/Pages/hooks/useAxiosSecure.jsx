import axios from "axios";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const axiosSecure = axios.create({
    baseURL:'https://hotel-booking-server-xi.vercel.app',
    withCredentials:true
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext)
    useEffect(()=>{
        axiosSecure.interceptors.response.use( (response)=> {
            console.log(response)
            return response;
          },  (error)=> {
           if(error.response.status === 401 || error.response.status === 403){
            logOut()
            .then(()=>{
                navigate('/login')
            toast.info("Logout Successfully");
            


            })
            .catch(error=>{
                // swal("Good job!", error.message, "error");
                
            toast.error(error.message);
            })
                }
            
            
          });
    },[logOut,navigate])
    return axiosSecure;
    
};

export default useAxiosSecure;