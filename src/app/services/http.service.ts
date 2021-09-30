import { HttpClient, HttpParams , HttpClientJsonpModule, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Game } from '../model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) { }


  getGameList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>> {

    let header = new HttpHeaders;
    header.set('Access-Control-Allow-Origin','*');
    let params = new HttpParams().set('ordering', ordering);
    if(search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }
    const url = "`${env.BASE_URL}/games"

    return this.http.jsonp<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
      headers: header,
      responseType: 'json'
    });
  }
}
