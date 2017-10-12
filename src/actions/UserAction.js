/*  Descripcion: Clase de tipo Action que contiene la interfaz para los llamados a las acciones con el nombre de
                 las implementaciones en el store
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 27 de sptiembre del 2017
    Fecha de modificacion: 27 de sptiembre del 2017 */

// Importa las librerias externas necesarias para el manejo de la arquitectura
import Reflux from 'reflux'

// Define la clase
let UserAction = Reflux.createActions([
  'list_registers', 
  'GetPDF',
  'DropRegister',
  'ShowConvocatory'
])

// Exporta la clase
export default UserAction