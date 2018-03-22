import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activar: boolean = true): any {
    console.log(value.length);
    let numberString: number = value.length;

    if (activar) {
      let salida: string = "";
      console.log(`Hola if: ${salida}. numnero es: ${numberString},`);

      for (let i = 0; i < value.length; i++) {
        salida += "*";
      }

      return salida;
    } else {
      return value;
    }
  }

}
