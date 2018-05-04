import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[]): any {
    let noimages = 'assets/img/noimage.png';

    /**
     * No value
     */
    if (!value) {
      return noimages;
    }
    if (value.length > 0) {
      return value[1].url;
    } else {
      return noimages;
    }

  }

}
