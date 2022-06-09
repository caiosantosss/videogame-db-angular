import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
require('dotenv').config();

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'b31c70ecc4msh132c1c17726e970p15e960jsnf9185954e311',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: '88f5efe9350643c0b3020f8bf3ea9f5b',
      }
    });
    return next.handle(req);
  }
}
