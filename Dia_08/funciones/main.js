/*
  🚀 FUNCIONES
  funcion  iniciarLaCafetera{
    // Todos los pasos para inicie mi cafetera
  }
*/

/*
  🍏 Pasos para crear una funcion

  🌟 TIP => Nombra a las funciones => usando palabras descriptivas es decir que se pueda entender
  que hace la funcion, por ejemplo: iniciarLaCafetera, iniciarElMotor, etc.
  function [NOMBRE DE LA FUNCION] ( [PARAMETROS] ){
  }
*/

function iniciarLaCafetera (){
   // Va toda nuestra logica para iniciar la cafetera
   console.log("Calentando agua...");
   console.log("Agregando cafe molido...");
   console.log("Agregando azucar...");
   console.log("Sirviendo el cafe...");
}


// ¿Como llamamos a la funcion o la ejecutamos?
/* Para ejecutar una funcion debes de colocar el nombre de esta:
   [NOMBRE DE LA FUNCION]();
   Por ejemplo: iniciarLaCafetera();
*/

// Llamamos a la funcion o ejecutamos la funcion o invoco la funcion
// iniciarLaCafetera();
// iniciarLaCafetera();
// iniciarLaCafetera();
// iniciarLaCafetera();

/*
   🍏 Función con Parametros
   Una funcion con parametros, es aquella que recibe un valor o varios, para realizar las tareas indicads
   Parametros => son los valores que recibira la funcion, para realizar su logica

   Funciones con retorno y sin retorno:
   retorno => Son aquellas funciones que te van a devolver un valor
   sin retorno => Son aquellas funciones que no te devuelven, solo ejecutan una logica
*/

/*
Tenemos un terreno de unas dimension de 50 x 40 y queremos saber el area de este terreno
   Area = base * altura
*/

function calcularArea (base, altura){
   let area = base * altura;
   return area;
}

console.log(calcularArea(60,10))

/*
 Estamos en un bar y solo debemos permitir el ingreso a las personas 
 mayores de 18 años
*/

function ingresoBar(nombre, edad){
   if(edad >= 18){
      return `Hola ${nombre} puedes pasar`;
   } else{
      return `Hola ${nombre} no puedes pasar`
   }
}

console.log(ingresoBar("Summy", 12))

/*
   RETO 01
   Crear la funcion para calcular el area de un triangulo, esta funcion debe de recibir
   2 parametros base y altura, y se debe de retornar el area del triangulo
   Area = (base * altura) / 2
   Ejemplo: calcularAreaTriangulo(10, 5) => 25

   RETO 02
   Crear una funcion que convierta de grados centigrados a grados farenheit
   Esta funcion debe de recibir un parametro que es el valor en grados centigrados
   y debe de retornar el valor en grados farenheit
   Formula: F = C * 9/5 + 32
   Donde F = grados farenheit y C = grados centigrados
   Ejemplo: convertirGrados(30) => 86

   RETO 03
   Crear una funcion que reciba 2 parametros, el primero es la placa del auto, y el segundo 
   es la velocidad del auto, y debe de retornar un mensaje que diga si el auto va a exceso de velocidad o no

   Si la velocidad es mayor a 80 km/h, el auto va a exceso de velocidad, si no, no va a exceso de velocidad
   Ejemplo: verificarExcesoVelocidad("ABC123", 90) => "El auto ABC123 va a exceso de velocidad"
   Ejemplo: verificarExcesoVelocidad("ABC123", 70) => "El auto ABC123 no va a exceso de velocidad"

   🌟 RETO EXTRA 03 => Si el auto esta en velocidad => indicar que el auto esta estacionado

*/

function verificarExcesoVelocidad(placa, velocidad){
   // if(velocidad >80){
   //    return `El auto con placa ${placa} va a exceso de velocidad 🚓`
   // } else if(velocidad === 0){
   //    return `El auto esta estacionado`
   // } else{
   //    return `El auto con placa ${placa} no va a exceso de velocidad 💚`
   // }

   if(velocidad > 80){
       return `El auto con placa ${placa} va a exceso de velocidad 🚓`
   } else if ( velocidad < 80 && velocidad > 0){
       return `El auto con placa ${placa} no va a exceso de velocidad`
   } else{
      return `El auto esta parado`
   }
}

console.log(verificarExcesoVelocidad("ABC-001", 60))