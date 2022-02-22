import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Book} from '../models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  books: Book[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.http.get<Book[]>('http://localhost:3000/books').subscribe(data => {
      console.log('load books response', data);
      this.books = data;
    });
  }
}
