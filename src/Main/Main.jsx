import React, { useContext } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Background from '../Background/Background';
import BackGroundProvider, { BackgroundContext } from '../Context/BackGroundProvider/BackGroundProvider';

const Main = () => {
    const pictures=useLoaderData();
    console.log(pictures)
    const{backgroundImage}=useContext(BackgroundContext)
    const wrapperStyle = {
        backgroundImage:`url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'center',
        height:'900px'
      };
    return (
        
            <div style={wrapperStyle}>
            
            <Header></Header>
            
            <Outlet></Outlet>
        </div>
        
    );
};

export default Main;