import { createAction, props } from '@ngrx/store';
import { Book } from '@bookm/domain';

export const createNewBook = createAction(
  '[Book] Create a new Book',
  props<{
    book: Book;
  }>()
);

export const loadBooksStart = createAction('[Book] Load Books Started');
export const loadBooksComplete = createAction(
  '[Book] Load Books Completed',
  props<{ books: Book[] }>()
);
