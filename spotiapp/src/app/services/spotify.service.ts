import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http: HttpClient) {
  }


  /**
   * 
   * Nuevo Token
   * https://beta.developer.spotify.com/console/get-search-item/?q=metallica&type=artist&market=&limit=20&offset=
   */
  getArtista( termino: string) {
    let url = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&market=CO&limit=20`;
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQCQDtbvBsM3NtLOZBHQctZPDIGPz5Jimt4YKqM18snJM2Iaa9wj2ZU8b5-xFRb5hukFpBkg6RwafaOSw8LMPUl5-kPGvkergWM5FQutK6uMn8LxSkdtbu2WOJt8Nebp7P07ej01UMKR'
    });

    return this.http.get(url, { headers: headers })
      .map((respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return  this.artistas;
      }
      );
  }

}
