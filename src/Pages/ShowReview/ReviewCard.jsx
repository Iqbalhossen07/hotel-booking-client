import swal from "sweetalert";


const ReviewCard = ({review,filterData,setFilterData}) => {
    const {_id,displayName,rating,date,comment} = review;
    console.log(review)
    const deleteButton = id =>{
      console.log('hitting', id)
      swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      fetch(`https://hotel-booking-server-xi.vercel.app/reviewBooking/${id}`, {
        method:'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        const remaining = filterData.filter(item=>item._id !== id)
        setFilterData(remaining)
      

      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });


 

}


    return (
        <section>
        <div className="relative flex max-w-[48rem]  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
   
  </div>
  <div className="p-6">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal  uppercase">
     <span>Name:</span> <span>{displayName}</span>
    </h6>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
     Rating: {rating}
    </h4>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
     Date And Time: {date}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
    Review:  {comment}
    </p>
    <button onClick={()=>deleteButton(_id)} className="btn btn-outline">Delete</button>
    
    
   
  
  </div>
</div>


      </section>
    );
};

export default ReviewCard;