import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '@bookm/domain';

export type BookVector = {
  [K in keyof Book]?: Book[K];
};

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private readonly _http: HttpClient) {}

  books(): Observable<Book[]> {
    return this._http.get<Book[]>('http://localhost:4730/books');
  }

  create(vector: BookVector): Observable<Book> {
    return this._http.post<Book>('http://localhost:4730/books', vector);
  }
}
