import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UsuarioService } from './services/usuario.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private userService: UsuarioService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.userService.getToken();

    if (token) {
      // If we have a token, we set it to the header
      request = request.clone({
         setHeaders: {
          Authorization: token
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              // redirect user to the logout page
          }
        }

        return throwError(err);
      })
    );
  }
}

