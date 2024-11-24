import { createContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartDataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const handleClose = () => setIsOpen(false);

  const addToCart = (product) => {
    setCart((prevArray) => [...prevArray, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevArray) => prevArray.filter((item) => item.id !== productId));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        isOpen,
        setIsOpen,
        handleClose,
        removeFromCart,
        totalPrice,
        setCheckout,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
