import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { BookService } from '../../book.service';
import { loadBooksComplete, loadBooksStart } from './book-collection.actions';

@Injectable()
export class BookCollectionEffects {
  loadCollection = createEffect(() =>
    this._actions$.pipe(
      ofType(loadBooksStart),
      exhaustMap((action) => this._books.books()),
      map((books) => loadBooksComplete({ books }))
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _books: BookService
  ) {}
}
