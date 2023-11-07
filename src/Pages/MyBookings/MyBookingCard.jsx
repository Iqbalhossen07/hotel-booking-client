// import { NavLink } from "react-router-dom";

// const MyBookingCard = ({data,deleteButton}) => {
//     const {image,Price_per_night,date,_id} = data;
//     console.log(data)
//     return (
//         <section>
//    <div data-aos = "zoom-in" className=" relative flex flex-col w-full max-w-[48rem] md:flex-col lg:flex-row rounded-xl bg-base-100">
//   <div className="relative w-1/2 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
//     <img 
//       src={image}
//       className="flex justify-center items-center object-cover h-64 w-64"
//     />
//   </div>
//   <div className="p-3">
//     <h6 className="mt-4 mb-4 text-xl">
//     <span className="font-medium">Name :</span>
//       <span className="text-[#3ED39A] pl-2">{date}</span>
//     </h6>

    
//     <h4 className="block mb-4 font-sans text-xl antialiased leading-snug tracking-normal text-blue-gray-900">
      
//       <span className="font-medium">Brand Name :{Price_per_night} </span> 
//       <span className="pl-2"></span>
//     </h4>
   
  
//     <div className="flex gap-4">
//     <div className="w-full" data-aos = "fade-right"> 
//      <NavLink to={`/addReview/${_id}`}>
//       <button className="btn btn-outline btn-success w-full" type="button" data-ripple-light="true" >Add Review </button>
//       </NavLink>
//         </div>
       
//           <div className="w-full" data-aos = "fade-left">
//           <NavLink to={`/showReview/${_id}`}>
//           <button className="btn btn-outline btn-warning w-full" type="button" data-ripple-light="true" >Show Review</button>
//           </NavLink>
//         </div>
//          </div>
//     <div className="flex gap-4">
//     <div className="w-full" data-aos = "fade-right"> 
//      <NavLink to={`/productsDetails/`}>
//       <button className="btn btn-outline btn-success w-full" type="button" data-ripple-light="true" >Edit </button>
//       </NavLink>
//         </div>
       
//           <div className="w-full" data-aos = "fade-left">
//           <NavLink to={`/productDetailUpdate/`}>
//           <button className="btn btn-outline btn-warning w-full" type="button" data-ripple-light="true" >Delete</button>
//           </NavLink>
//         </div>
//          </div>
//     </div>
//       </div>
//         </section>
//     );
// };

// export default MyBookingCard;