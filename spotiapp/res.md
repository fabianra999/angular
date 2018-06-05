1.  Importar angular http en el modilo 
        import { HttpClient } from "@angular/common/http";

2. llamado en el contructor y creasion del array contenedor
        export class HomeComponent implements OnInit {
            paises: any[] = [];

            constructor(private httpClient: HttpClient) {
                this.httpClient.get("https://restcountries.eu/rest/v2")
                .subscribe((data: any) => {
                    console.dir(data);
                    this.paises = data ;
                });
            }
        }

3.  Importar HttpClientModule en app.module.ts e intanciarla en array imports
        import { HttpClientModule } from '@angular/common/http';
