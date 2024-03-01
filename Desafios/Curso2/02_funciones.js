

//Desafíos:


//Crear una función que muestre "¡Hola, mundo!" en la consola.
function mostrarSaludo(){
    let saludo = "¡Hola, mundo!";
    console.log(saludo);
    return;
}

mostrarSaludo();

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function mostrarNombre(nombre){
    console.log(`¡Hola, ${nombre}!`)
}
mostrarNombre('Carla');

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function calcularDoble(numero){
    console.log(`El numero al que se le calculara el doble es ${numero}`);
    return (numero*2);
}

let resultado = calcularDoble(8);
console.log(`El resultado es ${resultado}`);


//Crear una función que reciba tres números como parámetros y devuelva su promedio.

function calcularPromedioTresNumeros(n1,n2,n3){
    return (n1+n2+n3)/3;
}

let resultadopromedio = calcularPromedioTresNumeros(5,10,15);
console.log(resultadopromedio);

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function numMayor(numero1, numero2){
    if (numero1>numero2){
        console.log(numero1);
    }else{
        console.log(numero2)
    }
}

numMayor(5, 8);


//!!!!!!!!!!!!!!!!!!!!!!
function encontrarMayor(a, b) {
    return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);


//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function numeroPorDos(num){
    return num * num;
}

let resultado1 = numeroPorDos(5);
console.log(resultado1);