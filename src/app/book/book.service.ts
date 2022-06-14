import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '@bookm/domain';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private readonly _http: HttpClient) {}

  books(): Observable<Book[]> {
    return this._http.get<Book[]>('http://localhost:4730/books');
  }
}
