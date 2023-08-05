// Home.js

import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Glimps from '../../Glimps/Glimps';
import '../../Background/Background.css';
import { BackgroundContext } from '../../Context/BackGroundProvider/BackGroundProvider';
import Booking from '../Booking/Booking';

const Home = () => {
  const pictures = useLoaderData();
  const {name}=useContext(BackgroundContext)
  console.log(pictures)
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [booking,setBooking]=useState(false)
  const handleCardSelect = (id) => {
    setSelectedCardId(id);
    console.log(selectedCardId)
  };

  const handleBooking=()=>{
    setBooking(true);
  }

  return (
    <div style={{ height: '700px' }} className='flex items-center justify-end '>
      <div  className='text-2xl '><p style={{fontFamily:'bebas niue',fontSize:'76px',color:'white' }}>{name}</p>
      <Link to={`/booking/${selectedCardId}`}><button  onClick={()=>handleBooking()} className='mt-10' style={{height:'48px',width:'161px',backgroundColor:'orange'}}>Booking</button></Link>
      </div>
      { pictures.map((picture) => (
        <Glimps
          key={picture.id}
          picture={picture}
          isSelected={selectedCardId === picture.id}
          onSelect={handleCardSelect}
        />
      ))}
    </div>
  );
};

export default Home;
