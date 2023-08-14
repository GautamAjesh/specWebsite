import React from "react";
import { useCartWishlist } from "./CartWishlistContext";
import "../css_file/Wishlist.css";

const Wishlist = () => {
  const { wishlist, onRemoveFromWishlist } = useCartWishlist();

  return (
    <div className="wishlist-container">
      <h2>Wishlist</h2>
      {wishlist.length > 0 ? (
        <div className="wishlist-items">
          {wishlist.map((product) => (
            <div key={product.id} className="wishlist-item">
              <img src={product.images} alt={product.name} />
              <div className="wishlist-item-details">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <button onClick={() => onRemoveFromWishlist(product)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
