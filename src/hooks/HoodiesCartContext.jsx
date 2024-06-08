import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const HoodiesCartContext = createContext();

export const useHoodiesCart = () => {
  return useContext(HoodiesCartContext);
};

export const HoodiesCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    toast("Added to cart!");
  };

  return (
    <HoodiesCartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </HoodiesCartContext.Provider>
  );
};
