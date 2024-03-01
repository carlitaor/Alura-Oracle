
//Desafio
//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;
while(contador <= 10){
    alert(`El contador esta en: ${contador} `)
    contador = contador+1;
}

//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador1 = 10;
while(contador1 >= 1){
    alert(`El contador esta en: ${contador1} `)
    contador1 = contador1 - 1;
}

//Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando 
//un bucle 'while' en la consola del navegador.

let numeroMaximo1 = prompt("Ingresa un número para la cuenta regresiva:");

while (numeroMaximo1 >= 0) {
console.log(numeroMaximo1);
numeroMaximo1--;
}

//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numeroMaximo2 = prompt("Ingresa un número para la cuenta progresiva:");
let contador2 = 0;

while (contador2 <= numeroMaximo2) {
console.log(contador2);
contador2++
}