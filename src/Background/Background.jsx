import React from 'react';

const Background = ({picture}) => {
    const{image_url,id}=picture;
    const style={
        backgroundImage:`url(${image_url})`,
        backgroundSize:'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '851px',
    }
    return (
        <div style={style}>
            
        </div>
    );
};

export default Background;