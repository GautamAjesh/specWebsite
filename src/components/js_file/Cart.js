import React from "react";
import { useCartWishlist } from "./CartWishlistContext";
import "../css_file/Cart.css";

const Cart = () => {
  const { cart,onRemoveFromCart } = useCartWishlist();

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

    const handleCheckOut = () => {
        cart.forEach((item) => onRemoveFromCart(item));
        alert("Thank you for shopping with us!");
    };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.images} alt={product.name} />
              <div className="cart-item-details">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <button onClick={() => onRemoveFromCart(product)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total Price: ${calculateTotalPrice()}</p>
            <button className="checkout-button" onClick={handleCheckOut}>Checkout</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
