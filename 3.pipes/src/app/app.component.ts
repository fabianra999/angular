import { Component } from '@angular/core';
import { Promise } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Tomas';
  nombre2: string = 'tomas ramirez alba';

  arreglo: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  a: number = 0.234;

  salario: number = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverin",
    edad: "500",
    direccion: {
      caller: "Primera",
      casa: "19"
    }
  };

  fecha = new Date();

  url = "J0ogqBcK9ow";

  activar: boolean = true;

  /*  valorDePromesa = new Promise((resolve, reject) => {
     setTimeout(() => resolve('llego la data'), 350);
   }); */

}
