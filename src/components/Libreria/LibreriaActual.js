import React, { Component } from 'react';
import LibreriaItem from './LibreriaItem';

class LibreriaActual extends Component {


  render() {
    
    //revisar
    let  libreriaList = this.props.libros.map( (libroTmp)=>
    (<LibreriaItem key={libroTmp.id} libro={libroTmp} handleEdit={this.handleEditLibro.bind(this)} />)
);

let libreriaActual;
    return (
        <div className="Libreria">

<table className="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Dirección</th>
                <th scope="col">Responsable</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {libreriaActual}
              
            </tbody>
        </table>

      <h1>Libros asociados</h1>



      
        </div>
    );
  }
}

export default LibreriaActual;
