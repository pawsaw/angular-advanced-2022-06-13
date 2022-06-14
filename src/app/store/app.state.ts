import { bookFeature, BookFeatureState } from '../book/store';

export interface AppState {
  [bookFeature]: BookFeatureState;
  // ... many features
}
