
//Desafíos:

//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaDeLaSemana = prompt("¿Qué día de la semana es?");
if (diaDeLaSemana === 'Sábado' || diaDeLaSemana === 'Domingo'){
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt("Ingresa un numero: ")
if(numero>0){
    alert("El numero es positivo");
}else if(numero<0){
    alert("El numero es negativo");
}else{
    alert("El numero es igual a 0");

}

//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
//En caso contrario, muestra "Intenta nuevamente para ganar.".

let puntuacion = prompt("Ingrese la puntuacion que saco: ");
if(puntuacion>=100){
    alert("¡Felicidades, has ganado!");
}else{
    alert("Intenta nuevamente para ganar.");
}


//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
//utilizando un template string para incluir el valor del saldo.
let saldoCuenta = 85622;
alert(`El saldo de tu cuenta es: $${saldoCuenta}`)



//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombreUsuario = prompt("Ingrese su nombre de usuario:");
alert("Bienvenido al juego, " + nombreUsuario + "!");

