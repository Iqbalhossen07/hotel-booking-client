import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {stateChanged,loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname)
    if(loading){
        return  <div className="flex justify-center items-center"><span className=" loading loading-spinner text-error"></span></div>
    }
    else{
        
        if(stateChanged?.email){
            return children;
        }
        else{
            return <Navigate state={location.pathname} to="/login"></Navigate>
        }
    }
    

};

export default PrivateRoute;