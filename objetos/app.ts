type Automovil = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros: number,
  disparar?:() => void
};
// Objetos
var batimovil:Automovil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

var bumblebee: Automovil = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};



// Villanos debe de ser un arreglo de objetos personalizados
type Villano = {
  nombre: string,
  edad: number,
  mutante: boolean
};

var villanos: Villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: 12,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type HeroeBueno = {
  poder: string,
  estatura: number
}

type HeroeMalo = {
  lider: boolean,
  miembros: string[]
}

var charles: HeroeBueno = {
  poder:"psiquico",
  estatura: 1.78
};

var apocalipsis: HeroeMalo = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
var mystique: HeroeMalo | HeroeBueno;

mystique = charles;
mystique = apocalipsis;
