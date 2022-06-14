import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createBookStart } from '../store/book-collection';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  constructor(private _store: Store) {}

  ngOnInit(): void {}

  createDummyBook(): void {
    this._store.dispatch(
      createBookStart({
        book: {
          isbn: '10',
          title: 'My dummy book',
        },
      })
    );
  }
}
