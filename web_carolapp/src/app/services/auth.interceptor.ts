import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { httpClient } from '@carol/carol-sdk/lib/http-client';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = httpClient.authToken;

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + idToken.replace(/\"/g, ''))
      });

      return next.handle(cloned).pipe(
        catchError((error: any) => {
          if (error.status === 401) {
            this.router.navigate(['login']);
          }
          return throwError(error);
        })
      );
    } else {
      if (req.url !== '/api/v2/oauth2/token') {
        this.router.navigate(['login']);
      }
      return next.handle(req);
    }
  }
}
