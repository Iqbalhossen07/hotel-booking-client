import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ReviewCard from "./ReviewCard";
import { useLoaderData } from "react-router-dom";


const ShowReview = () => {
   const loader = useLoaderData()
   const {Price_per_night} = loader;
//    console.log(Price_per_night)
 
    const { stateChanged } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [filterData,setFilterData] = useState([])
    console.log(filterData)
    const url = `http://localhost:5000/reviewBooking/?displayName=${stateChanged?.displayName}`;

   
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [url]);

 useEffect(()=>{
    const filterData = reviews.filter(review=> review.Price_per_night == Price_per_night)
    setFilterData(filterData)
 },[Price_per_night,reviews])

    return (
        <section>
         <div>
         {
             filterData.length > 0 ?   filterData.map(review=> <ReviewCard key={review._id} review={review}></ReviewCard>) : 
             <div>
               <h2>No Review</h2> 
             </div>
           }
        </div>
        </section>
    );
};

export default ShowReview;