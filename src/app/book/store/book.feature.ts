import { BookCollectionSlice } from './book-collection.slice';

export interface BookFeatureState {
  bookCollection: BookCollectionSlice;
  // many slices
}

export const bookFeature = 'book';
