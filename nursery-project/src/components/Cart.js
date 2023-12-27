import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/Cart.css';

const Cart = ({ cartItems, onRemoveItem, size }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="Box">
      <div className="cart">
        <h2>Shopping Cart</h2>
        <span>{size}</span>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ₹{item.price}
              <button onClick={() => onRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ₹{calculateTotal()}</p>
        <Link to="/payment">Checkout</Link>




        {/* Use Link to navigate to the Payment page */}
      </div>
      <p className='copy'></p>
      {/* <div >
        <p>&copy;Copyright-reserved @ GREEN House Nursery</p>
      </div> */}
    </div>

  );
};

export default Cart;
