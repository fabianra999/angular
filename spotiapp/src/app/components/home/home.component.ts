import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
    paises: any[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get("https://restcountries.eu/rest/v2")
      .subscribe((data: any) => {
        console.dir(data);
        this.paises = data ;
      });
  }

  ngOnInit() {}
}
