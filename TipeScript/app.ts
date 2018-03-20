/**
 * Destructuracion objto
 */
let avanger: any = {
    nombre: 'steve',
    clave: "Capitan america",
    poder: ' Droga'
}

let { nombre, poder, clave } = avanger;

console.log(nombre, clave, poder);

/**
 * Destructuracion arreglo
 */
let avanger2: string[] = ['Thor', 'Steve', 'Tony'];
let [thor, capi, ironman] = avanger2;

console.log(thor, capi, ironman);

/**
 * Promesas
 */

let prom1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // Termino bien
        resolve();
        // Termino mal
        // reject();
    }, 1500);
});

prom1.then( function () {
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
class Avanger {
    nombre: string;
    equipo: string;
    nombreReal: string;
    puedePelear: boolean;
    peleasGanadas: number;

    constructor(nombre: string, equipo: string, nombreReal: string) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal
    }
}

let antman: Avanger = new Avanger('antman', 'cap', 'Scott Lang');
console.log(antman);