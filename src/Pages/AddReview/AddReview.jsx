import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddReview = () => {
    const loader = useLoaderData()
    const {Price_per_night} = loader;
    console.log(loader)
    const {stateChanged} = useContext(AuthContext)
    // console.log(loader)

    const addReview = e=>{
        e.preventDefault()
        const form = e.target;
        const displayName = stateChanged?.displayName;
        const rating = form.rating.value;
        const date = form.date.value;
        const comment = form.comment.value;
        const bookings = {displayName,rating,date,comment,Price_per_night}

        console.log(displayName,rating,date,comment)
        
        fetch('http://localhost:5000/reviewBooking',{
            method: "POST",
                 headers: {
                     "Content-Type": "application/json",
                 },
               body: JSON.stringify(bookings),
             })
             .then(res=>res.json())
             .then(data=>{
                if(data.insertedId){
                    toast.success("Added Booking successfully");
                    console.log(data)
                }
             })

        
    
    // fetch("http://localhost:5000/review", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(bookings),
    // })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         if (data.insertedId) {
    //             toast.success("Added Booking successfully");
    //         } else {
    //             // Booking already exists, show a message to the user
    //             toast.error("It is AllReady Booking");
    //         }
    //         setBookingAttempted(true);
    //     });
};
    return (
        <section className="mt-20 ">
           
        {/* first  */}
        <h2 className="text-center text-5xl font-semibold text-[#54e2d2] mb-3">Add Review</h2>
     <form onSubmit={addReview}>
     <div className="flex flex-col md:flex-row gap-6  ">
          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text"> Username</span>
           </label>
           <label className="input-group">
             
               <input type="text" defaultValue={stateChanged?.displayName} placeholder="Enter the product name" name="name" className="input input-bordered w-full" />
           </label>
           </div>


          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text"> Timestamp </span>
           </label>
           <input type="date" id="timestamp" name="date" className="input input-bordered w-full" />

           </div>
       </div>
        {/* second */}
       <div className="flex flex-col md:flex-row gap-6 ">
          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text"> Rating</span>
           </label>
           <label className="input-group">
             
               <input type="text"  placeholder="Enter the  Rating" name="rating" className="input input-bordered w-full" />
           </label>
           </div>


          <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text"> Comment </span>
           </label>
           {/* <label className="input-group">
             
               <input type="text"  placeholder="Enter the Amount"  name="amount" className="input input-bordered w-full" />
           </label> */}
           <textarea placeholder="Comment" name="comment" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
           </div>
       </div>
      
    
       
       <div className="flex mt-10">
           <input type="submit" value="add Review" className="w-full text-white btn bg-[#54e2d2] hover:bg-[#54e2d2]" />
         
          

           

         
       </div>
     </form>
     <ToastContainer />
     
       
      </section>
    );
};

export default AddReview;