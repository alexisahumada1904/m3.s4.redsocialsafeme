function usuario(nombre,email,trabajo,telefono,sobreti){
  this.nombre = nombre,
  this.email = email,
  this.trabajo = trabajo,
  this.telefono = telefono,
  this.sobreti =sobreti
}

$("#enviar").on("click",function () {
  $("#tarjeta_nombre, #tarjeta_email, #tarjeta_trabajo").html("")

  let nombre = $("#nombre").val()
  let email = $("#email").val()
  let trabajo = $("#trabajo").val()
  let telefono = $("#telefono").val()
  let sobreti = $("#sobreti").val()

  let user = new usuario(nombre,email,trabajo,telefono,sobreti)

  $("#tarjeta_nombre").text(user.nombre)
  $("#tarjeta_email").text(user.email)
  $("#tarjeta_trabajo").text(user.trabajo)
  $("#tarjeta_telefono").text(user.telefono)
  $("#tarjeta_sobreti").text(user.sobreti)

  })