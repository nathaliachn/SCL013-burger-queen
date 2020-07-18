import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'

export const PedidoCocina = () => {
  const [pedidos, setPedidos] = useState([])
  useEffect(() => {
    const obtenerPedidos = async () => {
      try {
        const data = await db.collection('pedido')
        .where('status', '==', 'Pendiente').get()
        console.log(data.docs)
        const arrayData = await data.docs.map
          (doc => ({ id: doc.id, ...doc.data() }))
        console.log(arrayData)
        setPedidos(arrayData)
        
        const statusPedido = arrayData.filter (arrayData=> arrayData.status === 'Pendiente')
        setPedidos(statusPedido)
      }
      catch (error) {
        console.log(error)
      }
    }
    obtenerPedidos()
  },
  [])

  const pedidoListo = (id)=>{
     try{
       db.collection('pedido').doc(id).update({
         status:"Listo",
       })
     }catch (error){
       console.log(error)
     }
    
      
  }


  return (
    <div>
      {pedidos.map((item) => (
        <div> <hr/>
          <h1> Cliente:{item.cliente}</h1>
          <h1> Mesa:{item.mesa}</h1>
          <button value= {item.id} onClick={()=> pedidoListo(item.id)}>Pedido Listo</button>

          {item.selectedItems.map((selectedItems) => {
            return (
              <p>{selectedItems.producto}</p>
            )
          })}

        </div>
      ))}
    </div>);
}
export default PedidoCocina;
