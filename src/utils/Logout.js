/*
  Descripcion: Clase realiza el logout del aplicativo a mivel de servidor
  Autor: Carlos Agudelo
  Contacto: agudelo.carlos@hotmail.es
  Fecha de creación: 10 de Junio
  Fecha de modificacion: 10 de Junio
*/

export default function Logout() {

  if(localStorage.jwtToken){
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('current_user')
    localStorage.removeItem('role')
    return true;
  }else {
    return false;
  }
}