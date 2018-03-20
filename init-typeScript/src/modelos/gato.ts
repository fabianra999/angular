import { Animal } from "./animales";


export class Gato extends Animal {
    constructor(nombre: string, private raza: string) {
        super(nombre);
    }
    desplazar(): void {
        console.log(`${this._nombre} camina sigiloso`);
    }

    ronronea(): void {
        console.log(`${this._nombre} Esta ronroneando`);
    }

}