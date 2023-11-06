import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const AddBookings = () => {
    const [isBookingAttempted, setBookingAttempted] = useState(false);
    const [bookingSummary, setBookingSummary] = useState(null);
    const loaderData = useLoaderData()
    const {Price_per_night,Room_size,image,Special_offers} = loaderData;
    console.log(loaderData)
    const {stateChanged} = useContext(AuthContext)

    const addProduct = e=>{
        e.preventDefault()
        const form = e.target;
        const displayName = stateChanged?.displayName;
        const email = stateChanged?.email;
        const date = form.date.value;
        const bookings = {displayName,image,email,date,Price_per_night,Room_size, Special_offers}

        console.log(displayName,email,date,Price_per_night,)
        setBookingSummary(bookings);

    //     fetch('http://localhost:5000/hotelBookings',{
    //         method: "POST", 
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(bookings),
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         if(data.insertedId){
    //             toast.success("Added Booking successfully")
                
    //         }
    //         console.log(data)
    //     })
    // }
    fetch("http://localhost:5000/hotelBookings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bookings),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.insertedId) {
                toast.success("Added Booking successfully");
            } else {
                // Booking already exists, show a message to the user
                toast.error("It is AllReady Booking");
            }
            setBookingAttempted(true);
        });
};
    

    return (
        <section className="mt-20 ">
           
        {/* first  */}
        <h2 className="text-center text-5xl font-semibold text-[#54e2d2] mb-3">Add Booking</h2>
     <form onSubmit={addProduct}>
     <div className="flex flex-col md:flex-row gap-6  ">
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
             
               <input type="date"   name="date" className="input input-bordered w-full" />
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
           {/* <input type="submit" value="add Booking" className="w-full text-white btn bg-[#54e2d2] hover:bg-[#54e2d2]" /> */}
         
           
           {/* <input className="btn" value="add Booking" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</input> */}
           <button className="btn w-full text-white  bg-[#54e2d2] hover:bg-[#54e2d2]"  onClick={() => document.getElementById('my_modal_1').showModal()}>Add Booking</button>

            <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
            {bookingSummary && (
                <div className="mb-4 p-4 border border-gray-300">
                    <h3 className="text-lg font-semibold mb-2">Booking Summary:</h3>
                    <p>
                        Name: {bookingSummary.displayName}
                    </p>
                    <p>
                        Email: {bookingSummary.email}
                    </p>
                    <p>
                        Date: {bookingSummary.date}
                    </p>
                    <p>
                        Price: {bookingSummary.Price_per_night}
                    </p>
                    {/* Add more fields as needed */}
                </div>
            )}
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="w-full text-white btn bg-[#54e2d2] hover:bg-[#54e2d2]">Close</button>
                </form>
                </div>
            </div>
            </dialog>

         
       </div>
     </form>
     {/* <ToastContainer /> */}
     {isBookingAttempted && <ToastContainer />}
       
      </section>
    );
};

export default AddBookings;