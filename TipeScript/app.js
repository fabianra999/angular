"use strict";
/**
 * Destructuracion objto
 */
var avanger = {
    nombre: 'steve',
    clave: "Capitan america",
    poder: ' Droga'
};
var nombre = avanger.nombre, poder = avanger.poder, clave = avanger.clave;
console.log(nombre, clave, poder);
/**
 * Destructuracion arreglo
 */
var avanger2 = ['Thor', 'Steve', 'Tony'];
var thor = avanger2[0], capi = avanger2[1], ironman = avanger2[2];
console.log(thor, capi, ironman);
/**
 * Promesas
 */
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // Termino bien
        resolve();
        // Termino mal
        // reject();
    }, 1500);
});
prom1.then(function () {
    console.log('Ejecutar coando termine bien !!!');
}, function () {
    console.error('Ejecutar si todo sale mal');
});
/**
 * Interfaces
 */
/**
* Clase
*/
var Avanger = /** @class */ (function () {
    function Avanger(nombre, equipo, nombreReal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avanger;
}());
var antman = new Avanger('antman', 'cap', 'Scott Lang');
console.log(antman);
