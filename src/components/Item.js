import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, changeCart] = useState(true)
  function addToCart(){
    changeCart(inCart => inCart === false)
  }
  return (
    <li className= { inCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {addToCart} className="add">{inCart ? "Add to Cart" : "Remove from cart"}</button>
    </li>
  );
}

export default Item;
