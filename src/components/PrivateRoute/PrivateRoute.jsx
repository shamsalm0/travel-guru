import React, { useContext } from 'react';
import { BackgroundContext } from '../../Context/BackGroundProvider/BackGroundProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{loading,user}=useContext(BackgroundContext);
    const location=useLocation();
    if(loading){
       return <h3>Loading....</h3>
    }
    if(!user){
        <Navigate to='/signin' state={{from:location}}replace></Navigate>
    }
     return children;
};

export default PrivateRoute;