import React, { createContext, useContext, useState } from "react";

export const CartWishlistContext = createContext();

export function CartWishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const onAddToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const onAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const onRemoveFromWishlist = (product) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== product.id));
  };

  const onRemoveFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const contextValue = {
    cart,
    wishlist,
    onAddToCart,
    onAddToWishlist,
    onRemoveFromCart,
    onRemoveFromWishlist,
  };

  return (
    <CartWishlistContext.Provider value={contextValue}>
      {children}
    </CartWishlistContext.Provider>
  );
}

export const useCartWishlist = () => {
  return useContext(CartWishlistContext);
};
