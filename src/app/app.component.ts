import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  books = [];

  constructor(private http: HttpClient) {
    
  }
  ngOnInit(): void {
    this.http.get<[]>("http://localhost:3000/books").subscribe( data => {
      this.books = data
    })
  }


}
