import { BookCollectionSlice, BookFeatureState } from '../book/store';

export interface AppState {
  book: BookFeatureState;
  // ... many features
}
