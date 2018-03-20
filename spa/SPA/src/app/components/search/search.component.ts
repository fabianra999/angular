import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../servicios/heroes.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  heroes:any[] = [];
termino:string;

  constructor(private _ActivatedRoute:ActivatedRoute, private _HeroesService:HeroesService) { 

  }

  ngOnInit() {
    this._ActivatedRoute.params.subscribe( params=> {
      console.log(params['termino']);
      this.termino = params['termino']; 
      this.heroes = this._HeroesService.BuscarHeroes( params['termino'] );
      console.log(this.heroes);
    })  }

}
