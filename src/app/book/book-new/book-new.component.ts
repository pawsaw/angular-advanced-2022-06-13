import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { createNewBook } from '@bookm/book/store';

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
      createNewBook({
        book: {
          id: '10',
          title: 'My dummy book',
        },
      })
    );
  }
}
