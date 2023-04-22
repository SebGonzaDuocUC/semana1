/* PRACTICA DE PROGRAMACIÓN EN JAVASCRIPT */

// Función que permite sumar 3 numeros
function addition(num1 = 0, num2 = 0, num3 = 0) {

    // Declaramos resultado
    let res = new Number();

    // Adición de numeros
    res = num1 + num2 + num3;

    // Retorno de resultado
    return res;
}

// Declaración de variables
let average = new Number();

// Variable para evaluar
let sw = new Number();

// Obtiene el promedio de 3 numeros
average = addition(0, 0, 7) / 3;

// Validamos promedio
if(average >= 1 && average < 4) {
    
    sw = 3;

} else if(average >= 4 && average < 5) {

    sw = 4;

} else if(average >= 5 && average < 6) {

    sw = 5;

} else if(average >= 6 && average < 7) {

    sw = 6;
}

// Declaración de variable estado
let state = new String();

// Evaluamos promedio
switch(sw) {

    case 3:
        state = "Es: Insuficiente";
    break;

    case 4:
        state = "Es: Suficiente";
    break;

    case 5:
        state = "Es: Bueno";
    break;

    case 6:
        state = "Es: Muy Bueno";
    break;

    default:
        state = "No Evaluado";
    break;
}

// Muestra el resultado
console.log("El promedio es: ", state);

// División consola
console.log("=========================================================");

/***************************************************************************/

// Declaramos arreglo
let object1 = new Array();

// Agregamos valores al arreglo
object1 = ["Juan Perez", 50, 4.3, true];

// Imprimimos nombre
console.log("Nombre: ", object1[0]);

// Imprimimos edad
console.log("Edad: ", object1[1]);

// Imprimimos promedio
console.log("Promedio: ", object1[2]);

// Declarado estado civil
let civilState = new String();

if(object1[3] = true) {

    civilState = "Casado";

} else {

    civilState = "Soltero";
}

// Imprimimos estado civil
console.log("Estado Civil: ", civilState);

// División consola
console.log("=========================================================");

// Recorrido
for(x = 0; x < object1.length; x++) {
    
    console.log("Data array in for:", object1[x]);
}

// División consola
console.log("=========================================================");

let index = 0;

// Recorrido
while(index < object1.length) {

    console.log("Data array in while:", object1[index]);

    index++;
}