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
  urlSpotyfy:string = 'https://api.spotify.com/v1/';
  token:string = 'BQAMas690T2MJvP1gPxCZjVdZo2E6vnhWIYghFNSBkc-_kFn24FjeNgMLzHmG4zwa6k81JQ2O8vvcI1CdR-D7z3VLts-hl2jE7_qHRroLekunLQy0dJqj5kPRds83s9pWrNJ1FR6ulfg';

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
        });
    return headers;
  }

  constructor(public http: HttpClient) {
  }

  getArtista( id: string) {
    let url = `${ this.urlSpotyfy }artists/${ id }`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
     /*  .map((respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return this.artistas;
      }); */
  }
 
  getArtistas(termino: string) {
    let url = `${this.urlSpotyfy}search?query=${termino}&type=artist&market=CO&limit=20`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers: headers })
      .map((respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return this.artistas;
      });
  }



}
