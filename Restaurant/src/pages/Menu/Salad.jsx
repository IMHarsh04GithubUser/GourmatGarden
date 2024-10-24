import React, { useContext } from 'react';
import { CartContext } from '../../StoreContext/Storecontext'; // Import the CartContext
import { SaladItems1 } from './AllMenuItems'; // Import your salad items array

const SaladCard1 = () => {
  const { addToCart } = useContext(CartContext); // Destructure addToCart from the context

  return (
    <>
      {SaladItems1.map((item,index) => (
        <div className="card c-salad border-top" key={index}>
          <img className="card-img-top" src={item.src} alt="Salad" />
          <div className="card-body">
            <p className="card-text">
              {item.name}
              <button 
                className="btn btn-primary" 
                onClick={() => addToCart(item)} // Pass item correctly
              >
                ADD
              </button>
              <span className="Itemsrate">₹ {item.rate}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SaladCard1;
