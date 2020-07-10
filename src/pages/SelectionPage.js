import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../componentes/button'


export const SelectionPage = () => {
return (
    <div id= 'selection'>
    <div>
    <section>
     <Link to= '/login'>
        <Button type="button" title='Mesero' class="btn btn-primary btn-lg btn-block"></Button>
         </Link>
    </section>
    <section>
     <Link to= '/login'>
        <Button type="button" title='Cocina' class="btn btn-primary btn-lg btn-block"></Button>
         </Link>
    </section>
    </div>
    </div>
)
}