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

  const handleDeleteItem = deletedId => {
    const fiteredItems = selectedItems.filter(({ id }) => id !== deletedId)

    setSelectedItems(fiteredItems)
  }

  return (
    <div className="App">
      <div className="App-menu">
        {Object.keys(data).map(item => (
          <button className="App-menu__type" onClick={() => setMenuType(item)}>
            {item}
          </button>
        ))}
        <br />
        <br />
        {data[menuType].map(item => (
          <div className="App-menu__item" onClick={() => handleItemClick(item)}>
            {item.producto} <span>${item.precio}</span><img src={item.img} alt={item.producto}/>
          </div>
        ))}
      </div>
      <div className="App-list">
        <div className="row">
          <div className="col-sm">
            <h1><i class="fas fa-concierge-bell"></i>Pedidos</h1>



            {selectedItems &&
              selectedItems.map(item => (
                <div className="App-list__item">
                  {item.producto} <span>${item.precio}</span>
                  <button onClick={() => handleDeleteItem(item.id)}>Eliminar</button>
                </div>
              ))}
            <div className="App-list__item App-list__total">
              Total{" "}
              <span>
                $
           {selectedItems
                  .reduce((acc, curr) => acc + curr.precio, 0)
                  .toFixed(2)}
              </span>
            </div>
            {selectedItems.length > 0 && (
              <button
                className="App-list__button"
                onClick={() => alert("enviando a cocina")}
              >
                Enviar a cocina
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

