
function reserva(){

let nombreUsuario = prompt("Ingrese su nombre");
let apellidoUsuario = prompt("Ingrese su apellido");
const espacio = " ";

if((nombreUsuario !="") && (apellidoUsuario !="")){
  alert("Hola " + nombreUsuario + espacio + apellidoUsuario);
}else{
  alert("Debe ingresar su nombre completo");
  reserva();
}
while(true){
  let fecha = prompt("Ingrese la fecha a reservar(DD/MM/AAAA)");
  let hora = prompt("Ingrese la hora a reservar(20:00/21:00/22:00)");

  if((fecha !="") && (hora !="")){
    alert (nombreUsuario+ espacio + apellidoUsuario + espacio+ "su reserva se confirmo para el dia " + fecha +espacio+ "a las " +hora+"hs");break;
  }else{
    alert("Debe ingresar fecha y hora");
  }
}
}
reserva()






// let fechaReserva = prompt("Ingrese fecha a reservar");
// let horaReserva = prompt("Ingrese hora a reservar");




















// function validarNombreCompleto(){
//   let nombre = prompt("Ingrese su nombre completo");
//   console.log("Nombre ingresado: " + nombre);

//   if(nombre.trim()===""){
//     alert("Debe ingresar un nombre valido");
//     validarNombreCompleto();
//     return;
//   }
//   var letrasEspacios=/^[a-zA-Z\s]+$/;
//   if(!nombre.match(letrasEspacios)){
//     alert("ingrese un nombre valido");
//     validarNombreCompleto();
//     return;
//   }
//   alert("nombre valido: " + nombre);
// }    
// validarNombreCompleto();

// function validarfechaReserva(){
// var fechaReserva = prompt("Ingrese fecha de la reserva (DD/MM/AAAA)");
// console.log("Fecha de reserva: " + fechaReserva);

// if(fechaReserva.trim()===""){
//   alert("Por favor,ingrese una fecha valida");
//   validarfechaReserva();
//   return;
//   }
//   alert("Fecha confirmada: " + fechaReserva);
// }
// validarfechaReserva();

// function validarhoraReserva(){
// var horaReserva = prompt("Ingrese hora de la reserva (HH:MM AM/PM)");
// console.log("Hora de reserva: " + horaReserva);

// if(horaReserva.trim()===""){
//   alert("Por favor,ingrese una hora valida");
//   validarhoraReserva();
//   return;
//   }
//   alert("Hora confirmada: " + horaReserva);
// }
// validarhoraReserva();

// function ingresarNumeroPersonas(){
//   var cantidadPersonas = prompt("Ingrese el numero de personas para la reserva");
  
//   if(cantidadPersonas.trim()===""){
//   alert("Por favor,ingrese un valor valido");
//   ingresarNumeroPersonas();
//   return;
//   }
//   alert("Cantidad de personas: " + cantidadPersonas);
// }
// ingresarNumeroPersonas();


// function mostrarConfirmacion(){
//   var nombre = validarNombreCompleto();
//   var fechaReserva = validarfechaReserva();
//   var horaReserva = validarhoraReserva();
//   var cantidadPersonas = ingresarNumeroPersonas();

//   var costoPorPersona = 9000;
//   var presupuestoTotal = costoPorPersona*cantidadPersonas;

//   var mensaje = "Hola" + nombre + "su reserva ha sido cnfirmada para el dia" + fechaReserva+"a las"+horaReserva+" El costo por persona es de $"+costoPorPersona+" y su presupuesto total es de $"+presupuestoTotal+" Muchas gracias"
  
//   alert(mensaje);
//   if(cantidadPersonas.trim()===""){
//   alert("Por favor,ingrese un valor valido");
//   ingresarNumeroPersonas();
//   return;
//   }
//   alert("Cantidad de personas: " + cantidadPersonas);
// }
// mostrarConfirmacion();

