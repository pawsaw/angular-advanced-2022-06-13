import { createSelector } from '@ngrx/store';
import { bookFeature } from './book.feature';

export const bookCollection = createSelector(
  bookFeature,
  (feature) => feature.bookCollection.entities
);
