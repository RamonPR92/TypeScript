// Funciones Básicas
function sumar( a:number, b:number ):number{
  return a + b;
}

console.log(sumar(10, 5));

var contar= function( heroes:string[] ):number{
  return heroes.length;
}
var superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
console.log(contar(superHeroes));

//Parametros por defecto
function llamarBatman( llamar:boolean = true ):void{
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes( ...personas:string[]):string{
  return personas.join(", ");
}

console.log(unirheroes(superHeroes));


// Tipo funcion
function noHaceNada( numero:number, texto:string, booleano:boolean, arreglo:string[] ):void{
  console.log(numero.toString());
  console.log(texto);
  console.log(booleano);
  console.log(arreglo.join(' '));
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco : (a:number, b:string, c:boolean, d:string[]) => void;
noHaceNadaTampoco = noHaceNada;
noHaceNadaTampoco(28, 'Ramon', true, ['Ramon', 'Perez', 'Rodriguez']);
