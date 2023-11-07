import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Rooms from "../Pages/Rooms/Rooms";
import MyBookings from "../Pages/MyBookings/MyBookings";
import RoomsDetails from "../Pages/RoomsDetails/RoomsDetails";
import AddBookings from "../Pages/AddBookings/AddBookings";
import UpdateBookings from "../Pages/UpdateBookings/UpdateBookings";
import AddReview from "../Pages/AddReview/AddReview";
import ShowReview from "../Pages/ShowReview/ShowReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AboutPage from "../Pages/AboutPage/AboutPage";
import Contact from "../Pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path:"/about",
                element: <AboutPage></AboutPage>,
            },
            {
                path: "/contact",
                element:<Contact></Contact>
            },
            
            {
                path: "/rooms",
                element: <Rooms></Rooms>,
            },
            {
                path: "/myBookings",
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
            },
            {
                path: "/roomsDetails/:id",
                element: <RoomsDetails></RoomsDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path: "/addBookings/:id",
                element: <PrivateRoute><AddBookings></AddBookings></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path: "/updateBooking/:id",
                element: <PrivateRoute><UpdateBookings></UpdateBookings></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/hotelBookings/${params.id}`)
                
            },
            {
                path: "/addReview/:id",
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/hotelBookings/${params.id}`)
            },
            {
                path: "/showReview/:id",
                element: <ShowReview></ShowReview>,
                loader: ({params})=> fetch(`http://localhost:5000/hotelBookings/${params.id}`)
                
              }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register></Register>,
    },
])

export default router;