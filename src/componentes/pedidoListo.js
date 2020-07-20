import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'

export const PedidosListos = () => {
  const [pedidos, setPedidos] = useState([])
  useEffect(() => {
    const obtenerPedidosListos = async () => {
      try {
        const data = await db.collection('pedido')
        .get()
        console.log(data.docs)
        const arrayData = await data.docs.map
          (doc => ({ id: doc.id, ...doc.data() }))
        console.log(arrayData)
        setPedidos(arrayData)
        
        const statusPedido = arrayData.filter
        (arrayData=> arrayData.status === 'Listo')
        setPedidos(statusPedido)
      }
      catch (error) {
        console.log(error)
      }
    }
    obtenerPedidosListos()
  },
  [])

  const pedidoServido = (id)=>{
     try{
       db.collection('pedido').doc(id).update({
         status:"Servido",
       })
     }catch (error){
       console.log(error)
     }    
  }
  return (
    <div className="pedidosEnCocina">
      {pedidos.map((item) => (
        <div>
          <br></br>
         <hr/>
          <h1> Cliente: {item.cliente}</h1>
          <br></br>
          <h1> Mesa: {item.mesa}</h1>

          {item.selectedItems.map((selectedItems) => {
            return (
              <p>{selectedItems.producto}</p>
              )
            })}
             <br></br>
            <button className="botonPedidoListo"
            value= {item.id} onClick={()=> pedidoServido(item.id)}>
                Pedido Servido</button>

        </div>
      ))}
    </div>);
}
export default PedidosListos;
