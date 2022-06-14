import { createFeatureSelector } from '@ngrx/store';
import { BookCollectionSlice } from './book-collection.slice';

export interface BookFeatureState {
  bookCollection: BookCollectionSlice;
  // many slices
}

export const bookFeatureName = 'book';

export const bookFeature =
  createFeatureSelector<BookFeatureState>(bookFeatureName);
