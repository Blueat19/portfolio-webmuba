import React from 'react'
import "./Cart.css";

export default function Cart (){
  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <ul className="cart-items">{/* cart iems will be rendered here */}</ul>
      <div className="cart-total">
        <p>Total: $0</p>
      </div>
      <div className="cart-actions">
        <button>Checkout</button>
      </div>
    </div>
  );
};

