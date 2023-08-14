import React from "react";
import allProducts from "./productsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import "../css_file/ProductSearch.css";
import { useCartWishlist } from "./CartWishlistContext";

const ProductSearch = ({ searchInput, selectedCategory }) => {
  const { onAddToWishlist } = useCartWishlist();
  const { onAddToCart } = useCartWishlist();

  const filterProducts = (searchText) => {
    if (!searchText) {
      return [];
    }

    return allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  let filteredProducts = [];

  if (selectedCategory && searchInput) {
    filteredProducts = filterProducts(searchInput).filter(
      (product) =>
        product.name.toLowerCase() === selectedCategory.toLowerCase()
    );
  } else if (selectedCategory) {
    filteredProducts = allProducts.filter(
      (product) =>
        product.name.toLowerCase() === selectedCategory.toLowerCase()
    );
  } else if (searchInput) {
    filteredProducts = filterProducts(searchInput);
  }

  return (
    <div className="product-search">
      {filteredProducts.length > 0 ? (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              {/* Add your product details here */}
              <img src={product.images} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <div className="icon2">
                <button
                  className="icon-button"
                  onClick={() => onAddToCart(product)}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                <button
                  className="icon-button"
                  onClick={() => onAddToWishlist(product)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        searchInput && <p>No matching products found.</p>
      )}
    </div>
  );
};

export default ProductSearch;
