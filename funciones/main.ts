//Funciones basicas 
//Una fucion que retorna una  variable
var heroe:string = 'Flash';

function imprimirHeroe():string{
    return heroe;
}

//Una funcion que es asignada a una variable
var batiSignal = function(): string{
    return 'Batisenial activada.';
}

//Se invocan de la misma forma
console.log(batiSignal());
console.log(imprimirHeroe());


//Funciones con parametros obligatorios
function nombreCompleto(nombre:string, apellido:string):string{
    return nombre + ' ' + apellido;
}

console.log(nombreCompleto('Ramon', 'Perez'));

//Funciones con parametros opcionales
//El simbolo ? indica que un parametro puede ser opcional
//Pero dentro de la funcion se deben de hacer validaciones
function nombreYEdad(nombre:string, edad?:number):string{
    if(edad){
        return nombre + ' ' + edad.toString();
    }else{
        return nombre;
    }
}

console.log(nombreYEdad('Ramon', 28));

//Funciones con parametros por default
//Los parametros por default se pueden agregar u omitir, 
//cuando se omiten cuentan con un valor por default indicado en la firma del metodo
function nombreDeCalle(nombre:string, capitalizar:boolean = false){
    if(capitalizar){
        return capitalizarPalabra(nombre);
    }
    return nombre;
}

function capitalizarPalabra(palabra:string):string{
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}

console.log(nombreDeCalle('privada jardin', true));

//Funciones con parametros variables o parametro REST
//funcionan como los var args de Java
function nombresVariables(nombre:string, ...nombres:string[]):string{
    return nombre + ' ' + nombres.join(' ');
}

console.log(nombresVariables('Ramon', 'Perez', 'Rodriguez', 'De la Sierra'));

//Tipo funcion 
//A las variables se les puede definir u tipo de dato funcion 
//El tipo de dato es la firma de un metodo y solo las funciones que 
//coincidan con la firma serian elegibles para la asignacion
console.log('Funciones como tipo');
function sumar(a:number, b:number):number{
    return a + b;
}

function navegar():void{
    console.log('Navegando...');
}


var miFuncion: (x:number, y: number) => number;
var miFuncion2: () => void;

miFuncion = sumar;
console.log(4, 8);

miFuncion2 = navegar;
miFuncion2();


