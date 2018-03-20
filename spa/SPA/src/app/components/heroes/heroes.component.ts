import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from "../../servicios/heroes.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  /**
   * Init arreglo vacio
   *  => heroes: Heroes[] = Arreglo creado para incluir arreglo del servicio HeroesService
   */
  heroes: Heroes[] = [];

  /**
   * constructor
   * @param _heroesService => Nombre asignado al servicio HeroesService
   */
  constructor(private _heroesService: HeroesService,
              private _router: Router) {
  }

  /**
   * Init Componen
   * se llama el arreglo vacio (heroes: Heroes[]) y sele asigna el servicio con el metodo .getHeroes()
   */
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }
  /**
   * Metodo verHeroe();
   *  Redireccion d con id por item
   *  @param idx => id ng-for
   */
  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }

}
