
import { AiOutlineGoogle } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import './socialIcons.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase/Firebase.config';


const SocialIcons = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                toast.success("Login Successfully")
                navigate(location?.state ? location.state : '/')
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <section>
            <div className='space-y-4'>
            <div>
           
            </div>
            <div>
            <div className="w-80 md:w-96 h-12 flex items-center justify-center">
                <button onClick={handleGoogleSignIn} className="w-full btn btn-outline hover:bg-[#54e2d2] hover:border-[#54e2d2] flex items-center">
                    <AiOutlineGoogle className="mr-2 google-logo" /> 
                    Continue with Google
                </button>

                
            </div>
            </div>
            <ToastContainer />
        </div>
        </section>
        
    );
};

export default SocialIcons;

