import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {Book} from '../models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books: Book[] = [];
  author: string;
  title: string;

  constructor(private http: HttpClient) {
  }

  loadBooks(): void {
    this.http.get<Book[]>('http://localhost:3000/books').toPromise().then(data => {
      this.books = data;
    });
  }

  addBook(): void {
    this.http.post('http://localhost:3000/books', {
      author: this.author,
      title: this.title
    }).toPromise().then(() => {
      this.author = null;
      this.title = null;
      this.loadBooks();
    });
  }

  updateBook(book: Book): void {
    this.http.put('http://localhost:3000/books/' + book._id, {
      author: book.author,
      title: book.title
    }).toPromise().then(() => {
      this.loadBooks();
    });
  }

  deleteBook(book: Book): void {
    this.http.delete('http://localhost:3000/books/' + book._id).toPromise().then(() => {
      this.loadBooks();
    });
  }
}
