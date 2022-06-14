import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadBooksStart } from './store/book-collection';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor(private readonly _store: Store) {}

  ngOnInit(): void {
    this._store.dispatch(loadBooksStart());
  }
}
