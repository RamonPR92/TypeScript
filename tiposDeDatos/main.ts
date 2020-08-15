//General 
//Declaraciones

//Declaracion normal o habitual 
var numero: number = 56;
//Mayuscula en el tipo
var esBatman:Boolean = true;
//Declaracion sin asignacion de valor
var esGatubela:boolean;
//Declaracion sin tipo, el tipo de la variable es dado por el valor 
//y ya no puede cambiar el tipo
var esGuason = false;

//Booleanos 
//Declaracion habitual
var esSuperman: boolean = true;

//Numericos
//enteros 
var avengers: number = 5;
//flotantes
var villanos: number = 5.56;

//Strings
var superman:string = 'Superman';
var batman:string = "Batman";
//Comillas especiales para concatenar los valores de las variables
var superHeroes:string = `Los mejores super heroes son ${superman} y ${batman}`;

//Any
//El tipo Any indica que una variable de ese tipo puede mutar en cualquier tipo segun 
//el valor que se le asigne
var cualquieraSinTipo;//Implicitamente es de tipo any
var cualquiera:any;

cualquiera = 'Ramon';
cualquiera = 45;
cualquiera = true;

//Arreglos
//forma clasica
var nombres:string[] = ['Ramon', 'Perez', 'Rodriguez'];
var numeros = [0,1,2,3,4,5];
//El sigueinte codigo marca error numeros.push('Juan');
//Al signar un tipo de valor la variable ya no puede cambiar de tipo


//Tuplas
//Es un arreglo que puede contener diferentes tipos de datos
//pero el tipo de dato se declara segun la posicion y debe de respetarse
//podria comportarse como un hashmap o una tupla de base de datos
var cliente: [string, number]= ['Ramon', 56];


//Enumerados
//Los enumerados funcionan como en otros lenguajes
//En este ejemplo se observa como se sobreescriben los valores por default que da un enum 
enum Volumen{
    min = 5,
    medio = 10,
    max = 15
}

var audio:Volumen = Volumen.max;

//Void
//Vacio o sin tipo, es utilizado para especificar el tipo de reotorno en un metodo
function imprimirNombre():void{
    console.log(nombres[0]);
}

//Never
//Es utilzado para especificar el tipo de retorno de un error o
//o para una excepcion algo asi
function error(mensaje): never{
    throw new Error(mensaje);
}


//Asersiones o casteo de tipos
//Por medio de <Tipo> y encerrando todo en parentesis podemos hacer el casting de un objeto
var cualquierValor:any= 'Cualquier valor';
var longitud = (<string>cualquierValor).length;

//Null y Undefined
//Null es un valor vacio y es asignable una y mas veces
//Undefined es un tipo de dato y cuando se define una variable
//El valor ya no puede reasignarse 
var juan:string = null;
var pedro:undefined = undefined;

juan = 'Juan';

//Error, no se puede asignar un valor con tipo diferente pedro = 'Pedro';
