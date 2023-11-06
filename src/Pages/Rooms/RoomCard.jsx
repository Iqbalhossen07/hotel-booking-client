import { Link } from "react-router-dom";

const RoomCard = ({room}) => {
    const {review_counts,_id,image,Room_Description,Price_per_night} = room;
 
    return (
        <section>
         <Link to={`/roomsDetails/${_id}`}>
           
         <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[#26917C]">{Room_Description}</h2>
                    <div className="flex justify-evenly">
                    <p className="text-xl font-semibold">price: ${Price_per_night}</p>
                    <p className="text-xl font-semibold">Review :  {review_counts}</p>
                    </div>
                    {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
                </div></Link>
        </section>
    );
};

export default RoomCard;