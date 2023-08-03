import { Cuadrado } from "./cuadrado";
console.log("*******************************************************************");
console.log("***************************CUADRADO********************************");
console.log("*******************************************************************");
let cuadrado1 = new Cuadrado (8)
console.log(`Área de un cuadrado: ${cuadrado1.calculararea()}`);
console.log(`Perímetro de un cuadrado: ${cuadrado1.calcularperimetro()}`);

import { Rectangulo } from "./rectangulo";
console.log("*******************************************************************");
console.log("**************************RECTANGULO*******************************");
console.log("*******************************************************************");

let rectangulo1 = new Rectangulo (21,24)
console.log(`Área de un rectangulo: ${rectangulo1.calcularArea()}`);
console.log(`Perímetro de un rectangulo: ${rectangulo1.calcularPerimetro()}`);

import { Circulo } from "./circulo";
console.log("*******************************************************************");
console.log("****************************CIRCULO********************************");
console.log("*******************************************************************");

let circulo1 = new Circulo (12)
console.log(`Área de un circulo: ${circulo1.obtenerAreaConDosDecimales()}`);
console.log(`Perímetro de un circulo: ${circulo1.obtenerPerimetroConDosDecimales()}`);

import { Rombo } from "./rombo";
console.log("*******************************************************************");
console.log("*****************************ROMBO*********************************");
console.log("*******************************************************************");

let rombo1 = new Rombo (25,32)
console.log(`Área de un rombo: ${rombo1.calcularArea()}`);
console.log(`Perímetro de un rombo: ${rombo1.obtenerPerimetroConDosDecimales()}`);

import { Trapecio } from "./trapecio";
console.log("*******************************************************************");
console.log("***************************TRAPECIO********************************");
console.log("*******************************************************************");

let trapecio1 = new Trapecio (12,21,22,32)
console.log(`Área del trapecio: ${trapecio1.calcularArea()}`);
console.log(`Perímetro del trapecio: ${trapecio1.calcularPerimetro()}`);


import { TrianguloRectangulo } from "./trianguloRectangulo";
console.log("*******************************************************************");
console.log("*********************TRIANGULO RECTANGULO**************************");
console.log("*******************************************************************");

let trianguloRectangulo1 = new TrianguloRectangulo(12,4)

console.log(`Área de un triangulo Rectangulo: ${trianguloRectangulo1.calcularArea()}`);
console.log(`Perímetro de un triangulo Rectangulo: ${trianguloRectangulo1.obtenerPerimetroConDosDecimales()}`);
console.log(`Hipotenusa de un triangulo Rectangulo: ${trianguloRectangulo1.obtenerHipotenusaConDosDecimales()}`);
console.log(`Tipo de triangulo: ${trianguloRectangulo1.determinarTipoTriangulo()}`);

