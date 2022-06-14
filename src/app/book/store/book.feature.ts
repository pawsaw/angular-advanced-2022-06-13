import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { bookCollectionReducer, BookCollectionSlice } from './book-collection';

export interface BookFeatureState {
  bookCollection: BookCollectionSlice;
  // many slices
}

export const bookFeatureName = 'book';

export const bookFeature =
  createFeatureSelector<BookFeatureState>(bookFeatureName);

export const bookFeatureReducers: ActionReducerMap<BookFeatureState> = {
  bookCollection: bookCollectionReducer,
};
