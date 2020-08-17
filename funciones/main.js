"use strict";
var heroe = 'Flash';
function imprimirHeroe() {
    return heroe;
}
var batiSignal = function () {
    return 'Batisenial activada.';
};
console.log(batiSignal());
console.log(imprimirHeroe());
function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
}
console.log(nombreCompleto('Ramon', 'Perez'));
function nombreYEdad(nombre, edad) {
    if (edad) {
        return nombre + ' ' + edad.toString();
    }
    else {
        return nombre;
    }
}
console.log(nombreYEdad('Ramon', 28));
function nombreDeCalle(nombre, capitalizar) {
    if (capitalizar === void 0) { capitalizar = false; }
    if (capitalizar) {
        return capitalizarPalabra(nombre);
    }
    return nombre;
}
function capitalizarPalabra(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
console.log(nombreDeCalle('privada jardin', true));
function nombresVariables(nombre) {
    var nombres = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nombres[_i - 1] = arguments[_i];
    }
    return nombre + ' ' + nombres.join(' ');
}
console.log(nombresVariables('Ramon', 'Perez', 'Rodriguez', 'De la Sierra'));
console.log('Funciones como tipo');
function sumar(a, b) {
    return a + b;
}
function navegar() {
    console.log('Navegando...');
}
var miFuncion;
var miFuncion2;
miFuncion = sumar;
console.log(4, 8);
miFuncion2 = navegar;
miFuncion2();
//# sourceMappingURL=main.js.map