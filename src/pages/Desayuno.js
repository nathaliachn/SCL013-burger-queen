import React, { Component } from 'react'
import { Desayunos } from '../data.json';

console.log("Hola", Desayunos)

class MenuDesayuno extends Component {
constructor(){
  super();
  this.state = {
    Desayunos
  }
}
render(){
   const productos = this.state.Desayunos.map((desayuno, i) =>{
return(
  <div className="col-md-4">
    <div className= "card mt-4">
      <div className = "card-header ">
        <h3> {desayuno.producto} </h3>
      </div>
      <div className="card-body">
      <p>{desayuno.precio} </p>
      </div>
    </div>
  </div>
   
)
    })
  return (
    <div className="container">
      <div className="row mt-4"></div>
              {productos}
    </div>
  );
}
}
export default MenuDesayuno;