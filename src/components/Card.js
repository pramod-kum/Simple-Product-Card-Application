import React from "react";
import "./Card.css";

function Card({ product, toggleFavorite, toggleFeatures, setRating }) {
  // console.log(product)
  return (
    <div
      className="product-card"
      style={{
        border: product.isFavorited ? "2px solid red" : "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
        width: "250px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button
        onClick={() => toggleFavorite(product.id)}
        style={{
          backgroundColor: product.isFavorited ? "#ff6b6b" : "#ddd",
          color: product.isFavorited ? "white" : "black",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {product.isFavorited ? "❤️ Favorited" : "🤍 Favorite"}
      </button>
      <button
        onClick={() => toggleFeatures(product.id)}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        {product.isExpanded ? "Hide Features" : "Show Features"}
        
      </button>
      {product.isExpanded && (
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      )}
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              cursor: "pointer",
              color: product.rating >= star ? "#ff6b6b" : "#ddd",
              fontSize: "20px",
            }}
            onClick={() => setRating(product.id, star)}
          >
            ⭐
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
