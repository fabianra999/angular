import { Animal } from "./modelos/animales";
import { Gato } from "./modelos/gato";
let gato: Animal;
gato = new Gato('Misifu', 'Palida');

console.log('gato', gato);
console.dir( gato);


gato.desplazar();

// Conversion de tipo (Casting)
(gato as Gato).desplazar();
(gato as Gato).ronronea();
// set nombre
gato.nombre = 'tom';
// get nombre
console.log('Gato es ', gato.nombre);
(<Gato> gato).ronronea();