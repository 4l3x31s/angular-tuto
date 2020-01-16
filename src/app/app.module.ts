import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotonComponent } from './pages/boton/boton.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './pages/detalle/detalle.component';

//jsonplaceholder.typicode.com/photos?_limit=10

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
