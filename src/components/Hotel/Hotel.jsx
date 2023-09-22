import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Hotel.css'
const Hotel = () => {
    const hotel = useLoaderData();
    const {image_url,name,picId}=hotel.picture;
    console.log(hotel, 'This is hotel');
    return (
        <div>
            
           {
           <div className="hotel-details max-w-sm rounded  bg-white m-auto overflow-hidden shadow-lg">
           <img src={image_url} alt="Hotel" className="w-full h-48 object-cover" />
           <div className="px-6 py-4">
               <div className="font-bold text-xl mb-2">{name}</div>
               <p className="text-gray-700 text-base">Rent: $100 per night</p>
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
  Confirm Booking
</button>

           </div>
       </div>
       
           }
        </div>
    );
};

export default Hotel;
