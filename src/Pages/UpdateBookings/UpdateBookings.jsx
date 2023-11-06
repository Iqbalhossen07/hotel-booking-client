import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const UpdateBookings = () => {
    const {stateChanged} = useContext(AuthContext)
    const updateLoaderData = useLoaderData()
    const {Price_per_night,_id} = updateLoaderData;
    const updateBooking = e =>{
        e.preventDefault()
        const form = e.target;
        const displayName = stateChanged?.displayName;
        const email = stateChanged?.email;
        const date = form.date.value;
       
        const updateBooking = {displayName,email,date,Price_per_night}
        // console.log(displayName,email,date,Price_per_night)

        fetch(`http://localhost:5000/hotelBookings/${_id}`,{
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateBooking),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                toast.success("Updated Booking successfully")
               
            }
           
            // console.log(data)
        })

    }
    return (
        <section className="mt-20 ">
           
        {/* first  */}
        <h2 className="text-center text-5xl font-semibold text-[#54e2d2] mb-3">Update Booking</h2>
     <form onSubmit={updateBooking}>
     <div className="flex flex-col md:flex-row gap-6 ">
          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text"> Name</span>
           </label>
           <label className="input-group">
             
               <input type="text" defaultValue={stateChanged?.displayName} placeholder="Enter the product name" name="name" className="input input-bordered w-full" />
           </label>
           </div>


          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text"> Date </span>
           </label>
           <label className="input-group">
             
               <input type="date" defaultValue={updateLoaderData?.date}   name="date" className="input input-bordered w-full" />
           </label>
           </div>
       </div>
        {/* second */}
       <div className="flex flex-col md:flex-row gap-6 ">
          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text"> Email</span>
           </label>
           <label className="input-group">
             
               <input type="email" defaultValue={stateChanged?.email} placeholder="Enter the  email" name="email" className="input input-bordered w-full" />
           </label>
           </div>


          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Duo Amount </span>
           </label>
           <label className="input-group">
             
               <input type="text" defaultValue={Price_per_night} placeholder="Enter the Amount"  name="amount" className="input input-bordered w-full" />
           </label>
           </div>
       </div>
      
    
       
       <div className="flex mt-10">
           <input type="submit" value="Update Booking" className="w-full text-white btn bg-[#54e2d2] hover:bg-[#54e2d2]" />
         
           
          

         
       </div>
     </form>
     
     <ToastContainer />
       
      </section>
    );
};

export default UpdateBookings;