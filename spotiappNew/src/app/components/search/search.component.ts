import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent {
  artistas: any = [];
  loading: boolean;
  constructor(public sotify: SpotifyService) {}

  buscarArtista(termino: string) {
     this.sotify.getArtistas(termino).subscribe((data: any) => {
      // Loading Open
      this.loading = true;
      // Crear Data
      this.artistas = data;
      // Loading close
      this.loading = false;
    });
  }
}
