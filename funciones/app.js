"use strict";
function sumar(a, b) {
    return a + b;
}
console.log(sumar(10, 5));
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
console.log(contar(superHeroes));
function llamarBatman(llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
}
llamarBatman();
function unirheroes() {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
}
console.log(unirheroes(superHeroes));
function noHaceNada(numero, texto, booleano, arreglo) {
    console.log(numero.toString());
    console.log(texto);
    console.log(booleano);
    console.log(arreglo.join(' '));
}
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
noHaceNadaTampoco(28, 'Ramon', true, ['Ramon', 'Perez', 'Rodriguez']);
//# sourceMappingURL=app.js.map