import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-hots': 'https://api.rawg.io/api',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials':'true',
        'Access-Control-Allow-Methods':'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers':'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
      },
      setParams: {
        key: '65a1dcbbd39343dfaa2a76c60cecbfe8',
      }
    });
    return next.handle(req);
  }
}
