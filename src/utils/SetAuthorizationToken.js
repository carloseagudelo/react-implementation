/* Descripcion: Clase que contiene las metodos para asignar la autorización al token
   Autor: Carlos Agudelo
   Contacto: agudelo.carlos@hotmail.es
   Fecha de creación: 10 de Junio
   Fecha de modificacion: 10 de Junio */

// Importa las librerias externas
import axios from 'axios'

// Metodo que asigna la autorización al token a utilizar
export default function SetAuthorizationToken(token) {

  if(token){
  	axios.defaults.headers.common['Authorization'] = 'Bearer ${token}'
  }else {
  	delete axios.default.headers.common['Authorization']
  }
}