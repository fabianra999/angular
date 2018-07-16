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

  getQuey( query: string ) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDZw9jtuh0GVPLwNItC-17hxmH00dOHDAFFw79XSzsgbCcrVaJJSCNlk9HJo8b8MLahqxBalhXMLJxXyPM'
    });
    return this.http.get(url, {headers});
  }


  constructor(private http: HttpClient) {}

  // Nuevo
  getNewReleases() {
    return this.getQuey('browse/new-releases')
    .pipe( map( data => {
      return data['albums'].items;
    } ) );
  }

  // Search
  getArtistas(termino: string) {
    return this.getQuey(`search?q=${termino}&type=artist&limit=20`)
    .pipe( map( data => data['artists'].items ) );
  }

  // Artista
  getArtista(id: string) {
    return this.getQuey(`artists/${id}`)
  }

}