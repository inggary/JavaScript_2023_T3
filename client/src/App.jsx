import { useState, useEffect } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
//import reactLogo from './assets/react.svg';
//import viteLogo from './vite.svg'; // Corregí la importación de viteLogo
//import './App.css';

export default function App() {
  
  //lista de elementos a visualizar

  const [resultArray, setResultArray] = useState([]);

  // lee los datos de la api

  async function leerDatos() {
    try {
      const result = await axios.get("http://localhost:4000/");
      //console.log(result)
      setResultArray(result.data);
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  }

  //

  useEffect(() => {
    leerDatos();
  }, []);


  // la lista de elementos de la tabla

  const itemList = resultArray.map( (item) => (

    <tr key={item.Id}>
      <td>{item.nombre}</td>
      <td>{item.apellido}</td>
      <td>{item.telefono}</td>
      <td><Button variant="outline-warning">Borrar</Button>{' '}</td>
      <td>Editar</td>
    </tr>

  ));

    //aqui retornamos la pagina a mostrar

  return (
    <>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Borrar</th>
            <th>Actualizar</th> {/* Cambié la última columna a "Actions" */}
          </tr>
        </thead>
        <tbody>
          {itemList}
        </tbody>
      </Table>
    </>
  );
}



