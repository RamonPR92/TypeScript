/*!
Esto es un comentario 
multilinea y no puede ser eliminado 
ni con el removeComents, pero debe ser el primer comentario en el archivo
*/
/*
Esto es un comentario 
multilinea y lo vamos 
 a retirar con una propiedad
*/
var heroe:string = 'Ramon Perez Rodriguez';
var telefono:number = 36121816;

var funcionImprimir = imprimir(heroe, telefono);
console.log(funcionImprimir);

//Esta funcion pasa el nombre a minusculas y al telefono le suma 4, al final imprime el resultado
function imprimir(nombre:string, telefono:number):string{
    nombre = nombre.toLocaleLowerCase();
    telefono = telefono + 4;
    return nombre + ' ' + telefono;
}