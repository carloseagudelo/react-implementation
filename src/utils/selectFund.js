var fundName
if (localStorage.getItem("role") == "adminPp"){
  fundName = "PRESUPUESTO PARTICIPATIVO"
}else{
  fundName = "BECAS TECNOLOGIA"
}

module.exports = fundName;
