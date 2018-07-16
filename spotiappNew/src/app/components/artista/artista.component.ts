import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html",
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  loading: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    // Loader Open
    this.loading = true;
    this.router.params.subscribe(params => {
      console.log(params);
      this.getArtista(params["id"]);
    });
  }
  getArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe(data => {
      console.log(data);
      this.artista = data;
      // Loader Close
      this.loading = false;
    });
  }
}
