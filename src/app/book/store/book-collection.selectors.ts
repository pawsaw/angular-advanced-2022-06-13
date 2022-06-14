import { createSelector } from '@ngrx/store';
import { bookFeature } from './book.feature';

export const bookCollection = createSelector(
  bookFeature,
  (feature) => feature.bookCollection.entities
);

export const bookByIsbn = (isbn: string) =>
  createSelector(bookCollection, (books) =>
    books.find((book) => book.id === isbn)
  );
