import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhoto } from '../model/iphoto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  public get<T>(): Observable<T> {
    return this.http.get<T>('https://jsonplaceholder.typicode.com/photos?_limit=10');
  }

}
