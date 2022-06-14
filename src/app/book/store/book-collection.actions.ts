import { createAction, props } from '@ngrx/store';
import { Book } from '@bookm/domain';

export const createNewBook = createAction(
  '[Book] Create a new Book',
  props<{
    book: Book;
  }>()
);
