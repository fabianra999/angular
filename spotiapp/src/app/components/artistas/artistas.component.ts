import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styles: []
})
export class ArtistasComponent implements OnInit {
  artista: any = { };

  constructor(private activatedRoute: ActivatedRoute,
              public _spotyfy: SpotifyService) {  }

  ngOnInit() {

    this.activatedRoute.params
      .map( params => params['id'] )
      .subscribe( id => {
        console.log(id);
         this._spotyfy.getArtista( id ).subscribe( artista => {
          console.log( artista );
          this.artista = artista;
        });
      });

  }

}
