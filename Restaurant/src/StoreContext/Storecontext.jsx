import React, { createContext, useState, useMemo } from 'react';

// Create a Context for the cart
export const CartContext = createContext();

// Create a Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [token,setToken] = useState('')
  const [user, setUser] = useState(null); 

  
  

  //Login
  const handleLogin = (token)=>{
    setToken(token)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setToken('')
    setIsLoggedIn(false)
    setUser(null)
  }

  // Function to add an item to the cart
  const addToCart = (item) => {
    console.log("Adding item to cart:", item); // Debugging
    setCart((prevCart) => {
      console.log("Previous cart state:", prevCart); // Debugging
      return [...prevCart, item];
    });
  };

  // Function to remove an item by name
  const handleRemove = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  // Calculate the subtotal of all items in the cart
  const calculateSubtotal = useMemo(() => {
    return cart.reduce((total, item) => {
      return total + item.rate // Assuming each item has a 'quantity' property
    }, 0);
  }, [cart]);

  // Assuming a delivery fee of $2
  const deliveryFee = 2;

  // Calculate the total amount (subtotal + delivery fee)
  const totalAmount = calculateSubtotal + deliveryFee;



  return (
    <CartContext.Provider value={{ cart, addToCart, handleRemove, calculateSubtotal, totalAmount,handleLogin,handleLogout,isLoggedIn,token,user }}>
      {children}
    </CartContext.Provider>
  );
};
