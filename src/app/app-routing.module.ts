import { DetalleComponent } from './pages/detalle/detalle.component';
import { BotonComponent } from './pages/boton/boton.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: BotonComponent},
  {path: 'detalle', component: DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
