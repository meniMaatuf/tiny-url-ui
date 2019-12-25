import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {catchError} from 'rxjs/operators';

export interface Item {
  originalUrl: string;
  shortUrl: string;
  ShortCode: string;
}

@Injectable({
  providedIn: 'root'
})

export class TinyUrlService {

  constructor(private http: HttpClient) {

  }

  getOriginalUrl(url: string): Observable<Item> {

    const code = url.substring(url.lastIndexOf('/') + 1);
    return this.http.get<Item>(`${environment.tinyUrlServiceBaseUrl}/api/item/${code}`);
  }

  postUrl(url: string): Observable<Item> {
    return this.http.post<Item>(`${environment.tinyUrlServiceBaseUrl}/api/item`, {originalUrl: url})
      .pipe(catchError(error => of(error)));

  }
}
