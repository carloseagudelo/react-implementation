/* Descripcion: Clase que valida el token y la autenticidad del mismo
   Autor: Carlos Agudelo
   Contacto: agudelo.carlos@hotmail.es
   Fecha de creación: 10 de Junio
   Fecha de modificacion: 10 de Junio */

   import SelectApp from './SelectApp'
   import SecretConstant from './SecretsConstant'

  // Define y exporta la clase
  export default function GetAdminToken(user_id) {

    let jwt
    $.ajax({
      cache: false,
      context: this,
      async: false,
      data: {user_id: user_id},
      headers: {authorization: localStorage.jwtToken.split(',')[1]},
      url: SecretConstant.HOST_API +'/get_jwt',
      method: 'POST',
      success: function(response, textStatus, xhr){
        if(response.status == 200){
          jwt =  response.payload.message
        }else{
          jwt = null
        }
      },
      error: function(xhr, textStatus){
        browserHistory.push('/error_page/500')
      }
    });
    return jwt
  }
