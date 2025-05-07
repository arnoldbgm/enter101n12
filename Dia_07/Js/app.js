/* Variables */
/* Debemos de usar el prefijo const ó let*/
/*
  🚀 Tipos de datos:
  DATOS PRIMITIVOS:
    - String   =>  textos  => ""
    - Number   => numero
    - Bollean => true   false
*/

/*
  📖 Buenas practicas:
   - Termines con  ;
   - Nombres descriptivos para nuestras variables
*/


let nombre = "Ricardo";
let apellido = "Torres";
let estatura = 180;
let capacidadDeVotar = true;

/*
  Mostrar dentro de la consola
      console.log( VA_NUESTRA_VARIABLE  )
  🍏 Concatenar las variables
      console.log( VARIABLE + VARIABLE2)
      Backticks `` alt + 96
      console.log( `${VARIABLE} ${VARIABLE2}` )
 */

//console.log(nombre + " " + apellido)
console.log(`Alumno: ${nombre} ${apellido} Estatura: ${estatura}cm Votar: ${capacidadDeVotar}`)

/*
  📖 RETO 01
  Somos una biblioteca con cientos de libros, necesitos que se cree una variable donde se guarde el titulo, el autor, nro de paginas y su disponibilidad.

  Y con ellas mostrar en consola lo siguiente:
      La iliada es una obra de Homero tiene 120 paginas y su disponibilidad es true 
  🌟 IMPORTANTE => Concatenar y usar los backticks
*/

/* OPERADORES
  - Aritmetico
      Suma =>  +
      Resta =>  -
      Division =>  /
      Multiplicacion =>  *
      Residuo => %
      Exponente  => **  => ^
  - Comparativo - Comparacion
      Igualdad =>   ==
      Igualdad Fuerte =>  ===
      Mayor =>  >
      Menor=>   <
      Mayor Igual =>     >=
      Menor Igual =>     <=
      Desigualdad =>  !=
*/

let num1 = 5; // Number
let num2 = 20;

// let suma = num1 + num2;
// let resta = num1 - num2;  // 15 - 20 = -5
// let division = num1 / num2; // 15 / 20 = 0.75
// let multiplicacion = num1 * num2; // 15 * 20 = 300
// let residuo = num2 % num1 // Residuo de dividir 20 / 5
// let exponente = 2 ** 3
// console.log(suma)
// console.log(resta)
// console.log(division)
// console.log(multiplicacion)
// console.log(residuo)
// console.log(exponente)

console.log(num1 > num2)
console.log(num1 < num2) // 5 < 20
console.log(num1 == '5') // 5 == '5'
console.log(num1 === '5') // 5 === 20
console.log(num1 != num2)  // 5 != 20

/* MUTABILIDAD
  La capacidad de una variable apodtar distintos varoles o tipos de datos primitivos
 */
let personajeAnimado = "Bugs Bunny";

console.log(`Hola soy ${personajeAnimado}`)

// Para mutar una variable esta ya debe de estar creada antes
personajeAnimado = "Pato Lucas";

console.log(`Hola soy ${personajeAnimado}`)

personajeAnimado = "El Gallo Claudio"

console.log(`Hola soy ${personajeAnimado}`)
console.log(`Hola soy ${personajeAnimado}`)
console.log(`Hola soy ${personajeAnimado}`)

/*
  CONST
  Para crear constantes (o variables inmutables)
 */

const pi = 3.14;
const dni = "12345678";
const fechaNacimiento = "25/12/2000";

/* Estructuras de Control (Condicionales) 
 if - else - else if
*/

/*
 if( condition ){
   // Bloque de codigo
 }
*/

let hora = 15;
if (hora < 11) {
  console.log("Buenos dias")
}

let edadVotar = 15;
if (edadVotar >= 18) {
  console.log("Tu estas listo para votar")
} else {
  console.log("Tu no estas listo para votar")
}


/*
   🍏EJERCICIO 01
   Tenemos un sistema de cambio de dolares a soles y viceversa
   Debo usar el Tipo de cambio de 3.75
   Considerar hacer un sistema con opciones:
      1. Cambiar de soles a dolares
      2. Cambiar de dolares a soles
 */

let opcion = 3;
let soles = 375;
let dolares = 2000;

if (opcion === 1) {
  console.log("Procesando cambio de soles a dolares")
  dolares = soles / 3.75
  console.log(`Tu dolares son ${dolares}`)
} else if (opcion === 2) {
  console.log("Procesando cambio de dolares a soles")
  soles = dolares * 3.75
  console.log(`Tu soles son ${soles}`)
} else {
  console.log("Opcion invalida")
}

