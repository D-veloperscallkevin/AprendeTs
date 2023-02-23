import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { UtilidadComponent } from './utilidad/utilidad.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InformacionComponent } from './informacion/informacion.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { IntroTextComponent } from './intro-text/intro-text.component';
import { CardsComponent } from './cards/cards.component';
import { IntroTituloComponent } from './intro-titulo/intro-titulo.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeveloperComponent } from './developer/developer.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroduccionComponent,
    SugerenciasComponent,
    UtilidadComponent,
    NavbarComponent,
    CarouselComponent,
    InformacionComponent,
    FooterComponent,
    FormComponent,
    IntroTextComponent,
    CardsComponent,
    IntroTituloComponent,
    HomeComponent,
    DeveloperComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
