import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";

const Rooms = () => {
    const [rooms,setRooms] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/bookings')
        .then(res=>res.json())
        .then(data=>setRooms(data))
    },[])
    return (
        <section className="mt-20">
             <h2 className="text-5xl font-semibold text-center">Our Rooms</h2>
             <div className="mb-5">
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
            </div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                
           {
                rooms.map(room=> <RoomCard key={room.id} room={room}></RoomCard>)
           }
        </div>
        </section>
    );
};

export default Rooms;