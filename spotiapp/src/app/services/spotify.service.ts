import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {
 /**
   * Nuevo Token
   * https://beta.developer.spotify.com/console/get-search-item/?q=metallica&type=artist&market=&limit=20&offset=
   */
  artistas: any[] = [];
  urlSpotyfy = 'https://api.spotify.com/v1/';
  token = 'BQAR6zIT9i-3IQRL0V2vvNnf4VjuCzU9Hx_Ld_QKqB8GeznFlmioCyXnHSXFpUGPkahx223bVHz1dkt__n4';

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

    return this.http.get(url, { headers: headers });
     /*  .map((respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return this.artistas;
      }); */
  }

  getNewReleases () {
    const headers = this.getHeaders(); 
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

}
