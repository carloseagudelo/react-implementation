import SecretConstant from './SecretsConstant'

export default function Authentication(user_id) {

  var inputOptions;

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
          return(rol.id.toString()+': '+ rol.name)
        })
	  }else{
	    browserHistory.push('/error_page/500')
	  }
	}, error: function(xhr, textStatus){
	  browserHistory.push('/error_page/500')
	}
  })

  var data = inputOptions,
  roles = data.map(function (str) {
    var piece = str.split(':');
    return { id: piece[0], name: piece[1] };
  });

  var result = roles.reduce(function(map, obj) {
    map[obj.id] = obj.name;
    return map;
  }, {});

  swal({
    title: "SELECCIONE UN ROL",
    input: 'select',
    inputOptions: result,
    inputPlaceholder: 'SELECCIONE UN ROL',
	inputValidator: function (value) {
	  return new Promise(function (resolve, reject) {
	    if (value === '') {
	      reject('DEBE SELECCIONAR UN ROL')
	    }else {
	      $.ajax({
		    crossDomain: true,
		    cache: false,
		    context: this,
		    data: {role: value},
		    url: SecretConstant.HOST_API+'/change_role',
		    headers: {authorization: localStorage.jwtToken.split(',')[1]},
		    method: 'PUT',
		    success: function(response, textStatus, xhr){
          localStorage.setItem('role', response.payload.role);
		      $(".loader").hide();
          if(response.status == 200){
            swal({
              type: 'success',
              html: 'You selected: ' + value
            })
            resolve()
            }else if(response.status == 400){
              swal("ERROR", response.payload.message, "error")
            }else{
            browserHistory.push('/error_page/500')
          }
		    },
		    error: function(xhr, textStatus){
		      $(".loader").hide();
		      browserHistory.push('/error_page/500')
		    }
		  });
	    }
	  })
	}
  })
}


