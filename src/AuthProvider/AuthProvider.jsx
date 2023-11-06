import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import swal from 'sweetalert'
import axios from "axios";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

   
    const [stateChanged,setStateChanged] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const signUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // useEffect(()=>{
    //     const unSubscribe = onAuthStateChanged(auth,user=>{
    //         setLoading(false)
    //         return setStateChanged(user)
    //     })
    //     return ()=>{
    //          unSubscribe()
    //     }
    // },[])

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,user=>{
            setLoading(false)
            console.log('current User', user)
            const loggedUser = {email: user?.email}
            if(user){
                axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
          .then(res=>{
            console.log(res.data)
 
          })
            }
            return setStateChanged(user)
        })
        return ()=>{
             unSubscribe()
        }
    },[])

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    const userInfo = {
        createUser,
        signUser,
        stateChanged,
        logOut,
        loading

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
       
        </AuthContext.Provider>
    );
};

export default AuthProvider;