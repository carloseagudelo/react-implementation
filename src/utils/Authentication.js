/*
  Descripcion: Clase que valida el token y la autenticidad del mismo
  Autor: Carlos Agudelo
  Contacto: agudelo.carlos@hotmail.es
  Fecha de creación: 10 de Junio
  Fecha de modificacion: 10 de Junio
*/
import jwt from 'jsonwebtoken'
import SetAuthorizationToken from './SetAuthorizationToken'
import SecretConstant from './SecretsConstant'

export default function Authentication(token) {

  let data = jwt.decode(token) // desencripta la información del token almacenado en el localStorage
  if(validate(data)){
    localStorage.setItem('jwtToken', 'Autorized, ' + token)
    localStorage.setItem('current_user', data.email)
    localStorage.setItem('role', data.role)
    localStorage.setItem('user_id', data.user_id)
    SetAuthorizationToken(token)
    return true;
  }else {
    return false;
  }
}

function validate(data) {
  if(data.secret == SecretConstant.PASSWORD_AUT_TOKEN && data.date <= Date.now && data.email != '' && data.role != ''){
    return true
  }else {
    return false
  }
}
