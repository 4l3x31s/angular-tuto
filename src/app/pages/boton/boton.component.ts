import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/api/photos.service';
import { IPhoto } from 'src/app/model/iphoto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  public photos: Array<IPhoto> = [];
  constructor(
    private apiPhotos: PhotosService,
    private router: Router
    ) { }

  ngOnInit() {
    this.apiPhotos.get<Array<IPhoto>>()
      .subscribe( datos => {
        this.photos = datos;
      }, err => {
        console.log(err);
      });
  }
  irDetalle() {
    this.router.navigate(['detalle']);
  }
}


/*
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {enviroment} from '../util/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private headers: HttpHeaders;
  private url: string;
  private valor: string;
  constructor(private http:HttpClient) {
    this.url = enviroment.url;
  }
  public getGlobal<Object>(url: string, token: string) {
     // localhost.... + /user/all
    if(token) {
      return this.http.get<Object>(this.url + url,{
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('token', token)
      });
    } else {
      return this.http.get<Object>(this.url + url);
    }
  }
  public postGlobal<Object>(object: any, url: string,token: string) {
    this.valor = JSON.stringify(object);
    if(token) {
      return this.http.post<Object>(this.url + url, this.valor, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('token', token)
      });
    } else {
      return this.http.post<Object>(this.url + url, this.valor, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
      });
    }
  }
  public deleteGlobal<Object>(codigo:string, url: string, token) {
    if (token) {
      return this.http.delete<Object>(this.url + url + codigo, {
        headers: new HttpHeaders()
          .set('token', token)
          .set('Content-Type', 'application/json'),
      });
    } else {
      return this.http.delete<Object>(this.url + url + codigo, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json'),
      });
    }
  }
  public putGlobal<Object>(objeto:any, url: string, id: string, token: string) {
    this.valor = JSON.stringify(objeto);
    if (token) {
      return this.http.put<Object>(this.url + url + id, this.valor, {
        headers: new HttpHeaders()
          .set('token', token)
          .set('Content-Type', 'application/json')
      });
    } else {
      return this.http.put<Object>(this.url + url + id, this.valor, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json'),
      });
    }
  }

}
*/
