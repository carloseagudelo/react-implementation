var fundName
if (localStorage.getItem("role") == "adminPp"){
  fundName = "PRESUPUESTO PARTICIPATIVO"
}else if (localStorage.getItem("role") == "admin"){
  fundName = "FONDOS"
}else if (localStorage.getItem("role") == "adminTechnology"){
  fundName = "BECAS TECNOLOGÍA"
}else{
  fundName = ""
}

module.exports = fundName;
