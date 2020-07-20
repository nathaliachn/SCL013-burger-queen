import React, { useState } from "react";
import '../img/styles.css';
import data from "../data.json";
import { db, auth } from "../firebaseConfig";
import { Link } from 'react-router-dom';
import { PedidosListos } from '../componentes/pedidoListo'


export default function Opciones() {
  const [menuType, setMenuType] = useState("Sweets");
  const [selectedItems, setSelectedItems] = useState([]);
  const [cliente, setCliente] = useState('');
  const [mesa, setMesa] = useState('');

  const handleItemClick = item => {
    // Incluye la logica para saber cuando el elemento
    // ya existe en el arreglo.
    setSelectedItems([...selectedItems, item]);
  };
  const cleanState = () => {
    setSelectedItems([]);
    setCliente([]);
    setMesa([]);
  };

  const saveOrder = (item = {}) => {
    db.collection('pedido').doc().set({
      ...item
    })
    cleanState();
    alert("El pedido de ", + cliente + "de la mesa " + mesa + " Fue enviado a cocina")
  };
  const handleSendOrder = () => {
    const order = {
      menuType,
      selectedItems,
      mesa,
      cliente,
      status: "Pendiente"
    }
    saveOrder(order)
  };
  const handleDeleteItem = deletedId => {
    const fiteredItems = selectedItems.filter(({ id }) => id !== deletedId)

    setSelectedItems(fiteredItems)
  };

  const cerrarSesion = () => {
    auth.signOut()
      .then(function () {
        console.log("Sesión cerrada")
      })
      .catch(function (error) {

      });

  }
  return (
    <div className="App">
      <div className="App-menu">
        {Object.keys(data).map(item => (
          <button className="buttonSelection" onClick={() => setMenuType(item)}>
            {item}
          </button>
        ))}
        <Link to='/PedidosAServir'>
        <button className="buttonSelection" >Pedidos a Servir</button>
        </Link>
       
        <Link to='/'>
          <button className="buttonSelection" onClick={cerrarSesion}>Cerrar Sesión</button>
        </Link>
        <br>
        </br>
        <br>
        </br>
        <input className='inputRegistro'
          placeholder='Ingrese nombre de cliente'
          type='text'
          id='cliente'
          value={cliente}
          onChange={(ev) => setCliente(ev.target.value)}></input>
        <input className='inputRegistro'
          placeholder='Ingrese numero de mesa'
          type='number' id='mesa'
          value={mesa}
          onChange={(ev) => setMesa(ev.target.value)}></input>
        <br />
        {data[menuType].map(item => (
          <div className="App-menu__item"
            onClick={() => handleItemClick(item)}>
            {item.producto} <span>${item.precio}</span>
            <img className="imagenPedido" src={item.img} alt={item.producto} />
          </div>
        ))}
      </div>
      <div className="App-list">
        <div className="row">
          <div className="col-sm">
            <h1>Pedidos</h1>

            {selectedItems &&
              selectedItems.map(item => (
                <div className="App-list__item">
                  {item.producto} <span>${item.precio}</span>
                  <button className="buttonDelete" onClick={() => handleDeleteItem(item.id)}>
                    Eliminar</button>
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
              <button className="buttonEnviarPedido" type="button" title='Enviar a Cocina'
                onClick={handleSendOrder}
                color="danger">Enviar a cocina</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}