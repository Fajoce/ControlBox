import { Injectable } from '@angular/core';
import { SpinnerService } from './spinner-service.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this.spinnerService.isLoading.next(true);
    return next.handle(req).pipe(
      finalize( () => this.spinnerService.isLoading.next(false))
    );
  }
}
