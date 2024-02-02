import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  poruka: string;
  
  constructor(private httpClient: HttpClient) { }
  
  ngOnInit() {
    //this.httpClient.get('http://localhost:8080/helloworld', { responseType: 'text' }).subscribe(data => this.poruka = data);
    this.poruka = "Poruka";
  }

}
