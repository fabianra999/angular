import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
 /**
   * Nuevo Token
   * https://beta.developer.spotify.com/console/get-search-item/?q=metallica&type=artist&market=&limit=20&offset=
   */
  artistas: any[] = [];
  urlSpotyfy = 'https://api.spotify.com/v1/';
  token = 'BQAMas690T2MJvP1gPxCZjVdZo2E6vnhWIYghFNSBkc-_kFn24FjeNgMLzHmG4zwa6k81JQ2O8vvcI1CdR-D7z3VLts-hl2jE7_qHRroLekunLQy0dJqj5kPRds83s9pWrNJ1FR6ulfg';

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
        });
    return headers;
  }

  constructor(public http: HttpClient) {
  }

  getArtista( id: string) {
    const url = `${ this.urlSpotyfy }artists/${ id }`;
    const headers = this.getHeaders();

    return this.http.get(url, { headers });
     /*  .map((respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return this.artistas;
      }); */
  }

  getArtistas(termino: string) {
    const url = `${this.urlSpotyfy}search?query=${termino}&type=artist&market=CO&limit=20`;
    const headers = this.getHeaders();

    return this.http.get(url, { headers: headers })
      .map((respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return this.artistas;
      });
  }



}
