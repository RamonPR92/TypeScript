"use strict";
var flash = {
    nombre: 'Barry Allen',
    edad: 28,
    poderes: ["Correr rapido", 'Viajar por el tiempo']
};
flash = {
    nombre: 'Superman',
    edad: 27,
    poderes: ['Ser millonario']
};
var yo = {
    nombre: 'Ramon',
    edad: 28,
    telefono: 3317572094,
    getNombre: function () {
        return this.nombre;
    }
};
var tu = {
    nombre: 'Ramon',
    edad: 28,
    telefono: [33, 17, 57, 20, 94],
    getNombre: function () {
        return this.nombre;
    }
};
var el = {
    nombre: 'Juan',
    edad: 17,
    telefono: [33, 18, 19, 20, 98],
    getNombre: function () {
        return this.nombre;
    }
};
var edad = 28;
edad = '28';
var nombre = 'Ramon';
if (typeof nombre === 'string') {
    console.log('La variable ' + nombre + ' es un string');
}
else {
    console.log('La variable ' + nombre + ' NO es un string');
}
//# sourceMappingURL=main.js.map