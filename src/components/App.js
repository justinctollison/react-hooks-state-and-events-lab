import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDark, isLight] = useState(false)

  function handleClick(){
    isLight((isDark =>  !isDark))
  }

  return (
    <div className={isDark ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDark ? "Dark mode" : "Light mode"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
