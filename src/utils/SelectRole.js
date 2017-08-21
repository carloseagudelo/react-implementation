import SecretConstant from './SecretsConstant'

export default function Authentication(user_id) {

  var inputOptions

  $.ajax({
    crossDomain: true,
    async:false,
    cache: false,
    context: this,
    url: SecretConstant.HOST_API+'/list_roles_by_user',
    headers: {authorization: localStorage.jwtToken.split(',')[1]},
    method: 'GET',
    success: function(response, textStatus, xhr){
      if(response.status == 200){
        inputOptions = response.payload.data.map((rol) => {
        return(
	      rol.id+': '+rol.name
	    )
      })
	  }else{
	    browserHistory.push('/error_page/500')
	  }
	}, error: function(xhr, textStatus){
	  browserHistory.push('/error_page/500')
	}
  })

  swal({
    title: "SELECCIONE UN ROL",
    input: 'select',
    inputOptions: inputOptions,
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top"
  },
  function(inputValue){
    if (inputValue === false) return false;
    
    if (inputValue === "") {
      swal.showInputError("You need to write something!");
      return false
    }
    
    swal("Nice!", "You wrote: " + inputValue, "success");
  })


}
  
