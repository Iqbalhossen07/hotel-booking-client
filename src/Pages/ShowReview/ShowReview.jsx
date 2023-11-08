import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ReviewCard from "./ReviewCard";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";


const ShowReview = () => {
  const axiosSecure = useAxiosSecure()
   const loader = useLoaderData()
  //  console.log(loader)
   const {Price_per_night} = loader;
   console.log(Price_per_night)
 
    const { stateChanged } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [filterData,setFilterData] = useState([])
    console.log(filterData)
    const url = `/reviewBooking?email=${stateChanged?.email}`;
    // console.log(url)
    console.log(reviews)

   
//   useEffect(() => {
//   fetch(url)
//   .then((res) => res.json())
//   .then((data) => setReviews(data));
// }, [url]);
  useEffect(()=>{
    axiosSecure.get(url)
  .then(res=>{
    setReviews(res.data)
  })
  },[url,axiosSecure])

 useEffect(()=>{
    const filterData = reviews.filter(review=> review.Price_per_night == Price_per_night)
    setFilterData(filterData)
 },[Price_per_night,reviews])

    return (
        <section >
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         {
             filterData.length > 0 ? filterData.map(review=> <ReviewCard
               key={review._id}
                review={review}
                filterData={filterData}
                setFilterData={setFilterData}
                ></ReviewCard>) : 
             <div>
               <h2 className="flex justify-center items-center mt-20">No Review</h2> 
             </div>
           }
        </div>
        </section>
    );
};

export default ShowReview;