// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// // import axios from "axios";
// import moment from "moment"; 
// import swal from "sweetalert";




// const MyBookings = () => {
//     const {stateChanged} = useContext(AuthContext)
//     const [bookingsData,setBookingsData] = useState([])
//     console.log(bookingsData)
//     const url = `http://localhost:5000/hotelBookings/?email=${stateChanged?.email}`
//     useEffect(()=>{
//     //     axios.get(url,{withCredentials:true})
//     //   .then(res=>{
//     //     setBookingsData(res.data)
//     //   })
//         fetch(url)
//         .then(res=>res.json())
//         .then(data=>setBookingsData(data))
//         // axiosSecure.get(url)
//         // .then(res=>{
//         //   setBookingsData(res.data)
//         // })
//     },[url])

//       const deleteButton = id =>{
//         console.log('hitting', id)
//         swal({
//                 title: "Are you sure?",
//                 text: "Once deleted, you will not be able to recover this imaginary file!",
//                 icon: "warning",
//                 buttons: true,
//                 dangerMode: true,
//                 })
//                 .then((willDelete) => {
//                 if (willDelete) {
//                     fetch(`http://localhost:5000/hotelBookings/${id}`, {
//                     method:'DELETE',
//                     })
//                     .then((res) => res.json())
//                     .then((data) => {
//                         console.log(data);
//                     })
//                     const remaining = bookingsData.filter(item=>item._id !== id)
//                     setBookingsData(remaining)
                    

//                     swal("Poof! Your imaginary file has been deleted!", {
//                     icon: "success",
//                     });
//                 } else {
//                     swal("Your imaginary file is safe!");
//                 }
//                 });
            


//     return (
//         <section>

// <div className="overflow-x-auto" data-aos = "zoom-in">
//   <table className="table">
 
//     <thead>
//       <tr className="bg-[#2B2D42] text-white">
    
//         <th>Name</th>
//         <th>Image</th>
//         <th>Price</th>
//         <th>Delete</th>
//         <th>Status</th>
//       </tr>
//     </thead>
//     <tbody>
  
//     {
//         bookingsData.map(booking=> 
//             <tr key={booking._id}>
//             <td className="text-[#3ED39A]">{booking.displayName}</td>
//             <div className="flex items-center space-x-3">
//             <div className="avatar">
//               <div className="mask mask-squircle w-12 h-12">
//                 <img src={booking.image} />
//               </div>
//             </div>
            
//           </div>
//             <td>${booking.Price_per_night}</td>
//             {/* <td onClick={()=>deleteButton(booking._id)} className="text-2xl text-[#F87272]" >Delete</td> */}
//             {/* <td className="text-2xl text-[#F87272]" onClick={()=>deleteButton(booking._id)}><AiFillDelete></AiFillDelete></td> */}
//             <td onClick={()=> deleteButton(booking._id)} className="text-2xl text-[#F87272]" >Delete</td>

//             <td  > 
//                Edit

//             </td>
            
//           </tr>
            
//             )
//     }
     
      
//     </tbody>
//   </table>
// </div>





//         </section>
//       }
    
// };

// export default MyBookings;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import moment from "moment";
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

  const deleteButton = (id) => {
    console.log('hitting', id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
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

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
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
                <td  onClick={() => deleteButton(booking._id)} className=" text-2xl text-[#F87272]">
                  Delete
                </td>
                <Link to={`/updateBooking/${booking._id}`}>
                <button className="btn">Edit</button>
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