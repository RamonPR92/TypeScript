//Funciones basicas 
//Una fucion que retorna una  variable
var heroe = 'Flash';
function imprimirHeroe() {
    return heroe;
}
//Una funcion que es asignada a una variable
var batiSignal = function () {
    return 'Batisenial activada.';
};
//Se invocan de la misma forma
console.log(batiSignal());
console.log(imprimirHeroe());
//Funciones con parametros obligatorios
function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
}
console.log(nombreCompleto('Ramon', 'Perez'));
//Funciones con parametros opcionales
//El simbolo ? indica que un parametro puede ser opcional
//Pero dentro de la funcion se deben de hacer validaciones
function nombreYEdad(nombre, edad) {
    if (edad) {
        return nombre + ' ' + edad.toString();
    }
    else {
        return nombre;
    }
}
console.log(nombreYEdad('Ramon', 28));
//Funciones con parametros por default
//Los parametros por default se pueden agregar u omitir, 
//cuando se omiten cuentan con un valor por default indicado en la firma del metodo
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
//Funciones con parametros variables o parametro REST
//funcionan como los var args de Java
function nombresVariables(nombre) {
    var nombres = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nombres[_i - 1] = arguments[_i];
    }
    return nombre + ' ' + nombres.join(' ');
}
console.log(nombresVariables('Ramon', 'Perez', 'Rodriguez', 'De la Sierra'));
//Tipo funcion 
//A las variables se les puede definir u tipo de dato funcion 
//El tipo de dato es la firma de un metodo y solo las funciones que 
//coincidan con la firma serian elegibles para la asignacion
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
