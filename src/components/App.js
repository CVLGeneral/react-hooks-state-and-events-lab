import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  //const appClass = false ? "App dark" : "App light"

  const[mode ,setMode]=useState("App light")

  function handleClick (){
    setMode((prevMode) => (prevMode === "App light" ? "App dark" : "App light"));  }

  return (
    <div className={mode}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{mode==="App light" ? "Light Mode":"Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
