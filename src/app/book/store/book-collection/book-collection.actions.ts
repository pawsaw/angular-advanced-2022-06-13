import { createAction, props } from '@ngrx/store';
import { Book } from '@bookm/domain';
import { BookVector } from '../../book.service';

export const createBookStart = createAction(
  '[Book] Create a new Book',
  props<{
    book: BookVector;
  }>()
);

export const createBookComplete = createAction(
  '[Book] A new Book has been created',
  props<{
    book: Book;
  }>()
);

export const loadBooksStart = createAction('[Book] Load Books Started');
export const loadBooksComplete = createAction(
  '[Book] Load Books Completed',
  props<{ books: Book[] }>()
);
