
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

// ------- preentrega2 ------- //

let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas(maximo8)"));
if(cantidadPersonas>=1 && cantidadPersonas<=8){
if(cantidadPersonas<=5){
  let reserva = []

  for(let i=0;i<cantidadPersonas; i++){
    let nombre = prompt("Ingrese el nombre de la persona #" + (i+1) + ":");
    reserva.push(nombre);
  }alert("Genial, los nombres fueron registrados "+reserva)
}
}else{
  alert("No hay disponibilidad para esa cantidad de personas en esta fecha")
}


let menu1 ={
  entrada: "Tapeo",
  platoPrincipal: "Asado",
  bebida: "Gaseosa y Vino",
  postre: "Helado"
};

let menu2 ={
  entrada: "Tapeo",
  platoPrincipal: "Pasta",
  bebida: "Gaseosa y Vino",
  postre: "Helado"
};

const menus = [menu1, menu2];

let opcionMenu= prompt("Elige un tipo de menu: 1 o 2");
if(opcionMenu ==="1" || opcionMenu === "2"){
  let menuElegido = menus[opcionMenu-1];

alert("Has elegido el siguiente menu:");
alert("Entrada: " + menuElegido.entrada);
alert("Plato principal: " + menuElegido.platoPrincipal);
alert("Bebida: " + menuElegido.bebida);
alert("Postre: " + menuElegido.postre);
}else{
  alert("Opcion Invalida. Por favor elige 1 o 2.");
}




















