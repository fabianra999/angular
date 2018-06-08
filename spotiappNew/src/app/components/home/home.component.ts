import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe((data: any) => {
      //Loading open
      this.loading = true;
      // Crear data
      //console.log(  data.albums.items );
      this.nuevasCanciones = data;
      //this.nuevasCanciones = data.albums.items;
      //Loading Close
      this.loading = false;
    });
  }
}
