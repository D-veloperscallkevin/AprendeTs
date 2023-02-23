import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { UtilidadComponent } from './utilidad/utilidad.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'intro',component:IntroduccionComponent},
  {path:'utilidad',component:UtilidadComponent},
  {path:'sugerencias',component:SugerenciasComponent},
  {path: '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
