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