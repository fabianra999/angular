Rutas en Angular


1.  Crear componentes About, Heroes, Home.
    $ ng g c about

2. crear archivo app.routes.ts
     Spa/src/app/components/app.routes.ts

3.  En app.routes.ts generar  ng-routes template. 
        import { RouterModule, Routes } from '@angular/router';

        const app_routes: Routes = [
            { path: 'home', component: HomeComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'home' }
        ];

export const app_routing = RouterModule.forRoot(app_routes);

4.  Importar Modulos de paginas: About, Heroes, Home.
        import { HomeComponent } from './components/home/home.component';
        import { AboutComponent } from './components/about/about.component';
        import { HeroesComponent } from './components/heroes/heroes.component';

5.  Crear pats por pagina: About, Heroes, Home.
        const app_routes: Routes = [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'heroes', component: HeroesComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'home' }
        ];

6.  Crear binculos en el menu q dirigan a paginas por medio de [routerLink]="''"
         <a class="nav-link" [routerLink]="'home'" >Home</a>
         <a class="nav-link" [routerLink]="'heroes'" >Heroes</a>
         <a class="nav-link" [routerLink]="'about'" >About</a>

7.  Importar app.routing en app.modules.ts 
        // Rutas
        import { app_routing } from './app.routes';
    llamar en imports del decorador.
        imports: [
            BrowserModule,
            app_routing
        ],

8.  Crear clase activa en vinculo actual 
        <li class="nav-item" routerLinkActive="active">


Servicios consumo de informacion
1.  Crear servicios/heroes.service.ts
2.  Importar servicio en app.module.ts
3.  Instanciar el servicio en los providers de app.module.ts
4.  heroes.service.ts crear el componente gn-service.
5.  Crear array de objetois y una interface para el array.
        export interface Heroes {
            nombre: string;
            bio: string;
            img: string;
            aparicion: string;
            casa: string;
        };
6.  En el servicio crear un metodo para retornar el arreglo anterior 
        getHeroes(): Heroes[] {
            return this.heroes;
        }
7.  Importar servisio 
        import { HeroesService, Heroes } from "../../servicios/heroes.service";
8.  Instanciar el servicio en el constructor
        constructor(private _heroesService: HeroesService,
                    private _router: Router) {
        }
9.  generar arreglo con el servicio.
    - Crear arreglo vacio =>  heroes: Heroes[] = [];
    - Generar contenido en la funcion ngOnInit();
    - this.heroes = this._heroesService.getHeroes();


Metodo para pagina por heroe id

1.  heroes.service.ts crear un metodo con parametro en donde retorna una pocision del arreglo
         getHeroe(idx: string) {
            return this.heroes[idx];
        }      

