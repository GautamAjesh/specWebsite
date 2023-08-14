import React, { useState } from "react";
import Logo from "../assets/images/logo2.png";
import { FaPhone } from "react-icons/fa";
import { BsFillBagHeartFill, BsCartCheckFill } from "react-icons/bs";
import SignInUpForm from "./Login";
import ProductSearch from "./ProductSearch";
import Sale from "../assets/images/760.jpg";
import "../css_file/header.css";
import Wishlist from "./Wishlist";
import Cart from "./Cart";

const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const handleWishlistIconClick = () => {
    setShowWishlist(!showWishlist);
    setShowCart(false);
  };

  const handleCartIconClick = () => {
    setShowCart(!showCart);
    setShowWishlist(false);
  };

  const handleFormSubmit = (formData) => {
    setUserData(formData);
    setShowForm(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? "" : category
    );
  };

  const handleEyeTest = () => {
    alert("Please visit our store for an eye test");
  };

  const handleSale = () => {
    alert("Sale items are sold out");
  };

  const handleAvatarClick = () => {
    if (userData) {
      setShowLogout(!showLogout);
    }
  };

  const handleLogoutClick = () => {
    alert("You have been logged out successfully");
    setUserData(null); 
    setShowLogout(false); 
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Chashma Bazaar" />
        </div>
        <div className="firstmenu">
          <div className="phone-number">
            <div className="phone-icon">
              <FaPhone />
            </div>
            <span>+91 1234567890</span>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="What are you looking for"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="sign signInUp">
            <div className="sign">
              {userData ? (
                <div className="avatar" onClick={handleAvatarClick}>
                  {userData.email.substring(0, 2).toUpperCase()}
                  {showLogout && (
                    <div className="avatar-options">
                      <span onClick={handleLogoutClick}>Logout</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="sn" onClick={() => setShowForm(true)}>Sign In & Sign Up</div>
              )}
            </div>
          </div>

          <div className="Wishlist" onClick={handleWishlistIconClick}>
            <div className="wishlist-icon">
              <BsFillBagHeartFill />
            </div>
            <span>Wishlist</span>
          </div>
          <div className="Cart" onClick={handleCartIconClick}>
            <div className="cart-icon">
              <BsCartCheckFill />
            </div>
            <span>Cart</span>
          </div>
        </div>
      </div>
      {showWishlist && <Wishlist />}
      {showCart && <Cart />}
      <div className="secondmenu">
        <div
          className="EYEGLASSES"
          onClick={() => handleCategoryClick("EYEGLASSES")}
        >
          EYEGLASSES
        </div>
        <div
          className="COMPUTER GLASSES"
          onClick={() => handleCategoryClick("COMPUTER GLASSES")}
        >
          COMPUTER GLASSES
        </div>
        <div
          className="KIDS GLASSES"
          onClick={() => handleCategoryClick("KIDS GLASSES")}
        >
          KIDS GLASSES
        </div>
        <div
          className="CONTACT LENSES"
          onClick={() => handleCategoryClick("CONTACT LENSES")}
        >
          CONTACT LENSES
        </div>
        <div
          className="SUNGLASSES"
          onClick={() => handleCategoryClick("SUNGLASSES")}
        >
          SUNGLASSES
        </div>
        <div className="TEST" onClick={handleEyeTest}>
          HOME EYE-TEST
        </div>
        <div className="SALE" onClick={handleSale}>
          <img src={Sale} alt="SALE" />
        </div>
      </div>
      <ProductSearch
        searchInput={searchInput}
        selectedCategory={selectedCategory}
      />

      {showForm && <SignInUpForm onClose={() => setShowForm(false)} onSubmit={handleFormSubmit} />}
    </>
  );
};

export default Header;
