//Desafíos
//Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguajesDeProgramacion.push['Java'];
lenguajesDeProgramacion.push['Ruby'];
lenguajesDeProgramacion.push['GoLang'];

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function mostrarLenguaje (lenguajesDeProgramacion){
    for (let i = 0; i < lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i])
    }
}

mostrarLenguaje();

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarLenguajeInverso (lenguajesDeProgramacion){
    for (let i = lenguajesDeProgramacion.length -1 ; i >= 0; i--){
        console.log(lenguajesDeProgramacion[i])
    }
}

mostrarLenguajeInverso();


//Crea una función que calcule el promedio de los elementos en una lista de números.

let listaNumeros = [3,5,6,2,9,1];

function promedioNumeros(listaNumeros){
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++){
    suma += listaNumeros[i];
    let promedio = (suma / listaNumeros.length) ;
    }
    return promedio

}

console.log (promedioNumeros(listaNumeros));

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.


function NumeroMasGrande(listaNumeros){
    let max = listaNumeros[0];
    let min = listaNumeros[0];

    for (let i = 0; i < listaNumeros.length; i++){
    
        if (listaNumeros[i]>max){
            max = listaNumeros[i];
        }
        if(listaNumeros[i]< min){
            min = listaNumeros[i];
        }
        
    }
    console.log('Maximo', max);
    console.log('Minimo', min);
    return { max, min };
}

console.log(NumeroMasGrande(listaNumeros));

//Crea una función que devuelva la suma de todos los elementos en una lista.


function sumaNumeros(listaNumeros){
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++){
    suma += listaNumeros[i];
    }
    return suma
}

console.log (sumaNumeros(listaNumeros));

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.



//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.



//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.