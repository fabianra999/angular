import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http: HttpClient) {
  }


  /**
   * Nuevo Token
   * https://beta.developer.spotify.com/console/get-search-item/?q=metallica&type=artist&market=&limit=20&offset=
   */
  getArtista(termino: string) {
    let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&market=CO&limit=20`;
    let headers = new HttpHeaders({
      'authorization': 'Bearer BQBQbStb9azbAacg7DKqDFbzXJhaDAhYUu-g19ByYlnJ_I8Bj5d9cF1sdBJqoI53hxE-ILy9EmapOJlzriTX0D2wvpAvnYQ8BDJhsgt1y717sAB1CiqUqVxBkphOW1Fq34EUlqqY6uf7'
    });

    return this.http.get(url, { headers: headers })
      .map((respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return this.artistas;
      });
  }

}
