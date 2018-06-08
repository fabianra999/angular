import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-tarjetetas',
  templateUrl: './tarjetetas.component.html',
  styleUrls: ['./tarjetetas.component.scss']
})
export class TarjetetasComponent  {
@Input() items: any[] = [];
  constructor() { }

}
