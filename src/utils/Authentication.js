/* Descripcion: Clase que valida el token y la autenticidad del mismo
   Autor: Carlos Agudelo
   Contacto: agudelo.carlos@hotmail.es
   Fecha de creación: 10 de Junio
   Fecha de modificacion: 10 de Junio */

// Importa las librerias externas
import jwt from 'jsonwebtoken'
import SetAuthorizationToken from './SetAuthorizationToken'
import SecretConstant from './SecretsConstant'

// Define y exporta la clase
export default function Authentication(token) {

  let data = jwt.decode(token) // desencripta la información del token almacenado en el localStorage
  if(validate(data)){
    // Guarda la información en el local storage
    localStorage.setItem('jwtToken', 'Autorized, ' + token)
    localStorage.setItem('current_user', data.email)
    localStorage.setItem('role', data.role)
    localStorage.setItem('user_id', data.user_id)
    localStorage.setItem('user_name', data.user_name)
    localStorage.setItem('document_type', data.document_type)
    console.log(data)
    console.log(data.document_number)
    localStorage.setItem('document_number', data.document_number)

    SetAuthorizationToken(token)
    return true;
  }else {
    return false;
  }
}

// Funcion que valida la autenticidad del token que recibe del servidore backend
function validate(data) {
  if(data.secret == SecretConstant.PASSWORD_AUT_TOKEN && data.date <= Date.now && data.email != ''){
    return true
  }else {
    return false
  }
}
