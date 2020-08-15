//General 
//Declaraciones
//Declaracion normal o habitual 
var numero = 56;
//Mayuscula en el tipo
var esBatman = true;
//Declaracion sin asignacion de valor
var esGatubela;
//Declaracion sin tipo, el tipo de la variable es dado por el valor 
//y ya no puede cambiar el tipo
var esGuason = false;
//Booleanos 
//Declaracion habitual
var esSuperman = true;
//Numericos
//enteros 
var avengers = 5;
//flotantes
var villanos = 5.56;
//Strings
var superman = 'Superman';
var batman = "Batman";
//Comillas especiales para concatenar los valores de las variables
var superHeroes = "Los mejores super heroes son " + superman + " y " + batman;
//Any
//El tipo Any indica que una variable de ese tipo puede mutar en cualquier tipo segun 
//el valor que se le asigne
var cualquieraSinTipo; //Implicitamente es de tipo any
var cualquiera;
cualquiera = 'Ramon';
cualquiera = 45;
cualquiera = true;
//Arreglos
//forma clasica
var nombres = ['Ramon', 'Perez', 'Rodriguez'];
var numeros = [0, 1, 2, 3, 4, 5];
//El sigueinte codigo marca error numeros.push('Juan');
//Al signar un tipo de valor la variable ya no puede cambiar de tipo
//Tuplas
//Es un arreglo que puede contener diferentes tipos de datos
//pero el tipo de dato se declara segun la posicion y debe de respetarse
//podria comportarse como un hashmap o una tupla de base de datos
var cliente = ['Ramon', 56];
//Enumerados
//Los enumerados funcionan como en otros lenguajes
//En este ejemplo se observa como se sobreescriben los valores por default que da un enum 
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 5] = "min";
    Volumen[Volumen["medio"] = 10] = "medio";
    Volumen[Volumen["max"] = 15] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.max;
//Void
//Vacio o sin tipo, es utilizado para especificar el tipo de reotorno en un metodo
function imprimirNombre() {
    console.log(nombres[0]);
}
//Never
//Es utilzado para especificar el tipo de retorno de un error o
//o para una excepcion algo asi
function error(mensaje) {
    throw new Error(mensaje);
}
//Asersiones o casteo de tipos
//Por medio de <Tipo> y encerrando todo en parentesis podemos hacer el casting de un objeto
var cualquierValor = 'Cualquier valor';
var longitud = cualquierValor.length;
//Null y Undefined
//Null es un valor vacio y es asignable una y mas veces
//Null es un tipo al que se le puede asignar undefined como valor
//Undefined es un tipo de dato y cuando se define una variable
//El valor ya no puede reasignarse 
var juan = null;
var pedro = undefined;
var ramon = undefined;
juan = 'Juan';
//Error, no se puede asignar un valor con tipo diferente pedro = 'Pedro';
