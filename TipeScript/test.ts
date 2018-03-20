/**
 *  let const
 */
const nombreO: string = "Ricardo Tapia";
let edad: number = 23;

let PERSONAJE: any = {
    nombre: nombre,
    edad: edad
};

/**
 * interface
 */

interface Batman {
    nombre: string;
    artesMarciales: string[];
}

var batman: Batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
}
/**
 * funcion de flecha
 */
function resultadoDoble(a:number, b:number) {
    return (a + b) * 2
}

let resultadoDobleF = (a:number, b:number) => (a + b) * 2;

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"

function getAvenger(nombre:string, poder?:string, arma:string='arco') {
    let mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    } else {
        mensaje = nombre + " tiene un " + poder
    }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {
    
    constructor(public base: number, public altura: number) {
        this.base = base;
        this.altura = altura;
    }
    area():number {
        return this.base * this.altura;
    }
}

let nuevoRectangulo: Rectangulo = new Rectangulo(25, 30);
console.dir(nuevoRectangulo);
console.log(`el area es ${nuevoRectangulo.area()}`);