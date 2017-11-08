/* Descripcion: Clase que valida el token y la autenticidad del mismo
   Autor: Carlos Agudelo
   Contacto: agudelo.carlos@hotmail.es
   Fecha de creación: 10 de Junio
   Fecha de modificacion: 10 de Junio */

  // Define y exporta la clase
  export default function GetFundByRole() {

    var fund
      switch(localStorage.role){
        case 'adminPp':
          fund = 'PRESUPUESTO PARTICIPATIVO'
          break;
        case 'adminTechnology':
          fund = 'BECAS TECNOLOGIA'
          break;
      }
      return fund
  }
