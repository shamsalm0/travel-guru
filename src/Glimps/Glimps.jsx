// Glimps.js

import React, { useContext } from 'react';
import './Glimps.css';
import { BackgroundContext } from '../Context/BackGroundProvider/BackGroundProvider';

const Glimps = ({ picture, isSelected, onSelect }) => {
  const cardStyle = {
    border: isSelected ? '2px solid blue' : '1px solid gray',
    // Add other styles as needed
  };
  const {setBackgroundImage,setName}=useContext(BackgroundContext)

  const { id, image_url ,name} = picture;
 const handleSelect=(id)=>{
  
  onSelect(id);
  setBackgroundImage(image_url)
  setName(name)
 }
 
  return (
    <div>
      
      <img 
        onClick={() => handleSelect(id)}
        className='glimps-img '
        src={image_url}
        alt=""
        srcSet=""
        style={cardStyle}
      />
    </div>
  );
};

export default Glimps;
