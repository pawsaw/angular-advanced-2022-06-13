import { bookFeatureName, BookFeatureState } from '../book/store';

export interface AppState {
  [bookFeatureName]: BookFeatureState;
  // ... many features
}
