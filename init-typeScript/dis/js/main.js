"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gato_1 = require("./modelos/gato");
var gato;
gato = new gato_1.Gato('Misifu', 'Palida');
console.log('gato', gato);
console.dir(gato);
gato.desplazar();
// Conversion de tipo (Casting)
gato.desplazar();
gato.ronronea();
// set nombre
gato.nombre = 'tom';
// get nombre
console.log('Gato es ', gato.nombre);
gato.ronronea();
