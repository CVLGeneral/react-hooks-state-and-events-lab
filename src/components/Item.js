import React,{useState} from "react";

function Item({ name, category }) {

  const[cart , setCart]=useState("")
  const[buttonState, setButtonState]=useState ("add")

  function handleCartChange(event){

    setCart((carts)=>(carts==="" ? "in-cart" :""))
    setButtonState((buttons)=> (buttons=== "add" ? "remove":"add"))
  }




  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonState} onClick={handleCartChange}>{buttonState==="add"? "Add to Cart":"Remove From Cart"}</button>
    </li>
  );
}

export default Item;
