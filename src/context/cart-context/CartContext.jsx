import { createContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartDataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  const addToCart = (product) => {
    setCart((prevArray) => [...prevArray, product]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, isOpen, setIsOpen, handleClose }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
