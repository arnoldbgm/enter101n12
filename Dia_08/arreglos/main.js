/*🚀 ARRAY ó Arreglos
   ¿Qué es un arreglo?
   Un arreglo es una colección de datos que se pueden almacenar y manipular como una sola unidad.
   Los arreglos son estructuras que almacenan múltiples valores en una sola variable.

   Para crear un arreglo (usamos los corchetes []) y cada valor los separamos con comas.

*/

// let fruta = "manzana";

let frutas = ["manzana", "mango", "pera", "palta", "sandia"];

console.log(frutas)

// Para acceder a un solo valor, colocamos ARREGLO[indice]
console.log(frutas[3])

// Podemos saber cuantos elementos tiene nuestro arreglo
// usamos =>  ARREGLO.length
console.log(frutas.length)

// Podemos añadir nuevo elementos a nuestro arreglo
// usando ARREGLO.push( IRA LO QUE AGREGAREMOS )
frutas.push("melocoton")
console.log(frutas)

// Para borrar un elemento de nuestro arreglo
// usamos ARREGLO.pop() (elimina el último elemento)
frutas.pop()
console.log(frutas)
console.log(frutas.length)

/*
    💚 RETO 04:
   -Crear un arreglo con los nombres de equipo de futbol
   -Luego añadir 3 nuevos equipos al arreglo
   -Mostrar el arreglo en consola 
   -Mostrar la cantidad de equipos que hay en el arreglo
   -Eliminar el último equipo del arreglo
   -Mostrar el tercer equipo del arreglo
*/


/*
   💛 BUCLE:
   Un bucle es una estructura que nos permite repetir un bloque
   de codigo

   While: (Mientras)
   El bucle while ejecuta mientras la condicion sea verdadera

   while (condicion){
      // Codigo
   }

*/
 
let respuesta = prompt("¿Quieres salir del bucle? \n Escribe 'continuar' para contiunar")

while (respuesta == "continuar") {
   alert("Hola sigues en el bucle")
   respuesta = prompt("¿Quieres salir del bucle? \n Escribe 'continuar' para contiunar")
   if(respuesta == "salir"){
      break;
   }
}

let contador = 1;
alert(`Hola soy un contador ${contador}`)

while ( contador <= 10){
   alert(`Hola soy un contador ${contador}`)
   contador = contador + 1;
}


/*
   RETO 04:
   - Crear una funcion que reciba un arreglo de numeros y un numero a pushearse
   [1,2,3,4,5,6,7,8,9,10]
    y tu deseas pushear el 11
   
    CONDICIONES:
   Validar si el arreglo inicial tiene mas de 5 elementos, no debe permitir añadir mas
   El arreglo solo debe de permitir añadir numeros menores a 15, retornar un mensaje que 
   diga "Agregado exitosamente"
   Si el numero es mayor a 15, retornar un mensaje que diga "El numero no es mayor a 15"

   function addElement(arreglo, numero){
   }

   addElement([1,2,3,4,5], 11) => "Agregado exitosamente"
   addElement([1,2,3,4,5], 18) => "El numero es mayor a 15"
   addElement([1,2,3,4,5,6], 16) => "El arreglo ya tiene 5 elementos"
*/