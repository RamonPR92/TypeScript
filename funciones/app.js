// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
console.log(sumar(10, 5));
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
console.log(contar(superHeroes));
//Parametros por defecto
function llamarBatman(llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
}
llamarBatman();
// Rest?
function unirheroes() {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
}
console.log(unirheroes(superHeroes));
// Tipo funcion
function noHaceNada(numero, texto, booleano, arreglo) {
    console.log(numero.toString());
    console.log(texto);
    console.log(booleano);
    console.log(arreglo.join(' '));
}
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
noHaceNadaTampoco(28, 'Ramon', true, ['Ramon', 'Perez', 'Rodriguez']);
