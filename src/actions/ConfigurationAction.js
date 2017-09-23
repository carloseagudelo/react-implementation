/*  Descripcion: Clase de tipo Action que contiene la interfaz para los llamados a las acciones con el nombre de
                 las implementaciones en el store
    Autor: Carlos Agudelo
    Contacto: agudelo.carlos@hotmail.es
    Fecha de creación: 6 de Mayo del 2017
    Fecha de modificacion: 23 de Junio 2017 */

// Importa las librerias externas necesarias para el manejo de la arquitectura
import Reflux from 'reflux'

// Define la clase
let ConfigurationAction = Reflux.createActions([
  'ListFunds',
  'ListDocumentsWithFund',
  'SaveDocumentsFund',
  'UsersWithValidators',
  'SendUpdateValidators',
  'SaveRestriction',
  'ListConvocatories',
  'SaveConvocatory',
  'SaveFund'
])

// Exporta la clase
export default ConfigurationAction