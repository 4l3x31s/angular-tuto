import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhoto } from '../model/iphoto';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos?_limit=10');
  }

}
