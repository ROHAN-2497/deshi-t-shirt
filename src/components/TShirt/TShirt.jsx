import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
    const {id, price, name, picture} = tshirt;
    return (
        <div className='t-shirts'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={()=> handleAddToCart(tshirt)}>Buy Now</button>
            </div>
    );
};

export default TShirt;