import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import Cart from './components/Cart';
import ContactPage from './components/ContactPage';
import About from './components/About';


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItem = (itemId) => {
    // Implement logic to remove the item with the given itemId from cartItems
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };
  
  


  return (
    <Router>
      <div className="app">    
      
      <Header/>
        <div className="content">
          <Routes>
            <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={<Cart cartItems={cartItems} onRemoveItem={removeItem} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
      
    </Router>
  );
};

export default App;
