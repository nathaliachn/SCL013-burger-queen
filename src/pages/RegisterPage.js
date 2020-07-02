import React from 'react'

export const RegisterPage = () => {
return (
    <div id= '#contenedorLogin'>
              <h1>¡Regístrate!</h1>
        <div class="form-group">
  <input type="text" class="form-control" id="nombre" placeholder="Escribe tu nombre"/>
  <input type="email" class="form-control"id="email" placeholder="Correo"/>
  <input type="password" class="form-control"id="password" placeholder="Contraseña"/>
  </div>
  
  <button id="registrarse">Regístrarse</button>
        <h4>Esta es la página de registro</h4>
</div>  
)
}