import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent {
  artistas: any = [];

  constructor(public _spotify: SpotifyService) {}

  buscarArtista(termino: string) {
     this._spotify.getArtistas(termino).subscribe( (data: any) => {
      console.log(data.artists.items);
      this.artistas = data.artists.items;
    });

    /*   if (this.termino.length === 0) {
      return;
    }
    this._spotify.getArtistas(this.termino).subscribe(
      artistas => {
      }
    ); */
  }
}
