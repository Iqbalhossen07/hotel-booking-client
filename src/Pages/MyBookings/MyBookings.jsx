

import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Footer from "../../Footer/Footer";
import { Helmet } from 'react-helmet-async';

const MyBookings = () => {
  const { stateChanged } = useContext(AuthContext);
  const [bookingsData, setBookingsData] = useState([]);
  const axiosSecure = useAxiosSecure()
  // console.log(bookingsData);
  const url = `/hotelBookings/?email=${stateChanged?.email}`;

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setBookingsData(data));
  // }, [url]);
  
    // useEffect(()=>{
    //   axios.get(url,{withCredentials:true})
    //   .then(res=>{
    //     setBookingsData(res.data)
    //   })
    //     // fetch(url)
    //     // .then(res=>res.json())
    //     // .then(data=>setBookingsData(data))
    // },[url])
    useEffect(()=>{
      axiosSecure.get(url)
    .then(res=>{
      setBookingsData(res.data)
    })
    },[url,axiosSecure])

  const deleteButton = (id, date) => {
    console.log('hitting', id);
    const currentDate = new Date();
    const bookingDate = new Date(date);

    if (bookingDate >= currentDate) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this booking!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          fetch(`https://hotel-booking-server-xi.vercel.app/hotelBookings/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
          const remaining = bookingsData.filter((item) => item._id !== id);
          setBookingsData(remaining);

          swal("Poof! Your booking has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your booking is safe!");
        }
      });
    } else {
      swal("Cannot delete a booking for a future date.");
    }
  };

  return (
    <section>
       <Helmet>
                <title>
                    Hotel || MyBookings
                </title>
            </Helmet>
      <div className="overflow-x-auto" data-aos="zoom-in">
        <table className="table">
          <thead>
            <tr className="bg-[#2B2D42] text-white">
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Date</th>
              <th>Add Review</th>
              <th>Show Review</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookingsData.map((booking) => (
              <tr key={booking._id}>
                <td className="text-[#3ED39A]">{booking.displayName}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={booking.image} alt="Hotel" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>${booking.Price_per_night}</td>
                <td>${booking.date}</td>
                <td>  <Link to={`/addReview/${booking._id}`}>
                  <td>Add Review</td>
                </Link></td>
                <td>  <Link to={`/showReview/${booking._id}`}>
                  <td>Show Review</td>
                </Link></td>
                <td>  <Link to={`/updateBooking/${booking._id}`}>
                  <td className='text-2xl'><BiEdit></BiEdit></td>
                </Link></td>
              
                

                <td onClick={() => deleteButton(booking._id, booking.date)} className="text-2xl text-[#F87272]">
                  <RiDeleteBin2Fill></RiDeleteBin2Fill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-20">
        <Footer></Footer>
      </div>
    </section>
  );
};

export default MyBookings;
