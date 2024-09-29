"use client"
import React, { useState } from 'react';

// Sample product data
const products = [
  { id: 1, name: 'Biryani', price: 150 },
  { id: 2, name: 'Sushi', price: 300 },
  { id: 3, name: 'Pasta', price: 200 },
  { id: 4, name: 'Pizza', price: 250 },
];

function Checkout() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setTotal((prevTotal) => prevTotal + product.price);
  };

  const handlePayment = () => {
    // Mock payment gateway integration
    alert('Payment successful! Total amount: ₹' + total);
    setCart([]);
    setTotal(0);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Checkout Page</h1>
      <h2>Available Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
            <button onClick={() => addToCart(product)} style={{ marginLeft: '10px' }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.length === 0 ? (
          <li>Your cart is empty.</li>
        ) : (
          cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))
        )}
      </ul>

      <h3>Total Amount: ₹{total}</h3>
      {total > 0 && (
        <button onClick={handlePayment} style={{ marginTop: '20px' }}>
          Proceed to Payment
        </button>
      )}
    </div>
  );
}

export default Checkout;
