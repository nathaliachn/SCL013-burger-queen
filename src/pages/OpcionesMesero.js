import React, { useState } from "react";
import '../img/styles.css';
import data from "../data.json";

export default function Opciones() {
  const [menuType, setMenuType] = useState("Sweets");
  const [selectedItems, setSelectedItems] = useState([]);
  const handleItemClick = item => {
    // Incluye la logica para saber cuando el elemento
    // ya existe en el arreglo.
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <div className="App">
      <div className="App-menu">
        {Object.keys(data).map(item => (
          <button className="App-menu__type" onClick={() => setMenuType(item)}>
            {item}
          </button>
        ))}
        <br/>
        <br/>
        {data[menuType].map(item => (
          <div className="App-menu__item" onClick={() => handleItemClick(item)}>
            {item.producto} <span>${item.precio}</span> 
          </div>
        ))}
      </div>     
    </div>
  );
}
