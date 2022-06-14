import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, of, switchMap } from 'rxjs';
import { Book } from '../../../domain';
import { bookByIsbn } from '../store';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<Book | null> = of(null);

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _store: Store
  ) {}

  ngOnInit(): void {
    this.book$ = this._route.params.pipe(
      switchMap(({ isbn }) => this._store.select(bookByIsbn(isbn))),
      map((book) => book ?? null)
    );
  }
}
