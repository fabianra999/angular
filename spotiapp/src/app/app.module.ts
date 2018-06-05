import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//import { FeatureRoutingModule, ROUTES } from './app.routes';

// peticion res
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// services
import { SpotifyService } from './services/spotify.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistasComponent } from './components/artistas/artistas.component';

// Importar Rutas
import { ROUTES } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    ArtistasComponent
  ],
  imports: [
    BrowserModule,
    //FeatureRoutingModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
