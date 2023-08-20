import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Booking.css'
const Booking = () => {
    const place=useLoaderData();
    const today = new Date().toISOString().substr(0, 10);
    return (
        <div className='flex justify-around'>
            <h2 style={{fontFamily:'bebas niue',marginTop:'236px'}} className='text-8xl text-white mt-16'>{place.name}</h2>
            <div className="booking-card">
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Travel Information</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Origin</label>
          <input type="text" id="origin" name="origin" defaultValue='Dhaka' className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
          <input type="text" id="destination" name="destination" defaultValue={place.name} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="from" className="block text-sm font-medium text-gray-700">From</label>
          <input type="date" id="from" name="from" defaultValue={today} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="to" className="block text-sm font-medium text-gray-700">To</label>
          <input type="date" id="to" name="to" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"><Link to='/hotel'>Booking</Link></button>
      </form>
    </div>
            </div>

        </div>
    );
};

export default Booking;