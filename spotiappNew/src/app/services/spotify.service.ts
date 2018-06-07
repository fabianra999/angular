import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators"

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  /**
   * Nuevo Token
   * https://beta.developer.spotify.com/console/get-search-item/?q=metallica&type=artist&market=&limit=20&offset=
   */
  artistas: any[] = [];
  urlSpotyfy = 'https://api.spotify.com/v1/';
  token = 'BQCWI-rr1KShSiPuoIySCOQu0CmE9Z5Gq9bK7Q6uqZd_9wx6F8WrJy4oetIc7lmxMk5OvNX1qAYThot5ku4';

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
        });
    return headers;
  }

  constructor(private http: HttpClient) {}

  // Nuevo
  getNewReleases() {
    const headers = this.getHeaders();
    const url = `${this.urlSpotyfy}browse/new-releases`;
    return this.http.get(url, { headers })
    .pipe( map( data => {
      return data['albums'].items;
    } ) );
  }

  // Search
  getArtistas(termino: string) {
    const headers = this.getHeaders();
    const url = `${this.urlSpotyfy}search?query=${termino}&type=artist&market=CO&limit=20`;
    return this.http.get(url, { headers: headers })
    .pipe( map( data => data['artists'].items ) );
  }
}