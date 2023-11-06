

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import swal from "sweetalert";
// import { Link } from "react-router-dom";

// const MyBookings = () => {
//   const { stateChanged } = useContext(AuthContext);
//   const [bookingsData, setBookingsData] = useState([]);
//   console.log(bookingsData);
//   const url = `http://localhost:5000/hotelBookings/?email=${stateChanged?.email}`;

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setBookingsData(data));
//   }, [url]);

//   const deleteButton = (id) => {
//     console.log('hitting', id);
//     swal({
//       title: "Are you sure?",
//       text: "Once deleted, you will not be able to recover this imaginary file!",
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     }).then((willDelete) => {
//       if (willDelete) {
//         fetch(`http://localhost:5000/hotelBookings/${id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//           });
//         const remaining = bookingsData.filter((item) => item._id !== id);
//         setBookingsData(remaining);

//         swal("Poof! Your imaginary file has been deleted!", {
//           icon: "success",
//         });
//       } else {
//         swal("Your imaginary file is safe!");
//       }
//     });
//   };

  

//   return (
//     <section>
//       <div className="overflow-x-auto" data-aos="zoom-in">
//         <table className="table">
//           <thead>
//             <tr className="bg-[#2B2D42] text-white">
//               <th>Name</th>
//               <th>Image</th>
//               <th>Price</th>
//               <th>Date</th>
//               <th>Add Review</th>
//               <th>Show Review</th>
//               <th>Delete</th>
//               <th>EDIT</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookingsData.map((booking) => (
//               <tr key={booking._id}>
//                 <td className="text-[#3ED39A]">{booking.displayName}</td>
//                 <td>
//                   <div className="flex items-center space-x-3">
//                     <div className="avatar">
//                       <div className="mask mask-squircle w-12 h-12">
//                         <img src={booking.image} alt="Hotel" />
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td>${booking.Price_per_night}</td>
//                 <td>${booking.date}</td>
//                 <Link to={`/addReview/${booking._id}`}>
//                 <td>Add Review</td>
//                 </Link>
//                 <Link to={`/showReview/${booking._id}`}>
//                 <td>Show Review</td>
//                 </Link>
//                 <td  onClick={() => deleteButton(booking._id)} className=" text-2xl text-[#F87272]">
//                   Delete
//                 </td>
                
//                 <Link to={`/updateBooking/${booking._id}`}>
//                 <td className="">Edit</td>
//                 </Link>
               
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default MyBookings;


import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const MyBookings = () => {
  const { stateChanged } = useContext(AuthContext);
  const [bookingsData, setBookingsData] = useState([]);
  console.log(bookingsData);
  const url = `http://localhost:5000/hotelBookings/?email=${stateChanged?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookingsData(data));
  }, [url]);

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
          fetch(`http://localhost:5000/hotelBookings/${id}`, {
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
              <th>Delete</th>
              <th>EDIT</th>
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
                <Link to={`/addReview/${booking._id}`}>
                  <td>Add Review</td>
                </Link>
                <Link to={`/showReview/${booking._id}`}>
                  <td>Show Review</td>
                </Link>
                <td onClick={() => deleteButton(booking._id, booking.date)} className="text-2xl text-[#F87272]">
                  Delete
                </td>

                <Link to={`/updateBooking/${booking._id}`}>
                  <td>Edit</td>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyBookings;
