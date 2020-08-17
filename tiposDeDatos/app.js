"use strict";
var batman = "Bruce";
var superman = "Clark";
var existe = false;
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
var Fuerza;
(function (Fuerza) {
    Fuerza[Fuerza["fuerzaFlash"] = 5] = "fuerzaFlash";
    Fuerza[Fuerza["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    Fuerza[Fuerza["fuerzaBatman"] = 1] = "fuerzaBatman";
    Fuerza[Fuerza["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
})(Fuerza || (Fuerza = {}));
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
//# sourceMappingURL=app.js.map