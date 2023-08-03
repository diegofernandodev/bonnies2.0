import { Cuadrado } from "./cuadrado";

let cuadrado1 = new Cuadrado (8)
cuadrado1.calculararea
cuadrado1.calcularperimetro

import { Rectangulo } from "./rectangulo";

let rectangulo1 = new Rectangulo (21,24)
console.log(rectangulo1.calcularArea());
console.log(rectangulo1.calcularPerimetro());

import { Circulo } from "./circulo";

let circulo1 = new Circulo (12)
console.log(circulo1.calcularAreaCirculo());
console.log(circulo1.calcularPerimetroCirculo());

import { Rombo } from "./rombo";

let rombo1 = new Rombo (25,32)
console.log(rombo1.calcularArea());
console.log(rombo1.calcularPerimetro());

import { Trapecio } from "./trapecio";

let trapecio1 = new Trapecio (12,21,22,32)
console.log(trapecio1.calcularArea());
console.log(trapecio1.calcularPerimetro());


import { trianguloRectangulo } from "./trianguloRectangulo";

let trianguloRectangulo1 = new trianguloRectangulo(12,4)

console.log(trianguloRectangulo1.calcularArea());
console.log(trianguloRectangulo1.calcularPerimetro());

