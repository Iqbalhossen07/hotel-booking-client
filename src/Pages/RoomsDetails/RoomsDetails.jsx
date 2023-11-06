import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const RoomsDetails = () => {
    const loaderData = useLoaderData()
    const {_id,Room_Description,Price_per_night,Room_size,image,Special_offers} = loaderData;
    console.log(loaderData)

 // State to track whether booking has been added
 const [bookingAdded, setBookingAdded] = useState(false);
 const [bookingStatus, setBookingStatus] = useState(false);

 useEffect(() => {
    // Function to check the booking status on the server (replace with your actual logic)
    const checkBookingStatus = async () => {
      try {
        // Make an API call to check the booking status and set bookingStatus accordingly
        // Example:
        // const response = await api.checkBookingStatus(_id);
        // setBookingStatus(response.data.bookingStatus);
      } catch (error) {
        console.error("Error checking booking status:", error);
      }
    };

    checkBookingStatus();
  }, [_id]);

  const handleBooking = () => {
    // You can add your booking logic here
    // Once booking is added, set bookingAdded to true
    setBookingAdded(true);
  };
    
    return (
      <section>
        <div className="relative flex w-full  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={image}
      alt="image"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal  uppercase">
     <span>Special Offer:</span> <span>{Special_offers}</span>
    </h6>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {Price_per_night}
    </h4>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {Room_Description}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {Room_size}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
    {bookingAdded ? "Unavailable" : "Available"}
    </p>
   
      {/* <Link to={`/addBookings/${_id}`}>
      <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Booking Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
      </Link> */}
   {bookingStatus ? (
          <button
            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none bg-gray-300"
            type="button"
            disabled
          >
            Unavailable
          </button>
        ) : (
          <Link to={`/addBookings/${_id}`}>
            <button
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30"
              type="button"
              onClick={handleBooking}
            >
              Booking Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </Link>
        )}
  </div>
</div>
      </section>
    );
};

export default RoomsDetails;

//    I want that once booking can't be done again, and the message should show