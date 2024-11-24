import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product A",
      price: "$20",
      image: "https://www.jiomart.com/images/product/original/rvng7zdq8f/lopaz-dz09-bluetooth-smart-watch-phone-camera-and-sim-card-smartwatch-silver-strap-free-size-product-images-orvng7zdq8f-p603219264-0-202307260515.jpg?im=Resize=(420,420)",
      description: "This is a great product.",
      isFavorited: false,
      isExpanded: false,
      rating: 0,
    },
    {
      id: 2,
      name: "Product B",
      price: "$30",
      image: "https://www.jiomart.com/images/product/original/rvng7zdq8f/lopaz-dz09-bluetooth-smart-watch-phone-camera-and-sim-card-smartwatch-silver-strap-free-size-product-images-orvng7zdq8f-p603219264-0-202307260515.jpg?im=Resize=(420,420)",
      description: "This is another amazing product.",
      isFavorited: false,
      isExpanded: false,
      rating: 0,
    },
    {
      id: 3,
      name: "Product C",
      price: "$40",
      image: "https://www.jiomart.com/images/product/original/rvng7zdq8f/lopaz-dz09-bluetooth-smart-watch-phone-camera-and-sim-card-smartwatch-silver-strap-free-size-product-images-orvng7zdq8f-p603219264-0-202307260515.jpg?im=Resize=(420,420)",
      description: "This product is fantastic!",
      isFavorited: false,
      isExpanded: false,
      rating: 0,
    },
  ]);

  const [showFavorites, setShowFavorites] = useState(false);

  // Toggle favorite status
const toggleFavorite = (id) => {
  console.log("Toggling favorite for product with id:", id)
  setProducts((prevProducts) => {
    return prevProducts.map((product) => {
      if (product.id === id) {
        // Toggle the isFavorited property for the matching product
        return { ...product, isFavorited: !product.isFavorited };
      }
      // Return the product unchanged
      return product;
    });
  });
};

// Toggle feature visibility
const toggleFeatures = (id) => {
  setProducts((prevProducts) => {
    return prevProducts.map((product) => {
      if (product.id === id) {
        // Toggle the isExpanded property for the matching product
        return { ...product, isExpanded: !product.isExpanded };
      }
      // Return the product unchanged
      return product;
    });
  });
};


  // Set product rating
  const setRating = (id, rating) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, rating } : product
      )
    );
  };

  // Reset favorites
  const resetFavorites = () => {
    setProducts((prev) =>
      prev.map((product) => ({ ...product, isFavorited: false }))
    );
    setShowFavorites(false);
  };

  // Filter products to show
  const displayedProducts = showFavorites
    ? products.filter((product) => product.isFavorited)
    : products;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Interactive Product List</h1>
      <div style={{ marginBottom: "20px" }}>
        <button  style={{
        backgroundColor: showFavorites ? "#ff6b6b" : "#ddd",
        color: showFavorites ? "white" : "black", padding: "10px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"}} onClick={() => setShowFavorites((prev) => !prev)}>
          {showFavorites ? "Show All Products" : "Show Favorites"}
        </button>
        <button onClick={resetFavorites} style={{
        marginLeft: "10px",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        cursor: "pointer" }}>
          Reset Favorites
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {displayedProducts.map((product) => (
          <Card
            key={product.id}
            product={product}
            toggleFavorite={toggleFavorite}
            toggleFeatures={toggleFeatures}
            setRating={setRating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
