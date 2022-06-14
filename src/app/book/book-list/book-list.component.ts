import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '@bookm/domain';
import { Store } from '@ngrx/store';
import { bookFeature } from '../store';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]> = of([]);

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this.books$ = this._store.select(
      (state) => state.book.bookCollection.entities
    );
  }
}
