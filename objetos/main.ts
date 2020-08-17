//Objetos basicos
//Los objetos basicos en TS el tipo de dato es inferido unaa vez declarado 
//y ya no puede cambiarse, si se asigna un nuevo valor a un objeto las variables deben coincidir con el nombre
var flash = {
    nombre : 'Barry Allen',
    edad : 28,
    poderes: ["Correr rapido", 'Viajar por el tiempo']
}

flash = {
    nombre: 'Superman',
    edad: 27,
    poderes: ['Ser millonario']
}

//Objetos de tipos especificos
//Los tipos de las variables se definen en llaves
//Los metodos deben de contener el nombre y como tipo la firma del metodo
var yo : {nombre:string, edad:number, telefono:number, getNombre: () => string} ={
    nombre: 'Ramon',
    edad: 28,
    telefono: 3317572094, 
    getNombre():string{
        return this.nombre;
    }
}

//Definicion de tipo personalizados con Type
//Type es una alternativa a las clases, es utilizado como molde 
type Persona = {
    nombre:string,
    edad:number,
    telefono:number[],
    getNombre: () => string
}

var tu : Persona ={
    nombre: 'Ramon',
    edad: 28,
    telefono: [33,17,57,20,94], 
    getNombre():string{
        return this.nombre;
    }
}

var el : Persona ={
    nombre: 'Juan',
    edad: 17,
    telefono: [33,18,19,20,98], 
    getNombre():string{
        return this.nombre;
    }
}

//Multiples tipos permitidos 
//Es posible definir multiples tipos opcionales aceptados para una variable o funciones mediante el simbolo |
//En este caso la variable edad puede contener valores del tipo string o number
var edad: string | number = 28;
edad = '28';

//Varificacion de tipos mediante la palabra typeof
//typeof variable retorna el tipo de la variable en string

var nombre:string = 'Ramon';

if(typeof nombre === 'string'){
    console.log('La variable ' + nombre + ' es un string');
}else{
    console.log('La variable ' + nombre + ' NO es un string');
}