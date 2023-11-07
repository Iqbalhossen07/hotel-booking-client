

const ReviewCard = ({review}) => {
    const {displayName,rating,date,comment} = review
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
    
    
   
  
  </div>
</div>


      </section>
    );
};

export default ReviewCard;