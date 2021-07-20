import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, notInCart] = useState(false)

  function handleClick(){
    notInCart((inCart => !inCart))
  }

  return (
    <li className={inCart ? "in-cart" : " "}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={handleClick}>{inCart ? "Remove from cart" : "Add to cart"}</button>
    </li>
  );
}

export default Item;
