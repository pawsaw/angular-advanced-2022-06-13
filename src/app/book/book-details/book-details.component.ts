import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Book } from '../../../domain';
import { bookByIsbnRouteParam } from '../store/book-collection';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<Book | null> = of(null);

  constructor(private readonly _store: Store) {}

  ngOnInit(): void {
    this.book$ = this._store.select(bookByIsbnRouteParam);
  }
}
