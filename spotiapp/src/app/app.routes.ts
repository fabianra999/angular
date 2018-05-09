/**
 * Routes app
 *  => useHash => add (#/)
 */
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistasComponent } from './components/artistas/artistas.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistasComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

/**
 *  ng-router
 *  => Ajuste .forChild(routes) pot .forRoot(routes)
 */
@NgModule({
    imports: [RouterModule.forRoot(app_routes, { useHash: true })],
    exports: [RouterModule]
})

export class FeatureRoutingModule { }


/**
 * U demi
 */

// export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});

