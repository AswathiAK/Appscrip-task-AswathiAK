/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ProductCard.css";
import { FiHeart } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";

const ProductCard = ({ product }) => {
  const [addToWishlist, setAddToWishlist] = useState(false);
  const handleWishlist = () => {
    setAddToWishlist(!addToWishlist);
  };
  return (
    <div className="product-box">
      <img src={product.image} alt="product image" />
      <h3 className="product-title">{product.title}</h3>
      <div className="product-text-box">
        <p>
          <a href="/" className="link-text">
            Sign in
          </a>{" "}
          or Create an account to see pricing
        </p>
        {addToWishlist ? (
          <IoMdHeart className="icon-fill" onClick={handleWishlist} />
        ) : (
          <FiHeart className="icon" onClick={handleWishlist} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
