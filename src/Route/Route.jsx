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
                path: "/rooms",
                element: <Rooms></Rooms>,
            },
            {
                path: "/myBookings",
                element: <MyBookings></MyBookings>,
            },
            {
                path: "/roomsDetails/:id",
                element: <RoomsDetails></RoomsDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path: "/addBookings/:id",
                element: <AddBookings></AddBookings>,
                loader: ({params})=> fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path: "/updateBooking/:id",
                element: <UpdateBookings></UpdateBookings>,
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