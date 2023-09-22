// Home.js

import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Glimps from '../../Glimps/Glimps';
import '../../Background/Background.css';
import { BackgroundContext } from '../../Context/BackGroundProvider/BackGroundProvider';
import Booking from '../Booking/Booking';
import './Home.css'

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
    <div style={{ height: '700px' }} className='  lg:flex  h-40 flex items-center justify-evenly   lg:items-center lg:justify-end  '>
      <div  className='lg:text-4xl lg:mr-5 mr-32 text-lg mb-80 ml-10 mt-20 '><p style={{fontFamily:'bebas niue',color:'white' }}>{name}</p>
      <Link to={`/booking/${selectedCardId}`}><button  onClick={()=>handleBooking()} className='lg:mt-10 lg:h-16 lg:mr-5 text-sm lg:text-5xl' style={{backgroundColor:'orange'}}>Booking</button></Link>
      </div >
      { pictures.map((picture) => (
        <Glimps className='glimps '
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
