import React, { createContext, useEffect, useState } from 'react';
export const BackgroundContext=createContext()
const BackGroundProvider = ({children}) => {
    const [backgroundImage,setBackgroundImage]=useState('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e2/f8/43/longest-sea-beach-in.jpg?w=700&h=-1&s=1');
    const [name,setName]=useState("Cox's Bazar")
    const authInfo={backgroundImage,setBackgroundImage,name,setName}
    return (
        
        <div>
            <BackgroundContext.Provider value={authInfo}>{children}</BackgroundContext.Provider>
        </div>
    );
};

export default BackGroundProvider;