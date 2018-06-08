import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform( value: any[] ): any {
    const noimages = 'assets/img/noimage.png';

    //No value
    if (!value) {
      return noimages;
    }
    if (value.length > 0) {
      return value[0].url;
    } else {
      return noimages;
    }
  }

}
