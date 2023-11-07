
import {  useEffect, useState } from "react";
import RoomCard from "./RoomCard";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import { AuthContext } from "../../AuthProvider/AuthProvider";


const Rooms = () => {
    //   const axiosSecure = useAxiosSecure()
    const [rooms, setRooms] = useState([]);
    // console.log(rooms)
    const [sortOrder, setSortOrder] = useState("ascending");
    // const { stateChanged } = useContext(AuthContext);

    useEffect(() => {
      
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => {
                if(data.message){
                    alert(data.message)
                    return 
                } setRooms(data)})
    }, []);
  
// const url = `/bookings/?email=${stateChanged?.email}`
//     useEffect(()=>{
//         axiosSecure.get(url)
//       .then(res=>{
//         setRooms(res.data)
//       })
//       },[url,axiosSecure])
   

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
    };

    const sortedRooms = [...rooms]; 

    sortedRooms.sort((a, b) => {
        if (sortOrder === "ascending") {
            return a.Price_per_night - b.Price_per_night;
        } else {
            return b.Price_per_night - a.Price_per_night;
        }
    });

    return (
        <section className="mt-20">
            <h2 className="text-5xl font-semibold text-center">Our Rooms</h2>
            

            <div className="flex justify-between mb-2">
                <button
                    className="text-blue-500 hover:underline"
                    onClick={toggleSortOrder}
                >
                    Sort by Price {sortOrder === "ascending" ? "Ascending" : "Descending"}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedRooms.map(room => (
                    <RoomCard key={room.id} room={room}></RoomCard>
                ))}
            </div>
        </section>
    );
};

export default Rooms;
