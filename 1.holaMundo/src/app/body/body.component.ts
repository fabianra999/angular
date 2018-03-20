import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrar:boolean = false;

  frase:any = {
    mensaje:'Un gran poder requiere una gran responsabilidad',
    autor:'Ben Parker'
  }

  personajes:string[] = ['Spiderman', 'Venon', 'Dr. Octopus'];

}
