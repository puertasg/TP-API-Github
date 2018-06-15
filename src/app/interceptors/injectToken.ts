import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class InjectTokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes('api.github.com')) {
            const clone = req.clone({ setHeaders: { 'Authorization': '444b441e8a493f8fd6907aadaecf50251515036f' } });
            return next.handle(clone);
        }
        return next.handle(req);
    }
}