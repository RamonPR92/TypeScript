"use strict";
/*!
Esto es un comentario
multilinea y no puede ser eliminado
ni con el removeComents, pero debe ser el primer comentario en el archivo
*/
var heroe = 'Ramon Perez Rodriguez';
var telefono = 36121816;
var funcionImprimir = imprimir(heroe, telefono);
console.log(funcionImprimir);
function imprimir(nombre, telefono) {
    nombre = nombre.toLocaleLowerCase();
    telefono = telefono + 4;
    return nombre + ' ' + telefono;
}
//# sourceMappingURL=main.js.map