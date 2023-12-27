import React from 'react';

// import { FaStar } from 'react-icon/fa';

import '../styles/PlantCard.css'; // Import corresponding CSS file



const PlantCard = ({ plant, addToCart }) => {
  const { id, name, price, imageUrl } = plant;

  const handleAddToCart = () => {
    addToCart({ id, name, price });
  };

  return (
    <div className="plant-card">
      <img src={imageUrl} alt={name} className="plant-image" />
      <h3>{name}</h3>
      {/* <div className='star'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />

      </div> */}
      <p>Price: ₹{price}</p>
      <button onClick={handleAddToCart} className='cart'>Add to Cart</button>
    </div>
  );
};

export default PlantCard;